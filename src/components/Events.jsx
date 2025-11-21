import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/events`).then(r => r.json()).then(setEvents).catch(() => setEvents([]))
  }, [])

  return (
    <section id="events" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Featured Events</h2>
        <p className="text-blue-200/80 mt-2">Talks, panels, workshops and competitions.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 && (
            <div className="col-span-full text-blue-200/70">Events schedule will be revealed soon.</div>
          )}
          {events.map(evt => (
            <div key={evt.id} className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold">{evt.name}</h3>
                  <p className="text-sm text-blue-200/70">{new Date(evt.date).toLocaleString()}</p>
                </div>
                <span className="text-white font-semibold">₹{evt.price?.toFixed(0) || 0}</span>
              </div>
              {evt.description && <p className="text-blue-200/80 text-sm mt-3">{evt.description}</p>}
              <p className="text-blue-200/70 text-sm mt-2">{evt.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events