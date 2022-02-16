<div align="center">

# Api Documentation

## link: https://books-api-2nd.herokuapp.com

## Endpoints:

## Signup user:

### POST: https://books-api-2nd.herokuapp.com/signup

#### Request body:

    "name":"User",
    "email": "User@gmail.com",
    "password": "123546",
    "role":"admin"

#### Responses:

### CODE:

201 :Success

    "status": "success",
    "code": 201,
    "message": "✔️ Success User register",
    "data": {
        "name": "User",
        "email": "User@gmail.com",
        "password": "$2a$10$LoTlTV8ti0SlEZZMsJ2ww.88ngovkfWWPi8j6w4g8vm0jL8FZbWLG",
        "token": null,
        "role": "admin"
    }

409: Conflict: "Already register"

400: Bad request: Missing fields

404: Not Found:

    "message": "Not found"

500: Server Error

[![Header](https://github.com/mykolasenyuk/2nd-book-api/blob/main/src/pictures/Signup.png)]()

## Login user:

### POST: https://books-api-2nd.herokuapp.com/login

#### Request body:

    "email": "User@gmail.com",
    "password": "123546"

#### Responses:

### CODE:

201 :Success

     "status": "✔️ Success",
    "code": 201,
    "data":{
        "_id": "620c1b441c4ee805ca4b8e43",
        "name": "User",
        "email": "User@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBjMWI0NDFjNGVlODA1Y2E0YjhlNDMiLCJpYXQiOjE2NDQ5OTkyMjl9.ATlPErfQFaMFsp-inAApmAOt3usNSTqCtM1xjfVYXOk"
    }

400: Bad request:

    "message": "Email or password is wrong"

404: Not Found:

    "message": "Not found"

500: Server Error

[![Header](https://github.com/mykolasenyuk/2nd-book-api/blob/main/src/pictures/login.png)]()

## Get All books:

### GET: https://ms-books-api.herokuapp.com/api/books

#### Responses:

### CODE:

200 :Success

404: Not Found

500: Server Error

[![Header](https://github.com/mykolasenyuk/books-api/blob/main/pic/getAll.jpg)]()

## Add Book:

### POST: https://ms-books-api.herokuapp.com/api/books

#### Responses:

### CODE:

201 :Success

400: Bad Request

409: Conflict (exist name of book)

500: Server Error(Missing required field )

[![Header](https://github.com/mykolasenyuk/books-api/blob/main/pic/addbook.jpg)]()

## Delete book :

### DELETE:https://ms-books-api.herokuapp.com/api/books/bookID

#### Responses:

### CODE:

200 :Success

404: Not found

500: Server Error( wrong id of book )

[![Header](https://github.com/mykolasenyuk/books-api/blob/main/pic/dlt.jpg)]()

## Get book by ID:

### GET: https://ms-books-api.herokuapp.com/api/books/bookID

#### Responses:

### CODE:

200 :Success

404: Not found

500: Server Error( wrong id of book )

[![Header](https://github.com/mykolasenyuk/books-api/blob/main/pic/getById.jpg)]()

## Update book:

### PUT: https://ms-books-api.herokuapp.com/api/books/bookID

#### Responses:

### CODE:

200 :Success

404: Not found

500: Server Error(Missing required field )

[![Header](https://github.com/mykolasenyuk/books-api/blob/main/pic/update.jpg)]()

<div>
