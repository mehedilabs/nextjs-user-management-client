import React from "react"

const UserPageDetails = async ({ params }) => {
  const { userid } = await params

  const res = await fetch(`http://localhost:5000/users/${userid}`)
  const user = await res.json()

  return (
    <div>
      <h2>User Details: {userid}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserPageDetails
