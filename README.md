# Blog API

This project provides a simple API for creating and retrieving blog posts. It uses Express.js for handling HTTP requests, Mongoose for interacting with a MongoDB database, and services for handling business logic.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To set up and run this project, follow these steps:

1. Clone the repository:

   ```
    git clone https://github.com/elliotalien/BlOG-API.git
    cd BlOG-API

   ```

2.Install the dependencies:

```
npm install

```

3.Ensure you have a .env file in the root of your project with your MongoDB URI and other necessary environment variables. For example:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/your-database-name

```

## Usage
To start the server, use the following command:

```
npm start

```

Make sure to include the connectDB function from the previous part to establish the database connection when starting your server.

## Environment Variables
This utility uses the following environment variables:

PORT: The port on which the server will run.
MONGO_URI: The connection string for your MongoDB database.
Make sure to create a .env file in the root of your project and add the PORT and MONGO_URI variables with their respective values.

## API Endpoints
- Create a Blog Post
- URL: /createblog
- Method: POST
- Description: Creates a new blog post.
- Request Body:
  
```
{
  "titleheading": "Your Blog Title",
  "titledescription": "A short description",
  "description": "Your blog content...",
  "imageUrl": "http://example.com/image.jpg"
}

```

## Response:
- 200 OK on success with a message and the created blog post data.
- 500 Internal Server Error if there is an error.
  
## Get All Blog Posts
- URL: /getposts
- Method: GET
- Description: Retrieves all blog posts.
   - Response:
     - 200 OK with the list of blog posts.
     - 500 Internal Server Error if there is an error.
       
## Dependencies
- express: Fast, unopinionated, minimalist web framework for Node.js.
- mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- dotenv: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- cors: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- To install the dependencies, use the following command:

```
npm install express mongoose dotenv cors

```

# HAPPY CODING 😍😍

