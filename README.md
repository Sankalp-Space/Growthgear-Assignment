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

✅ /query - Accepts natural language queries and returns pseudo-SQL. \
✅ /explain - Returns a breakdown of how the query is processed. \
✅ /validate - Checks if the query is feasible before execution. \
✅ Basic AI Simulation - Converts text-based queries into structured SQL-like statements. \
✅ Error Handling - Returns proper responses for invalid queries. \
✅ API Key Security - Ensures only authorized users can access the API. \

📂 Project Structure

📁 gen-ai-query-simulation \
##
│── 📁 src
##
│   │── 📄 server.js            # Main Express server
##
│   │── 📄 routes.js            # API route definitions
##
│   │── 📄 queryService.js      # Logic for AI-like query processing
##
│   │── 📄 authMiddleware.js    # API key authentication
##
│── 📄 .env                     # Environment variables
##
│── 📄 package.json             # Project dependencies
##
│── 📄 README.md                # Project documentation
##

🚀 Installation & Setup

Clone the repository

git clone https://github.com/Sankalp-Space/Growthgear-Assignment.git \
cd Growthgear-Assignment

Install dependencies

npm install

Set up environment variables
Create a .env file and add:

API_KEY=key123

Run the server

npm start




🧪 Testing with Postman

[Postman Collection Link](https://elements.getpostman.com/redirect?entityId=36163184-694e9726-cd1f-47c9-bc0e-9e6488ef7ce4&entityType=collection)

🚀 Deployment

Deploy the backend using Render