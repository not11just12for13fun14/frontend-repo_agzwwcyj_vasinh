import { useEffect, useMemo, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Tickets() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ event_id: '', buyer_name: '', buyer_email: '', quantity: 1 })
  const [message, setMessage] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/events`).then(r => r.json()).then(setEvents).catch(() => setEvents([]))
  }, [])

  const selectedEvent = useMemo(() => events.find(e => e.id === form.event_id), [events, form.event_id])
  const total = useMemo(() => (selectedEvent ? (selectedEvent.price || 0) * (form.quantity || 0) : 0), [selectedEvent, form.quantity])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch(`${API_BASE}/api/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, amount_paid: total })
      })
      if (!res.ok) throw new Error('Failed to create order')
      const data = await res.json()
      setMessage({ type: 'success', text: `Order placed successfully. Ref: ${data.id}` })
      setForm({ event_id: '', buyer_name: '', buyer_email: '', quantity: 1 })
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="tickets" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-white">Buy Tickets</h2>
        <p className="text-blue-200/80 mt-2">Secure your spot at E-Summit 2025.</p>

        <form onSubmit={submit} className="mt-8 bg-slate-800/60 border border-blue-500/20 rounded-xl p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Select Event</label>
              <select required value={form.event_id} onChange={e => setForm({ ...form, event_id: e.target.value })} className="w-full bg-slate-900/60 border border-blue-500/30 text-white rounded px-3 py-2">
                <option value="">Choose an event</option>
                {events.map(e => (
                  <option key={e.id} value={e.id}>{e.name} • ₹{e.price?.toFixed(0) || 0}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Quantity</label>
              <input type="number" min={1} max={10} value={form.quantity} onChange={e => setForm({ ...form, quantity: Number(e.target.value) })} className="w-full bg-slate-900/60 border border-blue-500/30 text-white rounded px-3 py-2" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Full Name</label>
              <input required value={form.buyer_name} onChange={e => setForm({ ...form, buyer_name: e.target.value })} className="w-full bg-slate-900/60 border border-blue-500/30 text-white rounded px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Email</label>
              <input required type="email" value={form.buyer_email} onChange={e => setForm({ ...form, buyer_email: e.target.value })} className="w-full bg-slate-900/60 border border-blue-500/30 text-white rounded px-3 py-2" placeholder="you@example.com" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-blue-200/90">Total: <span className="text-white font-semibold">₹{total.toFixed(0)}</span></p>
            <button disabled={loading} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold disabled:opacity-50">{loading ? 'Processing...' : 'Pay & Confirm'}</button>
          </div>
          {message && (
            <div className={`mt-2 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Tickets