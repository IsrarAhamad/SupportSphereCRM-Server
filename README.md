# 🚀 SupportSphere CRM - Server

RESTful backend API for SupportSphere CRM built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

## ✨ Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Ticket CRUD APIs
- Notes Management
- Ticket Status Updates
- Dashboard Statistics APIs
- MongoDB Atlas Integration
- Error Handling Middleware
- Environment Variable Support

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

## 📂 Folder Structure

```
server/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── utils/
│── server.js
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/SupportSphereCRM-Server.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start the server

```bash
npm run dev
```

Server runs on

```
http://localhost:5000
```

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/profile` | Get Logged-in User |

### Tickets

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tickets` | Get All Tickets |
| GET | `/api/tickets/:id` | Get Ticket |
| POST | `/api/tickets` | Create Ticket |
| PUT | `/api/tickets/:id` | Update Ticket |
| DELETE | `/api/tickets/:id` | Delete Ticket |
| POST | `/api/tickets/:id/notes` | Add Note |

## 🔒 Authentication

All protected APIs require:

```
Authorization: Bearer <JWT_TOKEN>
```

## 🌐 Deployment

Backend:
```
https://your-render-url.onrender.com
```

## 👨‍💻 Author

**Israr Ahamad**

GitHub: https://github.com/Israr8957