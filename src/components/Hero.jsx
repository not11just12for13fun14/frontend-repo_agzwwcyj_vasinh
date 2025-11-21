import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-300 ring-1 ring-inset ring-blue-500/30">
          RSCOE E-Club presents
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          E-Summit 2025
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto">
          Celebrate entrepreneurship with inspiring talks, startup showcases, and hands-on workshops. Buy tickets, explore speakers, and revisit last year’s highlights.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#tickets" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow">
            Get Tickets
          </a>
          <Link to="#speakers" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20">
            Meet Speakers
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero