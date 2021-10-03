import netCDF4 as nc
import pandas as pd

precip_nc_file = 'CSR_GRACE_GRACE-FO_RL06_Mascons_all-corrections_v02.nc'
nc = nc.Dataset(precip_nc_file, mode='r')

# nc.variables.keys()

# lat = nc.variables['lat'][:]
# lon = nc.variables['lon'][:]
# time_var = nc.variables['time']
# dtime = nc.num2date(time_var[:],time_var.units)
# precip = nc.variables['precip'][:]

# # a pandas.Series designed for time series of a 2D lat,lon grid
# precip_ts = pd.Series(precip, index=dtime) 

# precip_ts.to_csv('precip.csv',index=True, header=True)