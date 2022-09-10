import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'
import NotificationButton from "../NotificationButton"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../utils/request"
import { Sale } from "../../models/sale"

function SalesCard() {

    const start = new Date(new Date().setDate(new Date().getDate() - 365))
    const end = new Date()

    const [startDate, setStartDate] = useState(start)
    const [endDate, setEndDate] = useState(end)

    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {

        const sDate = startDate.toISOString().slice(0, 10);
        const eDate = endDate.toISOString().slice(0, 10);

        console.log(sDate);
        console.log(eDate);

        axios.get(`${BASE_URL}/sales?minDate=${sDate}&maxDate=${eDate}`)
            .then(response => {
                setSales(response.data.content)
            })
    }, [startDate, endDate])

    return (
        <div className="card-container">
            <h2>Vendas</h2>
            <div className="search">
                <div className="search-container">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        className="input-search"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="search-container">
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date) => setEndDate(date)}
                        className="input-search"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div className="sales">
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show-in-desktop">ID</th>
                            <th className="show-in-tablet">Data</th>
                            <th>Vendedor</th>
                            <th className="show-in-desktop">Visitas</th>
                            <th className="show-in-desktop">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show-in-desktop">{sale.id}</td>
                                    <td className="show-in-tablet">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show-in-desktop">{sale.visited}</td>
                                    <td className="show-in-desktop">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div>
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard