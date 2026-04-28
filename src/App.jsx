import './App.css';
import { useState , useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const initialTasks = [
  { id: 1, text: 'Complete React Session 4 lab', completed: true },
  { id: 2, text: 'Read React documentation', completed: false },
  { id: 3, text: 'Build a personal portfolio site', completed: false },
];

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const nextId = tasks.length > 0
  ? Math.max(...tasks.map(t => t.id)) + 1
  : 1;

  const [filter, setFilter] = useState('all');

  function checkAll(checked) {
    setTasks(tasks.map(t => ({ ...t, completed: checked })));
  }

  function handleAddTask(text) {
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  
    setTasks([...tasks, { id: newId, text, completed: false }]);
  }

  function handleToggle(id) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  }

  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function handleEditTask(id, newText) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  }

  function clearCompleted() {
    setTasks(tasks.filter(t => !t.completed));
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const remaining = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="todo-card">
      <h1>✓ My To-Do List</h1>

      <TaskInput onAddTask={handleAddTask} />

      {/* count */}
      <div className="task-stats">
        <span>{remaining} tasks remaining</span>
        <span>{completed} completed</span>
      </div>

      {/* filter */}
      <div className="filters">
        <button
          className={`filter-btn ${filter === "all" ? "active-filter" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`filter-btn ${filter === "active" ? "active-filter" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={`filter-btn ${filter === "completed" ? "active-filter" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div className='checkall'>
        <input
          type="checkbox"
          onChange={(e) => checkAll(e.target.checked)}
        /> Check All
      </div>

      {/* list */}
      <ul>
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEditTask}
          />
        ))}
      </ul>

      {/* clear */}
      {completed > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear {completed} Completed
        </button>
      )}
    </div>
  );
}

export default App;