import xarray as xr
import pandas as pd

# Cargar datasets
ds_chl = xr.open_dataset("clorofila.nc")
ds_po4 = xr.open_dataset("fosforo_.nc")
ds_fe = xr.open_dataset("iron_water.nc")
ds_dissic = xr.open_dataset("carbono_disuelto.nc")
ds_no3 = xr.open_dataset("nitrato.nc")  # Cambia por el nombre real de tu archivo de nitrato
ds_si = xr.open_dataset("silicato.nc")

# Extraer series en el único punto espacial y de profundidad
chl = ds_chl['chl'].isel(depth=0, latitude=0, longitude=0)
po4 = ds_po4['po4'].isel(depth=0, latitude=0, longitude=0)
fe = ds_fe['fe'].isel(depth=0, latitude=0, longitude=0)
dissic = ds_dissic['dissic'].isel(depth=0, latitude=0, longitude=0)
no3 = ds_no3['no3'].isel(depth=0, latitude=0, longitude=0)
si = ds_si['si'].isel(depth=0, latitude=0, longitude=0)

# Extraer fechas
fechas = ds_chl['time'].values  # Suponiendo que todas las fechas coinciden

# Crear DataFrame
df = pd.DataFrame({
    "fecha": fechas,
    "clorofila": chl.values,
    "fosforo": po4.values,
    "carbono_inorg_dislto": dissic.values,
    "hierro": fe.values,
    "nitrato": no3.values,
    "silicato": si.values
})

# Guardar a CSV
df.to_csv("datos_biogeos.csv", index=False)

print("✅ Archivo 'datos_biogeos.csv' generado con clorofila, fosforo, carbono inorgánico y nitrato.")
