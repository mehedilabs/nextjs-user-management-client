import React from "react"

const UserPageDetails = async ({ params }) => {
  const { userid } = await params

  const res = await fetch(`http://localhost:5000/users/${userid}`)
  const user = await res.json()

  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-50 px-4 py-10 sm:px-6 dark:bg-slate-950">
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
          <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600" />

          <div className="p-6 sm:p-10">
            <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>

            <p className="text-sm font-semibold tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
              User Information
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              User Details
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              User ID: <span className="break-all">{userid}</span>
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Full Name
                </p>
                <p className="mt-2 text-lg font-semibold break-words text-slate-900 dark:text-white">
                  {user.name}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Email Address
                </p>
                <p className="mt-2 text-lg font-semibold break-all text-slate-900 dark:text-white">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserPageDetails
