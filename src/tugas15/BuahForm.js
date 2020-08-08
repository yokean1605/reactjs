import React, { useContext, useEffect } from "react"
import { DataBuahContext } from "./DataBuahContext"
import axios from "axios"

const DataBuahForm = () => {
    const [dataHargaBuah, setDataHargaBuah, input, setInput, selectedId, setSelectedId, statusForm, setStatusForm] = useContext(DataBuahContext)

    useEffect(() => {
        if (dataHargaBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    setDataHargaBuah(res.data.map(el => { return { id: el.id, name: el.name, price: el.price, weight: el.weight } }))
                })
        }
    }, [dataHargaBuah])

    const handleSubmit = (event) => {
        event.preventDefault()

        let name = input.name
        let price = input.price
        let weight = input.weight

        if (name.replace(/\s/g, '') !== "" && weight.toString().replace(/\s/g, '') !== "" && price.toString().replace(/\s/g, '') !== "") {
            if (statusForm === "create") {
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
                    .then(res => {
                        setDataHargaBuah([...dataHargaBuah, { id: res.data.id, name: input.name, price: input.price, weight: input.weight }])
                    })
            } else if (statusForm === "edit") {
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, { ...input })
                    .then(res => {
                        let dataBuah = dataHargaBuah.find(el => el.id === selectedId)
                        dataBuah.name = input.name
                        dataBuah.price = input.price
                        dataBuah.weight = input.weight
                        setDataHargaBuah([...dataHargaBuah])
                    })
            }

            setStatusForm("create")
            setSelectedId(0)
            setInput({
                name: "",
                price: "",
                weight: ""
            })
        }

    }

    const handleChange = (event) => {
        let newHargaBuah = { ...input }
        newHargaBuah[event.target.name] = event.target.value
        setInput(newHargaBuah)
    }

    return (
        <>
            <h1 className="content1">Submit Data Buah</h1>
            <form className="content1" onSubmit={handleSubmit}>
                <label>Nama Buah : </label>
                <input type="text" name='name' value={input.name} onChange={handleChange} />
                <br /><br />
                <label>Harga Buah : </label>
                <input type="text" name='price' value={input.price} onChange={handleChange} />
                <br /><br />
                <label>Berat Buah : </label>
                <input type="number" name='weight' value={input.weight} onChange={handleChange} />
                <br /><br />
                <button><a>submit</a></button>
                <br /><br /><br />
            </form>
        </>
    )

}

export default DataBuahForm