# Indego Bike Ride Service Backend Challenge
============================================

# Getting started
- Clone the repository
```
git clone https://github.com/AhsanAshfaq/IndegoBackendChallenge.git
```

### Heroku URL : 
```
https://indegobackendchallenge.herokuapp.com/
```

### Install dependencies
```
cd IndegoBackendChallenge

npm install
```
###  Build project
```
npm run build
```
### run the project
```
npm run start
```

### run the tests
```
npm run test
```

- Navigate to `http://localhost:8001`


### To see swagger Api Docs Go to 

```
http://localhost:8001/api/v1/api-docs
```

### Get Auth token before accessing API

- Step 1 
```
http://localhost:8001/login
and give username and password in request body 
username : afia
password : admin
```
- Step 2 

```
Copy the token and pass it in Authorization header. for example : Authorization : "Bearer eyJhbGciOiJIUzI11NiJ9.YWhzYW4.4WSsUZVV8GkyIYn_XzjI2gy72SE5wtKTTbdBenw_4n4"
```

### Sample Endpoints for Stations API

- Get All Stations 

```
http://localhost:8001/api/v1/stations?at=2021-03-16T23:00:02
```

- Get Station By Id 

```
http://localhost:8001/api/v1/stations/3211?at=2021-03-16T23:00:02
```
