import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from "./components/Dashboard";


function App() {
  return (

      <>

        <div className="min-h-screen bg-slate-50">
          <Header />

          <div className="flex">
            <Sidebar />

            <Dashboard />

            <main className="flex-1 p-8">
              <h1 className="text-3xl font-bold text-blue-600">
                Dashboard
              </h1>

              <p className="mt-4 rounded-lg bg-blue-100 p-4 text-blue-800">
                Welcome to CMS Intelligent
              </p>

              <div className="mt-6 rounded-xl bg-blue-600 p-6 text-white">
                <h2 className="text-2xl font-bold">
                  CMS Intelligent
                </h2>
                <p className="mt-2">
                  Notre projet utilise Tailwind CSS.
                </p>
              </div>
            </main>
          </div>
        </div>
      </>
  )
}

export default App
