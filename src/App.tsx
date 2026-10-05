import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Marquee } from './sections/Marquee'
import { Campaign } from './sections/Campaign'
import { Ecommerce } from './sections/Ecommerce'
import { Branding } from './sections/Branding'
import { Footer } from './sections/Footer'

function App() {
  return (
    <main className="min-h-screen bg-ivory overflow-hidden selection:bg-cognac selection:text-ivory">
      <Header />
      <Hero />
      <Marquee />
      <Campaign />
      <Ecommerce />
      <Branding />
      <Footer />
    </main>
  )
}

export default App
