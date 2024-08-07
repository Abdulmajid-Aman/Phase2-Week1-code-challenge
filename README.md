# Transaction Tracker App

### Live page to the webiste https://phase2-week1-code-challenge-tau.vercel.app/

## Overview

The Transaction Tracker App is a React-based application designed to help users manage and track their financial transactions. It provides functionalities for adding, viewing, searching, and deleting transactions. This app serves as a practical tool for personal finance management and can be extended to include more advanced features.

## Features

- **Add Transactions**: Input details such as date, description, amount, and category to add new transactions.
- **View Transactions**: Display a list of all transactions with details including date, amount, category, and description.
- **Search Transactions**: Filter transactions by description to find specific entries easily.
- **Delete Transactions**: Remove unwanted transactions from the list.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for logic and interactions.
- **CSS**: Stylesheet language for styling the components.
- **Fetch API**: For making HTTP requests to a backend server.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher) - [Node.js Downloads](https://nodejs.org/)
- **npm** (v6 or higher) or **Yarn** - Included with Node.js

### Installation

1. **Clone the Repository**
    ```bash
    git clone [https://github.com/Abdulmajid-Aman/Phase2-Week1-code-challenge] (https://github.com/Abdulmajid-Aman/Phase2-Week1-code-challenge)
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd Phase-2
    cd Week-1
    ```

3. **Install Dependencies**
    ```bash
    npm install
    ```

### Running the Application

1. **Start the Development Server**
    ```bash
    npm start
    ```

2. **Open Your Browser**
   - Navigate to `http://localhost:3000` to view the application in action.

### Project Structure

The project is organized into the following main components:

- **`App.js`**: The root component that manages the state and renders the `List` and `Form` components.
- **`List.js`**: Component responsible for displaying the list of transactions and handling their deletion.
- **`Form.js`**: Component for the transaction input form, allowing users to add new transactions.

### API Integration

The app interacts with the backend server using the following API endpoints:

- **`GET /transactions`**: Fetches the list of all transactions.
- **`POST /transactions`**: Adds a new transaction to the server.
- **`DELETE /transactions/:id`**: Deletes a specific transaction by its ID.

### Usage

To add a new transaction:

1. **Fill Out the Form**: Enter the date, description, amount, and category of the transaction.
2. **Submit the Form**: Click "Submit" to add the transaction to the list.

To search transactions:

1. **Enter Search Term**: Type in a description to filter the list of transactions.
2. **View Results**: The list updates to show only transactions that match the search term.

To delete a transaction:

1. **Find the Transaction**: Locate the transaction you wish to delete in the list.
2. **Click Delete**: Press the "Delete Transaction" button next to the transaction to remove it.

### Example

Here's a brief example of how the application looks and functions:

1. **Add Transaction**
    - Date: 2024-08-07
    - Description: Dinner at Restaurant
    - Amount: $45.00
    - Category: Food

2. **Search Transactions**
    - Enter "Dinner" in the search bar to filter transactions by description.

3. **Delete Transaction**
    - Click "Delete Transaction" to remove an entry from the list.


### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




