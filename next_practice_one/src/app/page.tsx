import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <h1>Route: /</h1>
        <div className="flex flex-col gap-5">
          <Link href={"/blog"}>Blogs</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/profile"}>Profile</Link>
          <Link href={"/about"}>About</Link>
        </div>
    </div>
  )
}
