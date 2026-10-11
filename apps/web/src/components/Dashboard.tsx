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
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Pages récentes
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Consultez les dernières pages modifiées.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="px-4 py-3 font-medium">Titre</th>
              <th className="px-4 py-3 font-medium">Statut</th>
              <th className="px-4 py-3 font-medium">
                Dernière modification
              </th>
            </tr>
            </thead>

            <tbody>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-4 font-medium text-slate-800">
                Page d'accueil
              </td>
              <td className="px-4 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Publié
                  </span>
              </td>
              <td className="px-4 py-4 text-slate-500">
                10 octobre 2026
              </td>
            </tr>

            <tr className="border-b border-slate-100">
              <td className="px-4 py-4 font-medium text-slate-800">
                À propos
              </td>
              <td className="px-4 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Publié
                  </span>
              </td>
              <td className="px-4 py-4 text-slate-500">
                9 octobre 2026
              </td>
            </tr>

            <tr>
              <td className="px-4 py-4 font-medium text-slate-800">
                Nos services
              </td>
              <td className="px-4 py-4">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    Brouillon
                  </span>
              </td>
              <td className="px-4 py-4 text-slate-500">
                8 octobre 2026
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}

export default Dashboard;
