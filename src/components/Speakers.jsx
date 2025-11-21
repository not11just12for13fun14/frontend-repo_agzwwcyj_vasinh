import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Speakers() {
  const [speakers, setSpeakers] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/speakers`).then(r => r.json()).then(setSpeakers).catch(() => setSpeakers([]))
  }, [])

  return (
    <section id="speakers" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Speakers</h2>
        <p className="text-blue-200/80 mt-2">Industry leaders and innovators joining us this year.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.length === 0 && (
            <div className="col-span-full text-blue-200/70">Speakers will be announced soon.</div>
          )}
          {speakers.map(sp => (
            <div key={sp.id} className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <img src={sp.photo_url || 'https://via.placeholder.com/64'} alt={sp.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-white font-semibold">{sp.name}</h3>
                  <p className="text-sm text-blue-200/70">{sp.title} {sp.company ? `• ${sp.company}` : ''}</p>
                </div>
              </div>
              {sp.bio && <p className="text-blue-200/80 text-sm mt-3">{sp.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers