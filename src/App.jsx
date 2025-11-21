import Hero from './components/Hero'
import Speakers from './components/Speakers'
import Events from './components/Events'
import Tickets from './components/Tickets'
import Highlights from './components/Highlights'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-blue-500/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" className="h-8 w-8"/>
            <span className="font-semibold">RSCOE E-Club</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#speakers" className="hover:text-white">Speakers</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#tickets" className="hover:text-white">Tickets</a>
            <a href="#highlights" className="hover:text-white">2024 Recap</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Speakers />
        <Events />
        <Tickets />
        <Highlights />
      </main>

      <footer className="mt-20 border-t border-blue-500/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} RSCOE E-Club • E-Summit</p>
          <a href="/test" className="mt-2 sm:mt-0 underline hover:no-underline">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App