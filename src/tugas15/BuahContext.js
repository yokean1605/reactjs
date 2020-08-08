import React, { useState, createContext } from "react";

export const DataBuahContext = createContext();

export const DataBuahProvider = props => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [input, setInput] = useState({ name: "", price: "", weight: "" })
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm] = useState("create")

    return (
        <DataBuahContext.Provider value={[dataHargaBuah, setDataHargaBuah, input, setInput, selectedId, setSelectedId, statusForm, setStatusForm]}>
            {props.children}
        </DataBuahContext.Provider>
    )
}