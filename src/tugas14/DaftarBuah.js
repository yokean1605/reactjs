import React, { Component } from 'react'
import './css.css'

class CrudDaftarBuah extends Component {

    constructor(props) {
        super(props)
        this.state = {
            daftarBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            inputName: "",
            inputHarga: "",
            inputBerat: "",
            // array tidak mungkin punya index -1
            indexOfForm: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        let index = e.target.value
        let newDaftarBuah = this.state.daftarBuah
        let editedPeserta = newDaftarBuah[this.state.indexOfForm]
        newDaftarBuah.splice(index, 1)

        if (editedPeserta !== undefined) {
            // array findIndex baru ada di ES6
            var newIndex = newDaftarBuah.findIndex((el) => el === editedPeserta)
            this.setState({ daftarBuah: newDaftarBuah, indexOfForm: newIndex })
        } else {
            this.setState({ daftarBuah: newDaftarBuah })
        }
    }

    handleEdit(e) {
        let index = e.target.value
        let dataBuah = this.state.daftarBuah[index]
        // console.log(dataBuah);
        this.setState({
            inputName: dataBuah.nama,
            inputHarga: dataBuah.harga,
            inputBerat: dataBuah.berat,
            indexOfForm: index
        })
    }

    handleChange(e) {
        let typeOfInput = e.target.name
        switch (typeOfInput) {
            case "nama":
                {
                    this.setState({ inputName: e.target.value })
                    break
                }
            case "harga":
                {
                    this.setState({ inputHarga: e.target.value })
                    break
                }
            case "berat":
                {
                    this.setState({ inputBerat: e.target.value })
                    break
                }
            default:
                { break; }
        }
    }

    handleSubmit(e) {
        // menahan submit
        e.preventDefault()

        let nama = this.state.inputName
        let harga = this.state.inputHarga.toString()
        let berat = this.state.inputBerat

        if (nama.replace(/\s/g, '') !== "" && harga.replace(/\s/g, '') !== "") {
            let newDaftarBuah = this.state.daftarBuah
            let index = this.state.indexOfForm

            if (index === -1) {
                newDaftarBuah = [...newDaftarBuah, { nama, harga, berat }]
            } else {
                newDaftarBuah[index] = { nama, harga, berat }
            }

            this.setState({
                daftarBuah: newDaftarBuah,
                inputName: "",
                inputHarga: "",
                inputBerat: 0
            })

        }
    }

    // render
    render() {
        return (
            <>
                <h3>Daftar Harga Buah</h3>
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
                        {
                            this.state.daftarBuah.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.berat / 1000}</td>
                                        <td>
                                            <button onClick={this.handleEdit} value={index}>Edit</button>
                                            &nbsp;
                                            <button onClick={this.handleDelete} value={index}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {/* Form */}
                <h1>Form Daftar Harga Buah</h1>
                <div style={{ width: "50%", margin: "0 auto", dispaly: "block" }}>
                    <div style={{ border: "1px solid #aaa", padding: "20px" }}>
                        <form onSubmit={this.handleSubmit}>
                            <label style={{ float: "left" }}>
                                Nama :
                            </label>
                            <input style={{ float: "right" }} type="text" name="nama" value={this.state.inputName} onChange={this.handleChange} />
                            <br />
                            <br />
                            <label style={{ float: "left" }}>
                                Harga :
                            </label>
                            <input style={{ float: "right" }} type="text" name="harga" value={this.state.inputHarga} onChange={this.handleChange} />
                            <br />
                            <br />
                            <label style={{ float: "left" }}>
                                Berat dalam (gram) :
                            </label>
                            <input style={{ float: "right" }} type="number" name="berat" value={this.state.inputBerat} onChange={this.handleChange} />
                            <br />
                            <br />
                            <div style={{ width: "100%", paddingBottom: "20px" }}>
                                <button style={{ float: "right" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }

}

export default CrudDaftarBuah