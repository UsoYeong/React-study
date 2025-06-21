import './App.css'

const element1 = <h2>Hello, World!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

function ElementExpressions() {
  return (
    <section>
      {element1}
      {element2}
    </section>
  )
}


// 중괄호 표현식

const language = "JavaScript"

// 문법

function BasicExpressions() {
  const name = "John";
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin Status: {String(isAdmin)}</p>
    </div>
  )
}

// 웹사이트에 표시시

function App() {

  return (
    <>
      <h1>JSX</h1>
      <BasicExpressions />
      <ElementExpressions />

      {language}
    </>
  )
}

export default App

