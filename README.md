Roxiler Store Rating Platform

Overview

A Full Stack Store Rating Application built using:

React.js
Node.js
Express.js
MySQL
JWT Authentication
Sequelize ORM

The application supports three user roles:

System Administrator
Normal User
Store Owner

Users can rate stores from 1 to 5 stars.

Features
Admin
Dashboard Statistics
Add Users
Add Stores
View Users
View Stores
Search & Sorting
Normal User
Registration
Login
Browse Stores
Submit Rating
Update Rating
Change Password
Store Owner
View Average Rating
View Users Who Rated Store
Change Password

Backend Setup

Navigate to Backend Folder
cd backend
Install Dependencies
npm install
Create .env File
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=roxiler_db

JWT_SECRET=your_secret_key
Run Backend
npm run dev

Backend Server:

http://localhost:5000
Frontend Setup
Navigate to Frontend Folder
cd frontend/roxiler-store
Install Dependencies
npm install
Run Frontend
npm run dev

Frontend Server:

http://localhost:5173
Database Setup
Create Database
CREATE DATABASE roxiler_db;
Import Schema
database.sql
API Documentation
Authentication APIs
Method	Endpoint
POST	/api/auth/register
POST	/api/auth/login
Admin APIs
Method	Endpoint
GET	/api/admin/dashboard
GET	/api/admin/users
POST	/api/admin/users
GET	/api/admin/stores
POST	/api/admin/stores
User APIs
Method	Endpoint
GET	/api/user/stores
POST	/api/user/rating
PUT	/api/user/rating/
PUT	/api/user/password
Store Owner APIs
Method	Endpoint
GET	/api/owner/dashboard
GET	/api/owner/ratings
Project Structure
roxiler-store-rating-app
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   └── services
│
├── database.sql
└── README.md
Screenshots
Login Page
Register Page
Admin Dashboard
User Dashboard
Store Listing Page
Rating Submission Page
Store Owner Dashboard


....