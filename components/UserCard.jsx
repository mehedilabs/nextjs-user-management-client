"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
import UpdateUserDialog from "./UpdateUserDialog"

const UserCard = ({ user }) => {
  const { _id } = user
  const router = useRouter()
  const handleDeleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
    const afterDelete = await res.json()
    console.log(afterDelete)
    if (afterDelete.deletedCount > 0) {
      console.log("User deleted successfully")
      router.refresh()
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-sm">
      <Card className="w-full overflow-hidden rounded-2xl border-slate-200 bg-white pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-900">
        <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600" />

        <CardHeader className="gap-3 px-5 pt-5">
          <CardAction>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              User
            </span>
          </CardAction>

          <CardTitle className="text-xl font-bold break-words text-slate-900 dark:text-white">
            {user.name}
          </CardTitle>

          <CardDescription className="text-sm leading-6 break-all text-slate-600 dark:text-slate-400">
            Email: {user.email}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-wrap gap-2 px-5 pt-3 pb-5">
          <Link href={`/users/${user._id}`} className="min-w-0 flex-1">
            <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-700">
              View Details
            </Button>
          </Link>

          <UpdateUserDialog user={user} />

          <Button
            onClick={() => handleDeleteUser(_id)}
            variant="destructive"
            className="flex-1 sm:flex-none"
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
