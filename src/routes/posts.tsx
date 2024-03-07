import * as React from 'react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: PostsComponent,
})

function PostsComponent() {


  return (
    <div className="p-2 flex gap-2">
      Posts
      <hr />
      <Outlet />
    </div>
  )
}
