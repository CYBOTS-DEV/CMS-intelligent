
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import  Toasts  from './Toasts'

function App() {
  return (
      <>
        <Toasts message={"welcome to cms intelligent"} type="success" />

        <div className="min-h-screen bg-slate-50">
          <Header />

          <div className="flex">
            <Sidebar />

            <main className="flex-1 p-8">
              <Dashboard />
            </main>
          </div>
        </div>
      </>
  )
}

export default App
