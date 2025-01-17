# Money Tracker - Expense Tracker API

The **Money Tracker** is a web application that helps you manage your finances by tracking your income and expenses, all in one place. It allows you to view your transaction history, track your balance, and add new transactions. Built with Node.js, Express, and MongoDB, this project offers a simple yet powerful way to monitor your financial activity.

## Features

- **Track Balance**: The balance is automatically updated whenever a new transaction is added, reflecting both your income and expenses.
- **View Transactions**: Retrieve and display all past transactions along with their details, including price, description, and date.
- **Add New Transactions**: Post new transactions with detailed information such as transaction name, price, description, and date.

## Functions

### 1. Add New Transaction
- **Endpoint**: `POST /api/transaction`
- **Purpose**: Add a new transaction to the tracker. Transactions can be either income (positive value) or expenses (negative value).
- **Request Body**:
  ```json
  {
    "name": "Transaction Name",
    "description": "Transaction Description",
    "datetime": "2024-01-16T14:00:00",
    "price": -200
  }
  ```
  ### Transaction Model

- **name**: The name of the transaction (e.g., "Grocery shopping").
- **description**: A short description of the transaction.
- **datetime**: The date and time the transaction took place.
- **price**: The amount of the transaction (positive for income, negative for expenses).

---

### View All Transactions

- **Endpoint**: `GET /api/transactions`
- **Purpose**: Retrieve a list of all transactions added to the tracker.
- **Response**:
  ```json
  [
    {
      "name": "Grocery shopping",
      "description": "Bought groceries",
      "datetime": "2025-01-15T08:30:00",
      "price": -50.00
    },
    {
      "name": "Freelance work",
      "description": "Payment for freelance project",
      "datetime": "2025-01-14T15:00:00",
      "price": 200.00
    }
  ]
  ```

### View Current Balance

- **Purpose**: The current balance is automatically calculated by summing the price of all transactions. Positive values (income) increase the balance, while negative values (expenses) decrease it. This feature is implemented in the `GET /api/transactions` endpoint, which returns all transactions along with the balance calculation.

---

### Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework to create the API.
- **MongoDB**: NoSQL database for storing transactions.
- **Mongoose**: ODM (Object Document Mapper) for interacting with MongoDB.
- **CORS**: Middleware for enabling cross-origin requests.
- **dotenv**: A module to manage environment variables.

--

Enjoy tracking your expenses and managing your finances with Money Tracker!


