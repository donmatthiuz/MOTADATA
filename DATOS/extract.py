import xarray as xr
import matplotlib.pyplot as plt
import pandas as pd

ds = xr.open_dataset("silicato.nc")
print(ds)  # Muestra las dimensiones y variables