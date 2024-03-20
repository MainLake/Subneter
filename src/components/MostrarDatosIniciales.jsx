const MostrarDatosIniciales = ({ datosIniciales }) => {



    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Datos Iniciales</h2>
            <div className="border border-gray-300 rounded-md p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <span className="text-lg font-semibold">Dirección IP:</span>
                        <p className="text-gray-700 ml-2">{datosIniciales.direccionIp}</p>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="text-lg font-semibold">Prefijo:</span>
                        <p className="text-gray-700 ml-2">{ isNaN(datosIniciales.prefijo) ? 0 : datosIniciales.prefijo}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Número de hosts a subnetear:
                    </h3>
                    <ul className="list-disc list-inside">
                        {datosIniciales.numerosHostCalcular.map(dato => {
                            return (
                                <li key={dato * Math.random()} className="text-gray-700">{dato}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MostrarDatosIniciales