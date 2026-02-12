# small_But_Big_Impact
simple frontend and backend workflow to understand how the cart (card) render dynamically and dhow data based on clicked cart.
# 🎓 Department Management API (Node.js + Express)

A simple REST API built using **Node.js** and **Express** that retrieves department and student data from a JSON file.

This project demonstrates:

- RESTful routing
- Dynamic route parameters
- Filtering data from JSON
- Proper controller structure
- Clean backend architecture

---

## 📁 Project Structure

project/
│
├── data/
│ └── dataset.json
│
├── controllers/
│ └── departmentController.js
│
├── routes/
│ └── departmentRoutes.js
│
├── app.js
└── package.json


## 📦 Installation

### 1️⃣ Clone the Repository


git clone <your-repo-url>
cd <project-folder>

### 1️⃣ install dependency
npm install express cors

### 3️⃣ Start the Server
node server.js

### Server will run on:
http://localhost:3000


### 📂 Data Source
All data is stored in:
/data/dataset.json
### Each teacher record contains:

id
img_url
full_name
dob
email
ph_no
department
specification

### 🚀 API Endpoints
🔹 1. Get All Departments
GET /departments

Ex:-
http://localhost:3000/departments

🔹 2. Get teachers by Department
GET /departments/:department

Ex:-
http://localhost:3000/departments/Mechanical

Supported departments:-
Computer Science
Mechanical
Electrical
Civil

🔹 3. Get teacher by Department and ID
GET /departments/:department/:id

Ex:-
http://localhost:3000/departments/Mechanical/me5

Returns a single teacher matching:
Department = Mechanical
ID = me5


