import './App.css'
import reactLogo from './assets/image.png'

const reactLogoAlt = 'React Logo'
console.log(reactLogo)

function App() {

  return (
    <>
    <img
      src={reactLogo}
      alt={reactLogoAlt}
      width={256}
      height={228}
      />
    </>
  )
}

export default App