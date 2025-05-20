import pandas as pd
import matplotlib.pyplot as plt

# Cargar datos
df = pd.read_csv("datos_biogeos.csv", parse_dates=['fecha'])
df.set_index('fecha', inplace=True)

variables = ['fosforo', 'nitrato', 'silicato', 'carbono_inorg_dislto', 'hierro']

for var in variables:
    plt.figure(figsize=(10, 4))
    plt.plot(df.index, df[var], label=var, color='tab:blue')
    plt.title(f"Tendencia de {var} en el tiempo")
    plt.xlabel("Fecha")
    plt.ylabel(var)
    plt.grid(True)
    plt.legend()
    plt.show()
