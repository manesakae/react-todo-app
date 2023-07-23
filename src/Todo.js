export default function TodoList({todo, toogleComplete}) {
    const handleCheckedComplete = () => {
        toogleComplete(todo.id)
    }
    return (
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleCheckedComplete}/>
            {todo.name}
        </label>
    );
}