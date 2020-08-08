import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/hargaBarang">Table Harga Barang</Link>
                </li>
                <li>
                    <Link to="/timer">Timer</Link>
                </li>
                <li>
                    <Link to="/crud">Daftar Buah</Link>
                </li>
                <li>
                    <Link to="/DaftarBuah">Daftar Buah Hooks</Link>
                </li>
                <li>
                    <Link to="/DaftarBuahContext">Daftar Buah Context</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation