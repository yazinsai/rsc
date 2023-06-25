'use client';

import React from 'react';

function Censored({ children }: { children: React.ReactElement }) {
    const [censored, setCensored] = React.useState(false);

    return (
        <div className={censored ? 'blur-md': undefined} onClick={() => setCensored(!censored)}>
            {children}
        </div>
    )
}

export default Censored;
