import { render } from 'hono/jsx/dom'
import Todo from './todo'

const root = document.getElementById('root') as HTMLElement
render(<Todo />, root)
