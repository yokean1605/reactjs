import React from 'react';
import './../App.css';


class DataTableName extends React.Component {
    render() {
        return <td>{this.props.nama}</td>;
    }
}
class DataTablePrice extends React.Component {
    render() {
        return <td>{this.props.harga}</td>;
    }
}

class DataTableWeight extends React.Component {
    render() {
        return <td>{this.props.berat}kg</td>;
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
                <table className="Table">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map(el => {
                            return (
                                <tr>
                                    <DataTableName nama={el.nama} />
                                    <DataTablePrice harga={el.harga} />
                                    <DataTableWeight berat={(el.berat) / 1000} />
                                </tr>
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
            <DataTable />"
        </div>
    );
}

export default App;