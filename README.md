
---

# CRUD Operations with Node.js, Express.js, and Mongoose

This repository contains a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express.js, and Mongoose for MongoDB. It allows you to perform CRUD operations on a user model.

## Setup

1. **Clone the repository:**


2. **Install dependencies:**

   ```bash
   cd your-repository
   npm install
   ```

3. **Set up environment variables:**



   ```
   MONGODB_URI=your_mongodb_connection_uri
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

## API Endpoints

- **POST /users:** Create a new user
- **GET /users:** Get all users
- **GET /users/:id:** Get a single user by ID
- **PATCH /users/:id:** Update a user by ID
- **DELETE /users/:id:** Delete a user by ID

