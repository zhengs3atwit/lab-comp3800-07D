# Lab 2

This project consists of an express application that contains 5 routes (Query String/Path Parameters) and static routes to serve HTML pages; HTML taken from lab 1. 

## Description
Routes that do not require query strings, res.sendFile is used to serve corresponding HTML file.

While routes that accept query strings, extract reqest paramters (req.query/req.params) to determine what is served.

Path Parameter routes take passed in values.
Example: app.get('/animals/:name', (req, res). 

Query String and Path Parameters has been used to mimick what is typical of websites. 
Such as filtering, clicking specific products. 
## Design
```
Lab 2
|--Public/        #Static assets(CSS)
|    |--main.css
|--views/         #HTML files
|    |--animals/
|    |--facts
|    |--filter
|    |--shop
|--package.json   #Metadata/dependencies
|--Server.js      #Entry to Express app
```
## Dependencies
```
Node.js
```
## Executing 

1. Download the repository and open lab2 folder in terminal.

2. Within same terminal, run the following command
```
node server.js
```
Enter ```localhost:8000``` or ```127.0.0.1:8000``` into URL of browser. 
## Screenshots
![image](https://github.com/user-attachments/assets/3e98d077-a101-4e05-aa26-4745561791db)

```
Example 1. Root route/index.html
```

![image](https://github.com/user-attachments/assets/7bd281a3-a20e-4336-bdea-359d3b327fc2)

```
Example 2. /animal route. with Query String 
```

![image](https://github.com/user-attachments/assets/c20c0b0f-6856-4129-90c9-bd458a69d93e)

```
Example 3. /shop route. with Path Parameters
```

