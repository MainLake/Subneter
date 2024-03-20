import { useState } from "react";

const TablaSubneteo = ({ data }) => {

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">N. Subred</th>
                        <th className="px-4 py-2">N. Hosts</th>
                        <th className="px-4 py-2">Ip de red</th>
                        <th className="px-4 py-2">Máscara de red decimal</th>
                        <th className="px-4 py-2">Máscara de red binario</th>
                        <th className="px-4 py-2">Primer host</th>
                        <th className="px-4 py-2">Último host</th>
                        <th className="px-4 py-2">Broadcast</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((red, index) => {
                        return (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{red.hosts}</td>
                                <td className="border px-4 py-2">{red.ipRed}</td>
                                <td className="border px-4 py-2">{red.mascaraRedDecimal}</td>
                                <td className="border px-4 py-2">{red.mascaraRedBinario}</td>
                                <td className="border px-4 py-2">{red.primerHost}</td>
                                <td className="border px-4 py-2">{red.ultimoHost}</td>
                                <td className="border px-4 py-2">{red.broadcast}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>


    )
}

export default TablaSubneteo;