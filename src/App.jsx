import './App.css'
import Greeting from './Greeting'
import products from './data/products'
import ProductCard from './components/ProductCard'

function App() {
  const availableCount = products.filter(p => p.inStock).length;

  const tips = [
    'Take one small action before aiming for perfect results.',
    'Focus on progress, not pressure.',
    'Pause, breathe, and restart with clarity when stuck.',
    'Protect your energy by finishing one task at a time.',
  ]

  return (
    <main className="page">
      {/* <section className="card">
        <Greeting name="Sarunpat" />

        <div className="tips-block">
          <h2>Motivational Tips</h2>
          <ul className="tips-list">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </section> */}

      <div className="app">
        <header className="app-header">
          <h1>JukJik Shop</h1>
          <p>{products.length} products | {availableCount} available</p>
        </header>
        <div className="gallery-grid">
          {products.map(product => (
            <ProductCard {...product} />))}
        </div>
      </div>
    </main>
  )
}

export default App
