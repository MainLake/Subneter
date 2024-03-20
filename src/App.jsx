import { useState } from "react"

import FormularioDatosIniciales from "./components/FormularioDatosIniciales"
import MostrarDatosIniciales from "./components/MostrarDatosIniciales"
import TablaSubneteo from "./components/TablaSubneteo"

const validarIp = (ip) => {
    const regex = /^(\d{1,3}\.){3}\d{1,3}$/
    return regex.test(ip)
}

const App = () => {

    const [alerta, setAlerta] = useState('')

    const [datosIniciales, setDatosIniciales] = useState(
        {
            direccionIp: '',
            prefijo: '',
            numerosHostCalcular: []
        }
    )
    const [datosSubneteo, setDatosSubneteo] = useState([])
    const calcularSubneteo = () => {

        if (datosIniciales.direccionIp === '' || datosIniciales.prefijo === '' || datosIniciales.numerosHostCalcular.length === 0) {
            setAlerta('faltan datos por agregar')

            setTimeout(() => {
                setAlerta('')
            }, 3000)

            return
        }

        if (!validarIp(datosIniciales.direccionIp)) {
            setAlerta('La dirección IP no es válida, formato incorrecto, ejemplo: 192,168.10.0')
            setTimeout(() => {
                setAlerta('')
            }, 3000)
            return
        }

        const numeroCalculos = datosIniciales.numerosHostCalcular.length

        const datosCache = { ...datosIniciales }

        for (let i = 0; i <= numeroCalculos - 1; i++) {

            const hostRequeridos = datosCache.numerosHostCalcular[i]
            let p = datosCache.prefijo
            let n = 1
            let hostTotales
            let r
            let mascaraRedBinario = []
            let mascaraRedDecimal = []
            let pCache
            let s
            let primerHost
            let ultimoHost
            let broadcast

            while (true) {
                hostTotales = Math.pow(2, n) - 2
                if (hostTotales >= hostRequeridos) break
                n++
            }

            r = (32 - p) - n
            p = p + r
            pCache = p

            for (let octeto = 1; octeto <= 4; octeto++) {
                let octetoActual = ''

                for (let bit = 1; bit <= 8; bit++) {
                    if (pCache >= 1) {
                        octetoActual += '1';
                        pCache--
                    } else {
                        octetoActual += '0'
                    }
                }

                mascaraRedBinario.push(octetoActual);
                mascaraRedDecimal.push(parseInt(octetoActual, 2))

            }

            s = 256 - mascaraRedDecimal[mascaraRedDecimal.length - 1]

            primerHost = datosCache.direccionIp.split('.').map((octeto, indice) => {
                if (indice == 3) return ((parseInt(octeto) + 1).toString())
                return octeto
            }).join('.')

            ultimoHost = datosCache.direccionIp.split('.').map((octeto, indice) => {
                if (indice == 3) return (parseInt(octeto) + hostTotales).toString()
                return octeto
            }).join('.')

            broadcast = ultimoHost.split('.').map((octeto, indice) => {
                if (indice == 3) return (parseInt(octeto) + 1).toString()
                return octeto
            }).join('.')


            setDatosSubneteo(datosAnteriores => ([...datosAnteriores, {
                hosts: hostRequeridos,
                ipRed: datosCache.direccionIp + "/" + p,
                mascaraRedBinario: mascaraRedBinario.join("."),
                mascaraRedDecimal: mascaraRedDecimal.join('.'),
                primerHost: primerHost,
                ultimoHost: ultimoHost,
                broadcast: broadcast,

            }]))

            console.table(
                [

                    {
                        hosts: hostRequeridos,
                        ipRed: datosCache.direccionIp + "/" + p,
                        mascaraRedBinario: mascaraRedBinario.join("."),
                        mascaraRedDecimal: mascaraRedDecimal.join('.'),
                        primerHost: primerHost,
                        ultimoHost: ultimoHost,
                        broadcast: broadcast,
                    }
                ]
            )
            datosCache.direccionIp = datosCache.direccionIp.split('.').map((octeto, indice) => {
                if (indice == 3) return (parseInt(octeto) + s).toString()
                return octeto
            }).join('.')

            datosCache.prefijo = p
        }
    }

    const reiniciarDatos = () => {
        setDatosIniciales(
            {
                direccionIp: '',
                prefijo: '',
                numerosHostCalcular: []
            }
        )
        setDatosSubneteo([])
    }

    return (
        <div className="container mx-auto px-4 py-8 sm:px-8 lg:px-16 xl:px-20">

            {
                alerta !== '' ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{alerta}</span>
                </div> : null
            }
            <h1 className="text-3xl font-bold mb-8">Calculadora de subredes</h1>
            <div className="sm:flex">
                <div className="sm:w-1/2 sm:pr-4">
                    <FormularioDatosIniciales setDatosIniciales={setDatosIniciales} onCalcularSubneteo={calcularSubneteo} onReiniciarDatos={reiniciarDatos} datosIniciales={datosIniciales} />
                </div>
                <div className="sm:w-1/2 sm:pl-4">
                    <MostrarDatosIniciales datosIniciales={datosIniciales} />
                </div>
            </div>
            <TablaSubneteo data={datosSubneteo} />
        </div>

    )
}


export default App