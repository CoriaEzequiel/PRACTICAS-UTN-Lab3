import React from 'react'

const Table = ({netIncomes}) => {
    const totalIncome = netIncomes.reduce((total, item) => total + item.income, 0);
    const averageIncome = totalIncome / netIncomes.length;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map(item => (
                        <tr>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Promedio ingreso neto: {averageIncome}</p>
        </div>
    )
}

export default Table