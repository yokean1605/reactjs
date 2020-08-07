import React, { useState, useEffect } from 'react'
import axios from "axios"
import './../css.css'

const ListHooks = () => {

    const [pesertaLomba, setPesertaLomba] = useState(['Budi', 'Susi', 'Lala', 'Agung'])
    const [inputName, setInputName] = useState("")
    const [indexOfForm, setIndexOfForm] = useState(-1)

    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/contestants`).then(res => {
            console.log(res);
        })
    })

    const handleDelete = (event) => {
        let index = event.target.value
        let newPesertaLomba = pesertaLomba
        let editedPeserta = newPesertaLomba[indexOfForm]
        newPesertaLomba.splice(index, 1)

        if (editedPeserta !== undefined) {
            // array findIndex baru ada di ES6
            var newIndex = newPesertaLomba.findIndex((el) => el === editedPeserta)
            setPesertaLomba([...newPesertaLomba])
            setIndexOfForm(newIndex)

        } else {

            setPesertaLomba([...newPesertaLomba])
        }

    }

    const handleEdit = (event) => {
        let index = event.target.value
        let peserta = pesertaLomba[index]
        setInputName(peserta)
        setIndexOfForm(index)
    }

    const handleChange = (event) => {
        setInputName(event.target.value);
    }

    const handleSubmit = (event) => {
        // menahan submit
        event.preventDefault()

        let name = inputName

        if (name.replace(/\s/g, '') !== "") {
            let newPesertaLomba = pesertaLomba
            let index = indexOfForm

            if (index === -1) {
                newPesertaLomba = [...newPesertaLomba, name]
            } else {
                newPesertaLomba[index] = name
            }


            setPesertaLomba(newPesertaLomba)
            setInputName("")
        }

    }

    return (
        <>
            <h1>Daftar Peserta Lomba</h1>
            <table className="tableHBarang">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pesertaLomba.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val}</td>
                                    <td>
                                        <button onClick={handleEdit} value={index}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* Form */}
            <h1>Form Peserta</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Masukkan nama peserta:
                </label>
                <input type="text" value={inputName} onChange={handleChange} />
                <button>submit</button>
            </form>
        </>
    )

}

export default ListHooks