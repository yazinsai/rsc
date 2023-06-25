'use client';

import React from 'react';

export default function ClientButton({ user }: { user: any }) {
    'use client';

    return (
        <button onClick={() => console.log(user)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
        </button>
    )
}
