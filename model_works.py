import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Cargar datos históricos
df_hist = pd.read_csv("datos_biogeos.csv", parse_dates=["fecha"])
df_hist = df_hist[['fecha', 'clorofila']].dropna()

# Cargar predicciones
df_pred = pd.read_csv("predicciones_2026_clorofila.csv", parse_dates=["dia"])
df_pred.rename(columns={"dia": "fecha"}, inplace=True)

# Resetear índices para graficar secuencialmente
df_hist = df_hist.reset_index(drop=True)
df_pred = df_pred.reset_index(drop=True)

# Crear eje x secuencial
x_hist = np.arange(len(df_hist))
x_pred = np.arange(len(df_hist), len(df_hist) + len(df_pred))

# Crear la gráfica
plt.figure(figsize=(12, 6))

# Graficar datos observados
plt.plot(x_hist, df_hist['clorofila'], label="Clorofila observada", color='blue')

# --- GRAFICAR PREDICCIONES ---

if {'clorofila_media', 'clorofila_min', 'clorofila_max'}.issubset(df_pred.columns):
    # Si hay media, mínimo y máximo
    plt.plot(x_pred, df_pred['clorofila_media'], label="Clorofila predicha (media)", color='green')
    plt.fill_between(x_pred, df_pred['clorofila_min'], df_pred['clorofila_max'],
                     color='green', alpha=0.3, label="Rango de predicción")
elif 'clorofila' in df_pred.columns:
    # Si solo hay una columna, graficar versión suavizada
    df_pred['clorofila_suavizada'] = df_pred['clorofila'].rolling(window=5, center=True).mean()
    plt.plot(x_pred, df_pred['clorofila_suavizada'], label="Clorofila predicha (suavizada)", color='green')
else:
    print("No se encontraron columnas válidas para predicción en df_pred.")

# Línea vertical indicando separación entre observado y predicho
plt.axvline(x=len(df_hist) - 1, color='red', linestyle='--', label="Inicio predicciones")

# Estética
plt.xlabel("Tiempo (índice)")
plt.ylabel("Clorofila")
plt.title("Serie temporal de clorofila: Observada y Predicha")
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
