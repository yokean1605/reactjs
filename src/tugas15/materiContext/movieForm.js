import React, { useState, useContext } from 'react'
import { MovieContext } from "./MovieContext"

const MovieForm = () => {
    const [name, setName] = useState("")
    const [lengthOfTime, setlengthOfTime] = useState(0)
    const [movie, setMovie] = useContext(MovieContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovie([...movie, { name, lengthOfTime }])
        setName("")
        setlengthOfTime("")
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeTime = (e) => {
        setlengthOfTime(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" onChange={handleChangeName} />
                <input name="number" type="text" onChange={handleChangeTime} />
                <button>Submit</button>
            </form>
        </>
    )

}

export default MovieForm