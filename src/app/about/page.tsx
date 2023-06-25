import { kv } from '@vercel/kv';
import Censored from '@/components/Censored'

export default async function Page() {
    const user: any = await kv.get('user:me');

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Censored>
                <p className="text-2xl">The user is {user.name}</p>
            </Censored>
        </main>
    )
}
