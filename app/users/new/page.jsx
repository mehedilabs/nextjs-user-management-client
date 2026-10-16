"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"
const NewUserPage = () => {
  const handleAddNewUser = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())

    const res = await fetch(`http://localhost:5000/users`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })

    const afterSubmit = await res.json()

    if (afterSubmit.insertedId) {
      alert("User added successfully")
      redirect("/users")
    }
  }
  return (
    <main className="grid min-h-svh w-full place-items-center bg-slate-100 px-4 py-10 dark:bg-slate-950">
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Add New User
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-400">
            Enter the user&apos;s details to create a new account.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <form onSubmit={handleAddNewUser}>
            <FieldGroup className="gap-6">
              <Field>
                <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                <Input
                  id="fieldgroup-name"
                  name="name"
                  placeholder="Jordan Lee"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                <Input
                  id="fieldgroup-email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <FieldDescription>
                  We&apos;ll send updates to this address.
                </FieldDescription>
              </Field>

              <Field orientation="horizontal" className="gap-3 pt-2">
                <Button type="reset" variant="outline" className="flex-1">
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-cyan-600 text-white hover:bg-cyan-700"
                >
                  Add User
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </main>
  )
}

export default NewUserPage
