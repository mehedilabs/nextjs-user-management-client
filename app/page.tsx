import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Database,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: UserPlus,
    title: "Create Users",
    description: "Add new users quickly with a simple and easy-to-use form.",
  },
  {
    icon: Database,
    title: "Manage Data",
    description: "Keep user information organized and connected to MongoDB.",
  },
  {
    icon: ShieldCheck,
    title: "Complete CRUD",
    description: "Create, read, update, and delete user records in one place.",
  },
]

export default function Page() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 dark:bg-slate-950">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="mb-14 flex items-center justify-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/20">
            <Users className="size-6" />
          </div>

          <div className="text-left">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              UserHub
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              User Management System
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-800 shadow-sm dark:border-cyan-900 dark:bg-slate-900/80 dark:text-cyan-300">
            <Database className="size-4" />
            Next.js · Express.js · MongoDB
          </div>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Manage your users,
            <span className="mt-2 block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              effortlessly.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            A simple and intuitive user management application. Create, view,
            update, and manage your user records from one place.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/users/new">
              <Button className="h-12 w-full rounded-xl bg-cyan-600 px-6 text-base text-white shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 sm:w-auto">
                <UserPlus className="size-5" />
                Add New User
              </Button>
            </Link>

            <Link href="/users">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-slate-300 bg-white/80 px-6 text-base hover:bg-slate-100 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <Users className="size-5" />
                Check Users
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 text-left shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/5 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-cyan-900"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-600 group-hover:text-white dark:bg-cyan-950 dark:text-cyan-300">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          Built with Next.js, Express.js and MongoDB.
        </footer>
      </div>
    </main>
  )
}
