import Navbar from './components/navbar'
import Hero from './components/hero'
import './App.css'
import Card from './components/card'
import data from './data'

function App() {
  const cards = data.map(item => { return (<Card key={item.id} {...item} />) })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
