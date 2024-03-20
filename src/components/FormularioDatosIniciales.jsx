import { useState } from "react"

const FormularioDatosIniciales = ({ datosIniciales, setDatosIniciales, onCalcularSubneteo, onReiniciarDatos }) => {

    const [numeroHost, setNumeroHost] = useState(0)

    const agregarNumeroHost = () => {
        console.log('Agregando numero de host')
        if (numeroHost === '') return
        setDatosIniciales(estadoAnterior => ({ ...estadoAnterior, numerosHostCalcular: [...estadoAnterior.numerosHostCalcular, parseInt(numeroHost)] }))
    }

    const onReiniciarDatosFull = () => {
        onReiniciarDatos()
        setNumeroHost(0)
    }

    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Datos de la red inicial</h2>
            <div className="border border-gray-300 rounded-md p-4 mb-4">
                <div className="mb-4">
                    <label className="block mb-2">Dirección IP:</label>
                    <input
                        value={datosIniciales.direccionIp}
                        required
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        placeholder="Dirección IP (Ej: 192.168.0.1)"
                        onChange={evt => setDatosIniciales(estadoAnterior => ({ ...estadoAnterior, direccionIp: evt.target.value }))}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Prefijo:</label>
                    <input
                        value={datosIniciales.prefijo}
                        required
                        type="number"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        placeholder="Prefijo (Ej: 24)"
                        onChange={evt => setDatosIniciales(estadoAnterior => ({ ...estadoAnterior, prefijo: parseInt(evt.target.value) }))}
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Número de host a subnetear</h3>
                    <div className="flex items-center">
                        <input
                            required
                            type="number"
                            value={numeroHost}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 mr-4"
                            placeholder="Número de hosts a subnetear"
                            onChange={evt => setNumeroHost(evt.target.value)}
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={agregarNumeroHost}>Agregar</button>
                    </div>
                </div>
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onCalcularSubneteo}>Calcular</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={onReiniciarDatosFull}>Reiniciar</button>
        </div>


    )

}

export default FormularioDatosIniciales