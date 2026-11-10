import { Approach } from './components/Approach'
import { Contact } from './components/Contact'
import { Credibility } from './components/Credibility'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Work } from './components/Work'

export default function App() {
  return (
    <div className="min-h-svh">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Approach />
        <Credibility />
        <Contact />
      </main>
    </div>
  )
}
