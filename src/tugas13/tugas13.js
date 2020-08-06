
// note masih belum saya kerjakan. karena bingung. Jadi nunggu video pembahasan saja

import React from 'react';
import './tugas13.css';


class ItemBuah extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Table Harga Buah</h1>
                <table className="tableHBarang">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* loop data */}
                        {
                            this.state.dataHargaBuah.map((el, index) => {
                                console.log(el);
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{el.nama}</td>
                                        <td>{el.harga}</td>
                                        <td>{el.berat}</td>
                                        <td></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <ItemBuah />
        </div>
    );
}

export default App;