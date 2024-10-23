# MoneyMap - Personal Finance Tracker

A full-stack expense tracking application built with modern web technologies. MoneyMap helps users track their financial transactions with an intuitive interface and secure authentication.

Live Demo: https://money-map-red.onrender.com/

## Features

- 🔐 Secure user authentication with Clerk
- 💰 Track income and expenses
- 📊 Real-time transaction total
- ✏️ Edit transactions inline
- 🗑️ Delete transactions
- 📱 Responsive design
- 🔍 Categorize transactions
- 💳 Multiple payment methods

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Clerk Authentication
- React Table
- Context API for state management
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   └── App.tsx
│   └── main.tsx
└── server/
    ├── src/
    │   ├── routes/
    │   ├── schema/
    │   └── index.ts
```

## Setup Instructions

1. Clone the repository
2. Set up environment variables:

   **Client (.env)**

   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   VITE_API_URL=your_api_url
   ```

   **Server (.env)**

   ```
   MONGODB_URI=your_mongodb_uri
   PORT=3000
   ```

3. Install dependencies:

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

4. Start the development servers:

   ```bash
   # Start client
   cd client
   npm run dev

   # Start server
   cd ../server
   npm run dev
   ```

## API Endpoints

| Method | Endpoint                  | Description                |
| ------ | ------------------------- | -------------------------- |
| GET    | `/getAllByUserID/:userId` | Get all records for a user |
| POST   | `/`                       | Create a new record        |
| PUT    | `/:id`                    | Update a record            |
| DELETE | `/:id`                    | Delete a record            |

## Data Model

```typescript
interface FinancialRecord {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}
```

## Categories

- Food
- Rent
- Salary
- Utilities
- Entertainment
- Subscription
- Other

## Payment Methods

- Credit Card
- Cash
- Bank Transfer
- Gift Card
- Points

## Notes

- MongoDB may take up to two minutes to connect on initial startup
- All financial data is tied to individual user accounts
- Transactions can be edited by clicking on the field
- The total amount updates automatically with each transaction

## Security Features

- Protected routes using Clerk authentication
- User-specific data isolation
- Secure API endpoints
- Type-safe implementations with TypeScript

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT
