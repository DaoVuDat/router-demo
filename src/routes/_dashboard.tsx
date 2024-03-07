import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard')({
  component: () => <div>
    <div>Hello /_dashboard!</div>
    <Outlet />
  </div>
})