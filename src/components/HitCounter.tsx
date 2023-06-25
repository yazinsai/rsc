import { kv } from '@vercel/kv';

async function HitCounter() {
    const hits: number = await kv.get('hits') ?? 0;

    // Increment the number of hits by 1
    await kv.set('hits', hits + 1);

    return hits
}

export default HitCounter;
