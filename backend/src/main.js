// Importamos las dependencias necesarias
const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { Parser } = require('json2csv');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const PORT = 3000;
app.use(cors());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true 
}));


app.use(bodyParser.json());


let data = [];
const csvFilePath = path.join(__dirname, 'datos.csv');


function loadCSVData() {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(csvFilePath)
      .pipe(csv({

        mapHeaders: ({ header }) => header.trim()
      }))
      .on('data', (row) => {

        const cleanedRow = {};
        Object.keys(row).forEach(key => {
          cleanedRow[key.trim()] = row[key].trim();
        });
        results.push(cleanedRow);
      })
      .on('end', () => {
        data = results;
        console.log('Datos CSV cargados correctamente:', data);
        resolve();
      })
      .on('error', (error) => {
        console.error('Error al cargar el CSV:', error);
        reject(error);
      });
  });
}


function saveCSVData() {
  return new Promise((resolve, reject) => {
    try {
      const parser = new Parser({ 
        fields: ['Año', 'Clorofila'] 
      });
      const csv = parser.parse(data);
      fs.writeFileSync(csvFilePath, csv);
      console.log('Datos guardados correctamente en el CSV');
      resolve();
    } catch (error) {
      console.error('Error al guardar los datos en el CSV:', error);
      reject(error);
    }
  });
}


app.get('/api/data', (req, res) => {
  res.json(data);
});


app.get('/api/clorofila/:año', (req, res) => {
  const año = req.params.año;
  

  const registro = data.find(item => item.Año === año);
  
  if (registro) {
    res.json({
      año: registro.Año,
      clorofila: registro.Clorofila
    });
  } else {
    res.status(404).json({ 
      mensaje: `No se encontraron datos de clorofila para el año ${año}` 
    });
  }
});


app.post('/api/clorofila', async (req, res) => {
  const { año, clorofila } = req.body;
  

  if (!año || !clorofila) {
    return res.status(400).json({ 
      mensaje: 'Se requieren los campos "año" y "clorofila"' 
    });
  }
  

  const existente = data.findIndex(item => item.Año === año.toString());
  
  if (existente !== -1) {

    data[existente].Clorofila = clorofila.toString();
  } else {
    data.push({
      'Año': año.toString(),
      'Clorofila': clorofila.toString()
    });
  }
  
  try {
    await saveCSVData();
    res.status(201).json({ 
      mensaje: 'Datos de clorofila guardados correctamente',
      año,
      clorofila 
    });
  } catch (error) {
    res.status(500).json({ 
      mensaje: 'Error al guardar los datos', 
      error: error.message 
    });
  }
});


app.put('/api/clorofila/:año', async (req, res) => {
  const año = req.params.año;
  const { clorofila } = req.body;
  
  if (!clorofila) {
    return res.status(400).json({ 
      mensaje: 'Se requiere el campo "clorofila"' 
    });
  }
  
  const index = data.findIndex(item => item.Año === año);
  
  if (index === -1) {
    return res.status(404).json({ 
      mensaje: `No se encontraron datos para el año ${año}` 
    });
  }
  

  data[index].Clorofila = clorofila.toString();
  
  try {
    await saveCSVData();
    res.json({
      mensaje: 'Valor de clorofila actualizado correctamente',
      año,
      clorofila
    });
  } catch (error) {
    res.status(500).json({ 
      mensaje: 'Error al guardar los datos', 
      error: error.message 
    });
  }
});


app.delete('/api/clorofila/:año', async (req, res) => {
  const año = req.params.año;
  const index = data.findIndex(item => item.Año === año);
  
  if (index === -1) {
    return res.status(404).json({ 
      mensaje: `No se encontraron datos para el año ${año}` 
    });
  }
  
  const eliminado = data.splice(index, 1)[0];
  
  try {
    await saveCSVData();
    res.json({
      mensaje: 'Registro eliminado correctamente',
      dato: eliminado
    });
  } catch (error) {
    res.status(500).json({ 
      mensaje: 'Error al guardar los cambios', 
      error: error.message 
    });
  }
});


async function startServer() {
  try {
    await loadCSVData();
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
      console.log('Endpoints disponibles:');
      console.log('- GET /api/data: Obtener todos los registros');
      console.log('- GET /api/clorofila/:año: Obtener clorofila por año');
      console.log('- POST /api/clorofila: Añadir nuevo registro (año y clorofila)');
      console.log('- PUT /api/clorofila/:año: Actualizar valor de clorofila');
      console.log('- DELETE /api/clorofila/:año: Eliminar registro');
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

startServer();