function Sidebar() {return (
    <aside className="w-60 min-h-screen shrink-0 border-r border-slate-200 bg-white p-4">
        <nav>
            <ul className="space-y-2">
                <li>
                    <a
                        href="#dashboard"
                        className="block rounded-lg bg-blue-50 px-4 py-3 font-semibold text-blue-700"
                    >
                        Dashboard
                    </a>
                </li>

                <li>
                    <a
                        href="#pages"
                        className="block rounded-lg px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                        Pages
                    </a>
                </li>

                <li>
                    <a
                        href="#settings"
                        className="block rounded-lg px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
);
}

export default Sidebar;