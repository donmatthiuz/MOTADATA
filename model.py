import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt

# Cargar datos
df = pd.read_csv("datos_biogeos.csv", parse_dates=['fecha'])

# Variables predictoras y respuesta
X = df[['fosforo', 'nitrato', 'silicato', 'carbono_inorg_dislto', 'hierro']].values
y = df['clorofila'].values

# Escalar variables predictoras
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Dividir datos
X_train, X_temp, y_train, y_temp = train_test_split(X_scaled, y, test_size=0.2, random_state=42)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)

print(f"Train: {X_train.shape}, Validation: {X_val.shape}, Test: {X_test.shape}")

# Construir modelo RNA
model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dense(32, activation='relu'),
    Dense(1)
])

model.compile(optimizer='adam', loss='mse', metrics=['mae'])

early_stop = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=100,
    batch_size=32,
    callbacks=[early_stop],
    verbose=1
)

# Evaluar en test
test_loss, test_mae = model.evaluate(X_test, y_test)
print(f"Test MSE: {test_loss:.4f}, Test MAE: {test_mae:.4f}")

# Predicciones
y_pred = model.predict(X_test).flatten()

# Mostrar arquitectura de la red
model.summary()

# Gráfica: valores reales vs predichos
plt.figure(figsize=(8,6))
plt.scatter(y_test, y_pred, alpha=0.7)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--')  # línea ideal
plt.xlabel("Valores reales de clorofila")
plt.ylabel("Valores predichos de clorofila")
plt.title("Predicciones vs Valores reales")
plt.grid(True)
plt.show()




# Valores

##
#4/4 ━━━━━━━━━━━━━━━━━━━━ 0s 1ms/step - loss: 2.5122e-04 - mae: 0.0107 
#Test MSE: 0.0003, Test MAE: 0.0108
#4/4 ━━━━━━━━━━━━━━━━━━━━ 0s 10ms/step
##