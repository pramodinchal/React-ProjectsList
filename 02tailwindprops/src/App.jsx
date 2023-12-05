
import './App.css'
import Card from './Components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-6 rounded-lg'>Tailwind test</h1>
      <Card name="Candy" btnText='Visit Me'/>
      <Card name="Ankya" btnText = 'Click Me'/>
    </>
  )
}

export default App
