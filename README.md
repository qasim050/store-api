# 🛒 Store API

RESTful Store API built with Node.js, Express, and MongoDB.
Provides product management with filtering, sorting, pagination, and authentication support.

## ✨ Features

- CRUD operations for products

- Advanced filtering (price, rating, company, category)

- Sorting & pagination


- Protected routes

- MongoDB & Mongoose

- Clean project structure

##🛠 Tech Stack

- Node.js

- Express.js

- MongoDB

- Mongoose

- dotenv


# 📌 API Endpoints (Examples)
- Get All Products
- GET /api/v1/products

- Filter & Sort
- GET /api/v1/products?company=ikea&sort=price&numericFilters=price>40

- Create Product (Protected)
- POST /api/v1/products
- Authorization: Bearer <token>

# 🧪 Example Query Params

- sort=price,-rating

- fields=name,price

- page=1&limit=10

- numericFilters=price>50,rating>=4

# 🚀 Future Improvements

- User roles (Admin / User)

- Order & Cart system

- Swagger API Documentation

- Unit & Integration tests

# 👨‍💻 Author

- Qasim Salah
- Backend Developer

- Node.js(express) & REST APIs

- MongoDB & SQL
# Installation
```bash
git clone https://github.com/qasim050/jwt-basic.git
cd jwt-basic
npm install
cp .env.example .env
# add values
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
npm start
