# REST API Interaction FlowS
## Overview

This is a RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to handle a multi-step process with progressive data updates. The API supports the following features:
- Progressive updates to steps using `PUT`.
- Consistent response formatting for both success and error responses.
- Error handling middleware for proper error reporting.
- Uses **Zod** for schema validation.
- MongoDB as the database with **Mongoose** for object modeling.

### Response Format
All responses follow a consistent format:
- **Success Response**:
  ```json
  {
    "status": "success",
    "data": { ... }
  }
- **Error Response**:
  ```json
  {
  "status": "error",
  "message": "Error description",
  "errorCode": 400
  }
### Prerequisites
Before you begin, ensure you have the following installed:

 - Node.js (v12 or higher)
 - npm (v6 or higher)
 - MongoDB (local or cloud instance like MongoDB Atlas)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-repo/your-repo.git
cd your repo
```

Install dependencies:

```bash
npm install
```

Create a .env file in the root directory and add your MongoDB connection string:

```bash
MONGO_URI=mongodb://localhost:27017/db  # Or your MongoDB Atlas URI
PUBLIC_HOST=localhost
PORT=8000
```

Run the application:

```bash
npm start
```

The server should now be running on http://localhost:8000.
