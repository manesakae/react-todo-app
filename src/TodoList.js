import Todo from './Todo';

export default function TodoList({todosProps}) {
    const {todos, toogleComplete} = todosProps;
    return (
        <div>
            {
                todos && todos.map((todo)=> {
                    return <Todo key={todo.id} todo={todo} toogleComplete={toogleComplete} />
                })
            }
        </div>
    );
}