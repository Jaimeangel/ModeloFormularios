import { useState } from "react"

import InputType from "./InputType"
import InputTypeSelect from "./InputTypeSelect"

const parqueaderos = [
    {
        value:'423423423423d',
        text:'Parqueadero la 33'
    },
    {
        value:'42sdad3423d',
        text:'Parqueadero Suramericana'
    },
    {
        value:'42sdadsds3423d',
        text:'Parqueadero Buenos Aires'
    }
]

function FormCrearParker() {
    const [nombres,setNombres]=useState()
    const [apellidos,setApellidos]=useState()
    const [identificacion,setIdentificacion]=useState()
    const [parqueadero,setParqueadero]=useState()

    const handleSubtmit =(e)=>{
        e.preventDefault()
        console.log({
            nombres,
            apellidos,
            identificacion,
            parqueadero
        })
    }

    return (
        <form
            onSubmit={handleSubtmit} 
            className="max-w-2xl bg-white flex flex-col items-center gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mx-2 mt-5"
        >
            <h2 className="text-2xl font-bold italic tracking-wider">Crear usuario Parker</h2>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={nombres}
                    callback={setNombres}
                    placeholderInput='Ingrese sus nombres'
                    label='Nombres'
                    typeInput='text'
                />
                <InputType
                    value={apellidos}
                    callback={setApellidos}
                    placeholderInput='Ingrese sus apellidos'
                    label='Apellidos'
                    typeInput='text'
                />
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={identificacion}
                    callback={setIdentificacion}
                    placeholderInput='numero de identificacion'
                    label='Identificacion'
                    typeInput='number'
                />
                <InputTypeSelect
                    value={parqueadero}
                    callback={setParqueadero}
                    label='Parquadero asociado'
                    listaOpciones={parqueaderos}
                    primeraOpcion='Elige un parqueadero'
                />
            </div>

            <button
                type="submit"
                className='max-w-md w-full text-black text-lg tracking-wide font-semibold py-1 rounded-lg  bg-green-400 border border-green-600'
            >
                Registrar 
            </button>
        </form>
    )
}

export default FormCrearParker
