<div align="center">

# Api Documentation

## link: https://books-api-2nd.herokuapp.com

## Endpoints:

## Signup user:

### POST: https://books-api-2nd.herokuapp.com/signup

#### Request body:

{

    "name":"User",
    "email": "User@gmail.com",
    "password": "123546",
    "role":"admin"

}

#### Responses:

### CODE:

201 :Success

409: Conflict: "Already register"

400: Bad request: Missing fields

404: Not Found

500: Server Error

[![Header](https://github.com/mykolasenyuk/2nd-book-api/blob/main/src/pictures/Signup.png)]()

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
