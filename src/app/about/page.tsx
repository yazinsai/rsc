import { kv } from '@vercel/kv';
import ClientButton from '@/components/ClientButton'

export default async function Page() {
    const user: any = await kv.get('user:me');

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>About {user.name}</h1>

            <ClientButton user={user} />
        </main>
    )
}
