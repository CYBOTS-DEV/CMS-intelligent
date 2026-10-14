
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Toasts from './Toasts'
import { useState } from 'react'

type ToastType = 'success' | 'error' | 'info'

function App() {
    const [toastId, setToastId] = useState(0)
    const [toastType, setToastType] = useState<ToastType>('success')

    const showToast = (type: ToastType) => {
        setToastType(type)
        setToastId((id) => id + 1)
    }

    const messages: Record<ToastType, string> = {
        success: 'Page enregistrée avec succès !',
        error: "Échec de l'enregistrement de la page.",
        info: 'Génération IA en cours...',
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {toastId > 0 && (
                <Toasts
                    key={toastId}
                    message={messages[toastType]}
                    type={toastType}
                />
            )}

            <Header />

            <div className="flex">
                <main className="flex-1 p-8">
                    <Dashboard />

                    <div className="mt-4 flex flex-wrap gap-3">
                        <button
                            onClick={() => showToast('success')}
                            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                        >
                            Tester succès
                        </button>

                        <button
                            onClick={() => showToast('error')}
                            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                            Tester erreur
                        </button>

                        <button
                            onClick={() => showToast('info')}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Tester info
                        </button>
                    </div>
                </main>

                <Sidebar />
            </div>
        </div>
    )
}

export default App
