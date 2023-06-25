import { kv } from '@vercel/kv';

export default async function Page() {
    const user = await kv.hgetall('user:me');

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>About {user}</h1>
        </main>
    )
}
