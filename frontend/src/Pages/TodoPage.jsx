import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import './ProjectPages.css'

function TodoPage() {
  const [task, setTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('datriplecee_todos')
    return saved ? JSON.parse(saved) : []
  })

  const saveItems = (nextItems) => {
    setItems(nextItems)
    localStorage.setItem('datriplecee_todos', JSON.stringify(nextItems))
  }

  const addTask = () => {
    const clean = task.trim()
    if (!clean) return

    const next = [
      {
        id: crypto.randomUUID(),
        text: clean,
        done: false,
        createdAt: new Date().toISOString(),
      },
      ...items,
    ]

    saveItems(next)
    setTask('')
  }

  const toggleTask = (id) => {
    const next = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item,
    )
    saveItems(next)
  }

  const deleteTask = (id) => {
    const next = items.filter((item) => item.id !== id)
    saveItems(next)
  }

  const visibleItems = useMemo(() => {
    if (filter === 'done') return items.filter((item) => item.done)
    if (filter === 'todo') return items.filter((item) => !item.done)
    return items
  }, [items, filter])

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">DaTripleCee</Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/todo">To-Do</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/landing">Landing</Link>
        </nav>
      </header>

      <main className="project-shell">
        <section className="project-header">
          <p className="section-tag">Project</p>
          <h1 className="project-title">To-Do List App</h1>
          <p className="project-subtitle">
            A beginner-friendly productivity page built by DaTripleCee with
            filtering and local storage persistence.
          </p>
        </section>

        <section className="todo-layout">
          <article className="panel">
            <h2>Add Task</h2>
            <div className="inline-row" style={{ marginTop: '0.8rem' }}>
              <input
                className="input"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                placeholder="Write your task..."
              />
              <button type="button" className="primary-btn" onClick={addTask}>
                Add
              </button>
            </div>

            <div className="inline-row" style={{ marginTop: '0.8rem' }}>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => setFilter('todo')}
              >
                Active
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => setFilter('done')}
              >
                Done
              </button>
            </div>

            <div className="todo-list">
              {visibleItems.length === 0 ? (
                <p className="todo-empty">No tasks found for this filter.</p>
              ) : (
                visibleItems.map((item) => (
                  <div key={item.id} className={`todo-item ${item.done ? 'done' : ''}`}>
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => toggleTask(item.id)}
                    />
                    <p>{item.text}</p>
                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => deleteTask(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </article>

          <aside className="panel">
            <h2>Quick Stats</h2>
            <p className="todo-meta" style={{ marginTop: '0.6rem' }}>
              Total tasks: {items.length}
            </p>
            <p className="todo-meta">Completed: {items.filter((item) => item.done).length}</p>
            <p className="todo-meta">Active: {items.filter((item) => !item.done).length}</p>
            <p className="todo-meta">Contact: chiagoziemchukwuezi@gmail.com</p>
            <Link to="/" className="back-link">Return to portfolio</Link>
          </aside>
        </section>
      </main>
    </>
  )
}

export default TodoPage
