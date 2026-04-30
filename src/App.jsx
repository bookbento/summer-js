import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseSummary from "./components/ExpenseSummary";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  return (
    <ExpenseProvider>
      <div className="app">
        <h1>💸 Expense Tracker</h1>

        <ExpenseSummary />
        <AddExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;