import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [totalSpending, setTotalSpending] = useState(1200); // initial spending
  const [remainingBudget, setRemainingBudget] = useState(800); // initial budget
  const [subscriptions, setSubscriptions] = useState([
    { name: 'Netflix', dueDate: '5/15', amount: 15.99 },
    { name: 'Spotify', dueDate: '5/20', amount: 9.99 },
  ]);

  // Function to add a new transaction
  const addTransaction = (amount) => {
    setTotalSpending(totalSpending + amount); // increase total spending
    setRemainingBudget(remainingBudget - amount); // decrease remaining budget
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Financial Tracker</h1>
      </header>

      <section id="main-content">
        <h2>Financial Overview</h2>
        <div id="overview">
          <div className="card">
            <h3>Total Spending for the Month</h3>
            <p>${totalSpending}</p>
          </div>
          <div className="card">
            <h3>Remaining Budget</h3>
            <p>${remainingBudget}</p>
          </div>
          <div className="card">
            <h3>Upcoming Subscriptions</h3>
            {subscriptions.map((sub, index) => (
              <div key={index}>
                <p>{sub.name} - Due on {sub.dueDate} - ${sub.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Financial Tracker</p>
      </footer>

      {/* Add Transaction Button (Example) */}
      <button onClick={() => addTransaction(100)}>Add $100 to Spending</button>
    </div>
  );
}

export default App;
