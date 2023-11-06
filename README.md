# Book Management API

This is a RESTful API for managing books using Node.js, Express, and MongoDB.

## API Endpoints

### Get All Books

- **Endpoint:** `GET /books`
- **Description:** Retrieve a list of all books.
- **Example:**
 /books

### Get a Book by ID
- **Endpoint:** GET /books/:id
- **Description:** Retrieve details of a specific book by its ID.
- **Example:** 
GET /books/5f7b3c7e8106b72d105059b7

### Add a New Book
- **Endpoint:** POST /books
- **Description:** Add a new book to the database. Requires providing book details (title, author, summary) in the request body.
- **Example:**

```
POST /books
Content-Type: application/json

{
  "title": "Sample Book",
  "author": "John Doe",
  "summary": "This is a sample book."
}

```

### Update a Book
- **Endpoint:** PUT /books/:id
- **Description:** Update the details of a specific book by its ID. Requires providing the updated book details in the request body.
- **Example:**

```
PUT /books/5f7b3c7e8106b72d105059b7
Content-Type: application/json

{
  "title": "Updated Book Title",
  "author": "Jane Smith",
  "summary": "This is an updated book."
}
```
### Delete a Book
- **Endpoint:** DELETE /books/:id
- **Description:** Delete a specific book by its ID.
- **Example:**
```
DELETE /books/5f7b3c7e8106b72d105059b7
```

## Getting Started
To run this application locally, follow these steps:

- Clone this repository:
```
git clone https://github.com/your-username/book-management-api.git
cd book-management-api
```
- Install dependencies:

```
npm install
```

- Configure your MongoDB connection string in .env file - **MONGODB_URL**

- Start the application:
```
npm start
```

The API will be accessible at http://localhost:3000 by default. You can make API requests using tools like Postman or cURL.


## Assumptions
During the development of this API, we assumed the following:

- A MongoDB database is used for storing book data.
- Valid book data includes a non-empty title, author, and summary.
- Book IDs are MongoDB ObjectIDs.
- Error handling is minimal, and further improvements can be made for production use.

