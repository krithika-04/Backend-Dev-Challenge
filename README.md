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

The open API / Swagger Documentation can be found at http://localhost:8000/api-docs

### API Interation Flows

Register Api:

![image](https://github.com/user-attachments/assets/30ff5012-e6b6-43f1-97bf-eb7075c9d61e)

![image](https://github.com/user-attachments/assets/38f852ce-d4d0-4f2e-8fe3-7e5f74affed4)

Sleep Assesment Api:

![image](https://github.com/user-attachments/assets/28f0b697-b04d-45af-ac8e-ef631f358d60)

![image](https://github.com/user-attachments/assets/ec9f80be-78d2-4faa-8d1f-8a47b0beaedc)

![image](https://github.com/user-attachments/assets/95da3e78-d7df-47c2-bc36-b687375db0d7)

![image](https://github.com/user-attachments/assets/ec9f80be-78d2-4faa-8d1f-8a47b0beaedc)

![image](https://github.com/user-attachments/assets/039626d2-1952-44be-ab29-b1a24926058b)

![image](https://github.com/user-attachments/assets/ec9f80be-78d2-4faa-8d1f-8a47b0beaedc)

![image](https://github.com/user-attachments/assets/54ceb8ba-c480-41b9-b041-b6a23dfa386b)

![image](https://github.com/user-attachments/assets/ec9f80be-78d2-4faa-8d1f-8a47b0beaedc)

![image](https://github.com/user-attachments/assets/8f4e075d-67c7-4ead-93f7-3518f8ce302f)

![image](https://github.com/user-attachments/assets/473b4623-a6a4-4051-a37a-71e98024c046)




