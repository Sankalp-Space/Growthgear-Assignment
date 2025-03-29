# Growthgear-Assignment
Code of Growth Gear internship assignment 
Gen AI Analytics - Mini Data Query Simulation Engine

🚀 Project Overview

This project is a lightweight backend service that simulates a simplified version of a Gen AI Analytics tool. It allows users to:

Ask natural language questions about business data.

Receive translated pseudo-SQL queries as responses.

Validate query feasibility before execution.

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: SQLite (or in-memory storage)

Authentication: API Key-based security

Deployment: Render, Railway, or Heroku

📌 Features

✅ /query - Accepts natural language queries and returns pseudo-SQL.✅ /explain - Returns a breakdown of how the query is processed.✅ /validate - Checks if the query is feasible before execution.✅ Basic AI Simulation - Converts text-based queries into structured SQL-like statements.✅ Error Handling - Returns proper responses for invalid queries.✅ API Key Security - Ensures only authorized users can access the API.

📂 Project Structure

📁 gen-ai-query-simulation
│── 📁 src
│   │── 📄 server.js            # Main Express server
│   │── 📄 routes.js            # API route definitions
│   │── 📄 queryService.js      # Logic for AI-like query processing
│   │── 📄 authMiddleware.js    # API key authentication
│── 📄 .env                     # Environment variables
│── 📄 package.json             # Project dependencies
│── 📄 README.md                # Project documentation

🚀 Installation & Setup

Clone the repository

git clone https://github.com/your-username/gen-ai-query-simulation.git
cd gen-ai-query-simulation

Install dependencies

npm install

Set up environment variables
Create a .env file and add:

API_KEY=your_secure_api_key

Run the server

npm start

📡 API Endpoints

🔹 1. Convert Natural Language Query to Pseudo-SQL

Endpoint: POST /queryHeaders: { "x-api-key": "your_secure_api_key" }

{
  "question": "What are the total sales?"
}

Response:

{
  "sql": "SELECT SUM(total) FROM sales"
}

🔹 2. Explain Query Processing

Endpoint: POST /explain

{
  "question": "List all customers."
}

Response:

{
  "explanation": "The query retrieves all customer records from the database."
}

🔹 3. Validate Query Feasibility

Endpoint: POST /validate

{
  "question": "Delete all users."
}

Response:

{
  "valid": false,
  "message": "Destructive queries are not allowed."
}

🧪 Testing with Postman

Import the provided Postman Collection to test endpoints easily.

Or, use cURL:

curl -X POST http://localhost:5000/query \
     -H "x-api-key: your_secure_api_key" \
     -H "Content-Type: application/json" \
     -d '{ "question": "Show me total sales" }'

🚀 Deployment

Deploy the backend using Render, Railway, or Heroku: