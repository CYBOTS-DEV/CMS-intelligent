
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import  Toasts  from './Toasts'
import { useState } from 'react'

function App() {
    const [message, setMessage] = useState('')
    const showSuccess = () => {
        setMessage('Page enregistrée avec succès !')
    }
    return (
      <>
          {message && (
              <Toasts
                  key={message}
                  message={message}
                  type="success"
              />
          )}

        <div className="min-h-screen bg-slate-50">
          <Header />

          <div className="flex">
            <Sidebar />

            <main className="flex-1 p-8">
              <Dashboard />
                <button
                    onClick={showSuccess}
                    className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                    Tester une notification
                </button>
            </main>
          </div>
        </div>
      </>
  )
}

export default App
