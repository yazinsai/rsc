import Censored from '@/components/Censored'
import HitCounter from '@/components/HitCounter'

export default async function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Censored>
                <span>Number of hits is <HitCounter /></span>
            </Censored>
        </main>
    )
}
