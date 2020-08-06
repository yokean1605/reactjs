import React from 'react';
import './tugas11.css';


class ItemBuah extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.nama}</td>
                <td>{this.props.item.harga}</td>
                <td>{this.props.item.berat / 1000} kg</td>
            </tr>
        );
    }
}

var dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]


class DataTable extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Table Harga Buah</h1>
                <table className="tableHBarang">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map((el, index) => {
                            return (
                                <>
                                    < ItemBuah item={el} key={index} />
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <DataTable />
        </div>
    );
}

export default App;