import UserCard from "../../components/UserCard"

const UsersPage = async () => {
  const res = await fetch("http://localhost:5000/users")
  const users = await res.json()

  return (
    <main className="min-h-svh bg-slate-50 px-4 py-10 sm:px-6 lg:px-10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Users Management
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            View and manage your user information in one place.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
            Total Users: {users.length}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user._id} user={user}></UserCard>
          ))}
        </div>
      </div>
    </main>
  )
}

export default UsersPage
