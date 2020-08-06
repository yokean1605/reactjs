import React, { Component } from 'react'
import './list.css'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesertaLomba: ['Budi', 'Susi', 'Lala', 'Agung'],
            inputName: "",
            indexForm: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        let i = e.target.value
        let newPesertaLomba = this.state.pesertaLomba
        newPesertaLomba.splice(i, 1)

        this.setState({ pesertaLomba: newPesertaLomba });
    }

    // method handle Edit
    handleEdit(e) {
        // console.log(e.target.value);
        let i = e.target.value;
        let peserta = this.state.pesertaLomba[i]
        this.setState(
            { inputName: peserta, indexForm: i }
        );
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.setState({ inputName: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault(); // menahan submit
        let nm = this.state.inputName
        if (nm.replace(/\s/g, '') !== "") {
            let newPesertaLomba = this.state.pesertaLomba
            let index = this.state.indexForm

            if (index === -1) {
                newPesertaLomba = [...newPesertaLomba, nm]
            } else {
                newPesertaLomba[index] = nm
            }

            this.setState({
                pesertaLomba: newPesertaLomba,
                inputName: ""
            });
        }
    }
    render() {
        return (
            <>
                <h1>Daftar Nama Peserta</h1>

                <table className="tableList">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // looping data state
                            this.state.pesertaLomba.map(
                                (value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{value}</td>
                                            <td>
                                                <button onClick={this.handleEdit} value={index}>Edit</button>
                                                &nbsp;
                                                <button onClick={this.handleDelete} value={index}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>

                {/* Form input Data */}
                <form onSubmit={this.handleSubmit}>
                    <label>Masukan nama peserta : </label>
                    <input type="text" value={this.state.inputName} onChange={this.handleChange} placeholder="Masukan nama peserta"></input>
                    <button>Submit</button>
                </form>
            </>
        )
    }

}

export default List