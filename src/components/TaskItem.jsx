import { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    function handleSave() {
        if (editText.trim() !== "") {
            onEdit(task.id, editText);
            setIsEditing(false);
        }
    }

    function handleCancel() {
        setEditText(task.text);
        setIsEditing(false);
    }

    return (
        <li className={`task-item${task.completed ? " completed" : ""}`}>
            <div className="task-content">
                <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => onToggle(task.id)} 
                />
                
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSave();
                            if (e.key === "Escape") handleCancel();
                        }}
                        autoFocus
                    />
                ) : (
                    <span className="task-text">{task.text}</span>
                )}
            </div>

            <div className="task-actions">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button onClick={() => onDelete(task.id)}>✕</button>
            </div>
        </li>
    );
}

export default TaskItem;