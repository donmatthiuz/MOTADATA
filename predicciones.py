import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

# Cargar datos y preparar índice fecha
df = pd.read_csv("datos_biogeos.csv", parse_dates=['fecha'])
df.set_index('fecha', inplace=True)

variables = ['fosforo', 'nitrato', 'silicato', 'carbono_inorg_dislto', 'hierro']

lag = 12  # días previos usados para predecir siguiente
periodos_prediccion = 365  # predecir todo 2026 diario

def crear_lags(data, lags=12):
    df_lag = pd.DataFrame()
    for i in range(1, lags+1):
        df_lag[f'lag_{i}'] = data.shift(i)
    return df_lag

# DataFrame para guardar predicciones 2026
fecha_inicio_pred = pd.Timestamp('2026-01-01')
fechas_2026 = pd.date_range(start=fecha_inicio_pred, periods=periodos_prediccion, freq='D')
df_pred_2026 = pd.DataFrame(index=fechas_2026)

for var in variables:
    print(f"Procesando variable: {var}")
    serie = df[var]

    df_lags = crear_lags(serie, lag)
    df_modelo = pd.concat([serie, df_lags], axis=1).dropna()
    df_modelo.columns = ['target'] + [f'lag_{i}' for i in range(1, lag+1)]

    X = df_modelo.drop('target', axis=1)
    y = df_modelo['target']

    # Usamos todo el dataset para entrenar (ya que queremos predecir más allá)
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)

    # Predicción iterativa
    ultimos_lags = serie[-lag:].values.tolist()
    preds_2026 = []
    for _ in range(periodos_prediccion):
        X_pred = np.array(ultimos_lags[-lag:]).reshape(1, -1)
        y_pred = model.predict(X_pred)[0]
        preds_2026.append(y_pred)
        ultimos_lags.append(y_pred)

    df_pred_2026[var] = preds_2026

print("\nPredicciones para 2026 guardadas en df_pred_2026:")
print(df_pred_2026.head())

# Guardar en CSV si quieres
df_pred_2026.to_csv("predicciones_2026.csv")
