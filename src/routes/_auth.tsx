import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: () => <div>
    <div>Hello /_auth!</div>
    <Outlet />
  </div>
})