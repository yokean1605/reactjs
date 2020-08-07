import React, { useState, useEffect } from 'react'

const Example = () => {
    // Deklarasi variable state baru yang kita sebut 'count'
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 10) {
            // Memperbarui judul dokumen menggunakan API browser
            document.title = `You clicked ${count} times`;
        }
    });

    return (
        <div>
            <p>ANda menekan sebanyak {count} kali</p>
            <button onClick={() => setCount(count + 1)}>Klik Saya</button>
        </div>
    )
}

export default Example