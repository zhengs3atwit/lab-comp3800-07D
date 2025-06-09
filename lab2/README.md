# Lab 2

This project consists of an express application that contains 5 routes (Query String/Path) to serve HTML pages; HTML taken from lab 1. 

## Description
Routes that do not require query strings, res.sendFile is used to serve corresponding HTML file.

While routes that accept query strings extract reqest paramters (req.query/req.params) to determine what is served.

Query String and the filter on /animals, uses different HTML files, to mimic filtering used in many websites; given no Javascript was used for this project. 

## Design
```
Lab 2
|--Public/        #Static assets(CSS)
|    |--main.css
|--views/         #HTML files
|    |--animals/
|    |--filter
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
Enter localhost:8000 or 127.0.0.1:8000 into URL of browser. 
## Screenshots
![image](https://github.com/user-attachments/assets/3e98d077-a101-4e05-aa26-4745561791db)

```
Example 1. Root route/index.html
```

![image](https://github.com/user-attachments/assets/e2f9622e-89b9-4719-b514-5fb7e6c16720)
```
Example 2. /animal route
```

![image](https://github.com/user-attachments/assets/03039334-5e97-4eb7-8492-680123dcc11a)

```
Example 3.Query String
```

