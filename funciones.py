import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

# Cargar datos y preparar índice fecha
df = pd.read_csv("datos_biogeos.csv", parse_dates=['fecha'])
df.set_index('fecha', inplace=True)

variables = ['fosforo', 'nitrato', 'silicato', 'carbono_inorg_dislto', 'hierro']

# Parámetros
lag = 12  # cantidad de periodos previos usados para predecir el siguiente
periodos_prediccion = 12  # predecir 12 meses del 2026 (ajusta según frecuencia)

def crear_lags(data, lags=12):
    df_lag = pd.DataFrame()
    for i in range(1, lags+1):
        df_lag[f'lag_{i}'] = data.shift(i)
    return df_lag

predicciones_2026 = {}

for var in variables:
    print(f"\nProcesando variable: {var}")
    serie = df[var]

    # Crear dataframe con lags
    df_lags = crear_lags(serie, lag)
    df_modelo = pd.concat([serie, df_lags], axis=1).dropna()
    df_modelo.columns = ['target'] + [f'lag_{i}' for i in range(1, lag+1)]

    # Dividir en X e y
    X = df_modelo.drop('target', axis=1)
    y = df_modelo['target']

    # Dividir train/test (últimos 12 meses para test)
    X_train, y_train = X[:-periodos_prediccion], y[:-periodos_prediccion]
    X_test, y_test = X[-periodos_prediccion:], y[-periodos_prediccion:]

    # Entrenar Random Forest
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Evaluar en test
    y_pred_test = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred_test)
    print(f"Test MSE para {var}: {mse:.5f}")

    # Predecir iterativamente para 2026
    ultimos_lags = serie[-lag:].values.tolist()
    preds_2026 = []
    for _ in range(periodos_prediccion):
        X_pred = np.array(ultimos_lags[-lag:]).reshape(1, -1)
        y_pred = model.predict(X_pred)[0]
        preds_2026.append(y_pred)
        ultimos_lags.append(y_pred)  # actualizar ventana para siguiente predicción

    predicciones_2026[var] = preds_2026

    # Graficar cada variable individualmente
    plt.figure(figsize=(10,6))
    plt.plot(df.index, df[var], label='Histórico')
    fechas_pred = pd.date_range(start=df.index[-1] + pd.Timedelta(days=30), periods=periodos_prediccion, freq='M')
    plt.plot(fechas_pred, preds_2026, label='Predicción 2026', marker='o')
    plt.title(f"Predicción {var} para 2026")
    plt.xlabel("Fecha")
    plt.ylabel(var)
    plt.legend()
    plt.grid(True)
    plt.show()
