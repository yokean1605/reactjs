import React, { useContext } from "react"
import { DataBuahContext } from "./DataBuahContext"
import axios from "axios"

const DataBuahList = () => {
    const [dataHargaBuah, setDataHargaBuah, input, setInput, selectedId, setSelectedId, statusForm, setStatusForm] = useContext(DataBuahContext)

    const handleEdit = (event) => {
        console.log(event)
        let index = parseInt(event.target.value)
        let buah = dataHargaBuah.find(x => x.id === index)
        setInput({
            name: buah.name,
            price: buah.price,
            weight: buah.weight
        })
        setSelectedId(index)
        setStatusForm("edit")
    }

    const handleDelete = (event) => {
        console.log(event)
        let idBuah = parseInt(event.target.value)
        let id = event.target.value

        let newDataHargaBuah = dataHargaBuah.filter(el => el.id !== idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                console.log(res)
            })

        setDataHargaBuah([...newDataHargaBuah])

    }

    return (
        <>
            <h1 className="content1">Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th className="th1">Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataHargaBuah !== null && dataHargaBuah.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight / 1000} kg</td>
                                    <td>
                                        <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                          <button onClick={handleDelete} value={item.id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default DataBuahList