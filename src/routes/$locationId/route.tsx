import Header from '@/components/InnerHeader'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$locationId')({
    component: RouteComponent,
})

function RouteComponent() {

    return <div>
        <Header />
        <Outlet />
    </div>
}
