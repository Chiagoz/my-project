import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import './ProjectPages.css'

const keys = [
  'C', '/', '*', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '.',
  '1', '2', '3', '0',
]

function CalculatorPage() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('0')

  const append = (value) => setExpression((prev) => prev + value)

  const clear = () => {
    setExpression('')
    setResult('0')
  }

  const calculate = () => {
    if (!expression) return

    try {
      const safe = expression.replace(/[^-+*/.()\d]/g, '')
      const output = Function(`"use strict"; return (${safe})`)()
      setResult(String(output))
    } catch {
      setResult('Error')
    }
  }

  useEffect(() => {
    const onKeydown = (event) => {
      if (/^[0-9+\-*/.]$/.test(event.key)) {
        setExpression((prev) => prev + event.key)
      }
      if (event.key === 'Enter') calculate()
      if (event.key === 'Backspace') {
        setExpression((prev) => prev.slice(0, -1))
      }
      if (event.key.toLowerCase() === 'c') clear()
    }

    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [])

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
          <h1 className="project-title">Calculator</h1>
          <p className="project-subtitle">
            A lightweight calculator by DaTripleCee with click and keyboard input support.
          </p>
        </section>

        <section className="panel calc-wrap">
          <div className="calc-screen">
            <p className="calc-expression">{expression || '0'}</p>
            <p className="calc-result">{result}</p>
          </div>

          <div className="calc-grid">
            {keys.map((key) => (
              <button
                key={key}
                type="button"
                className={`calc-btn ${'+-*/'.includes(key) ? 'operator' : ''}`}
                onClick={() => append(key)}
              >
                {key}
              </button>
            ))}

            <button type="button" className="calc-btn operator" onClick={clear}>C</button>
            <button type="button" className="calc-btn equal" onClick={calculate}>=</button>
          </div>

          <Link to="/" className="back-link">Return to portfolio</Link>
          <a className="back-link" href="mailto:chiagoziemchukwuezi@gmail.com">
            Hire DaTripleCee
          </a>
        </section>
      </main>
    </>
  )
}

export default CalculatorPage
