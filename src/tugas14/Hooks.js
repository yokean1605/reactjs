import React, { useState } from 'react'

const Example = () => {
    // Deklarasi variable state baru yang kita sebut 'count'
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>ANda menekan sebanyak {count} kali</p>
            <button onClick={() => setCount(count + 1)}>Klik Saya</button>
        </div>
    )
}

export default Example