import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/location/$locationId/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/location/$locationId/"!</div>
}
