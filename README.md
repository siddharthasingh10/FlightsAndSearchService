-clone the project on your local
-Execute npm install on the same path as of your root directory of teh downloaded project
-Create a .env file in the root directory and add the following environment variable
      -PORT=3000
-Inside the src/config folder create a new file config.json and then add the following piece of json
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
once you have added db cofig as listed above,go to the src  folder from your terminal and execute the `npx sequelize db:create` and then execute `npx sequelize db:migrate`



### DB design
     -airplane table
     -flight table  
     -Airport table
     -city table 

###### TABLES #####
 City table -> id,name,createdAt,udatedAt
Airport table-> id ,name,adress,city_id,createdAt,updatedAt
          RELATIONSHIP EXIST BETWEEN CITY AND AIRPORT -> a city can have multiple airport (one to many realtion )