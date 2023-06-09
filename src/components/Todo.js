export default function Todo({ text, id, isCompleted, toggleTodoStatus }) {
  return (
    <tr className={`todo ${isCompleted ? "is-completed" : ""}`.trim()}>
      <td>{text}</td>
      <td>{isCompleted ? "Comleted" : "Not Completed"}</td>
      <td className="todo-action">
        <button className="btn todo-btn" onClick={() => toggleTodoStatus(id)}>
          Change status
        </button>
      </td>
    </tr>
  );
}
