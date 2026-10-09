function Dashboard() {
  return (
    <main className="flex-1 bg-slate-50 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Dashboard
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Bienvenue dans votre espace d'administration.
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + Nouvelle page
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total des pages
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-800">
            24
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Articles publiés
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-800">
            18
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Brouillons
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-800">
            6
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Visiteurs
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-800">
            1 284
          </p>
        </div>
      </div>


    </main>
  );
}

export default Dashboard;
