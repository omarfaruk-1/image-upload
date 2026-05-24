# Image Upload With Authentication

A full-stack MERN application for secure image uploading with JWT authentication and ImageKit cloud storage.

## Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Image Upload using Multer
- Cloud Storage with ImageKit
- Store Image URL in MongoDB
- REST API

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- bcrypt.js

### Cloud Storage
- ImageKit

## Project Structure

```bash
project/
│
├── frontend/
├── backend/
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-link>
```

## Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

Run Backend:

```bash
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Authentication

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Images

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/images-upload | Upload Image |
| GET | /api/get-images | Get All Images |
| GET | /api/my-post-image| Get specific image for specific user |

## Authentication

Protected routes require JWT token.

Example:

```bash
Authorization: Bearer your_token
```

## Future Improvements

- Multiple Image Upload
- Delete Image
- User Dashboard
- Admin Panel

## Author

MD Omar Faruk
````
