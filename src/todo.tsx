import { useState } from 'hono/jsx'

type Todo = {
  title: string
}

export default function Todo() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div>
      <h1>Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setTodos((todos) => [...todos, { title }])
          setTitle('')
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            if (e.target instanceof HTMLInputElement) {
              setTitle(e.target.value)
            }
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.title}</li>
        })}
      </ul>
    </div>
  )
}
