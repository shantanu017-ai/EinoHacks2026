import Contact from './components/Contact'
import Demo from './components/Demo'
import Evidence from './components/Evidence'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Nav from './components/Nav'
import Problem from './components/Problem'
import Roadmap from './components/Roadmap'
import Safety from './components/Safety'
import Stats from './components/Stats'

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <a
        href="#main"
        className="sr-only rounded-full bg-pine-800 px-4 py-2 text-paper focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Safety />
        <Evidence />
        <Demo />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
