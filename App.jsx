import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Guide from './components/Guide'
import Quiz from './components/Quiz'
import Footer from './components/Footer'

// ─── APP ROOT ────────────────────────────────────────────────────────────────
// ✏️ UPDATE: Add or remove sections here
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Guide />
        <Quiz />
      </main>
      <Footer />
    </div>
  )
}
