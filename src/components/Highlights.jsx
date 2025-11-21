import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Highlights() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/highlights`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <section id="highlights" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Last Year Highlights</h2>
        <p className="text-blue-200/80 mt-2">A quick look at E-Summit 2024.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.length === 0 && (
            <div className="text-blue-200/70">We will publish highlights soon.</div>
          )}
          {items.map(h => (
            <div key={h.id} className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{h.year} Recap</h3>
                <span className="text-blue-200/80">{h.headline}</span>
              </div>
              {h.gallery && h.gallery.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {h.gallery.slice(0,3).map((img, i) => (
                    <img key={i} src={img} className="h-24 w-full object-cover rounded" />
                  ))}
                </div>
              )}
              {h.stats && (
                <div className="mt-4 grid grid-cols-2 gap-2 text-blue-200/80 text-sm">
                  {Object.entries(h.stats).map(([k,v]) => (
                    <div key={k} className="bg-slate-900/40 border border-blue-500/10 rounded px-3 py-2">
                      <span className="text-white font-semibold mr-2">{v}</span>{k}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights