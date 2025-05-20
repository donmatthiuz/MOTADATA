import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Cargar CSV
df = pd.read_csv("datos_biogeos.csv", parse_dates=['fecha'])

# Seleccionar solo las columnas numéricas para correlación
variables = ['clorofila', 'fosforo', 'carbono_inorg_dislto', 'hierro', 'nitrato', 'silicato']

# Calcular matriz de correlación
corr_matrix = df[variables].corr()

print("Matriz de correlación:")
print(corr_matrix)

# Correlación con la variable respuesta 'clorofila'
print("\nCorrelación con clorofila:")
print(corr_matrix['clorofila'].sort_values(ascending=False))

# Visualización con heatmap
plt.figure(figsize=(8,6))
sns.heatmap(corr_matrix, annot=True, cmap="coolwarm", fmt=".2f")
plt.title("Matriz de correlación entre variables")
plt.show()


# revisar multicolinealidad

# Variables predictoras (sin la variable respuesta 'clorofila')
predictoras = ['fosforo', 'carbono_inorg_dislto', 'hierro', 'nitrato', 'silicato']

# Matriz de correlación solo entre variables predictoras
corr_predictoras = df[predictoras].corr()

print("Matriz de correlación entre variables predictoras:")
print(corr_predictoras)

# Visualizar heatmap para predictoras
plt.figure(figsize=(6,5))
sns.heatmap(corr_predictoras, annot=True, cmap="coolwarm", fmt=".2f")
plt.title("Correlación entre variables predictoras")
plt.show()
