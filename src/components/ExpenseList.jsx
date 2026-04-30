import { useExpenses } from "../context/ExpenseContext";

function ExpenseList() {
  const { filteredExpenses, deleteExpense, filter, setFilter, categories } =
    useExpenses();

  return (
    <div className="expense-list-section">
      {/* Filter */}
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={filter === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}

      {/* List */}
      {filteredExpenses.map((e) => (
        <div key={e.id} className="expense-item">
          <b>{e.name}</b>
          <span>${e.amount.toFixed(2)}</span>
          <button onClick={() => deleteExpense(e.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;