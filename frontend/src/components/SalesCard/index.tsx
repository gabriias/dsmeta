import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
import NotificationButton from "../NotificationButton"

function SalesCard() {
    return (
        <div className="card-container">
            <h2>Vendas</h2>
            <div className="search">
                <div className="search-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="input-search"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="search-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
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
                        <tr>
                            <td className="show-in-desktop">#123</td>
                            <td className="show-in-tablet">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-in-desktop">10</td>
                            <td className="show-in-desktop">9</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-in-desktop">#123</td>
                            <td className="show-in-tablet">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-in-desktop">10</td>
                            <td className="show-in-desktop">9</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-in-desktop">#123</td>
                            <td className="show-in-tablet">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-in-desktop">10</td>
                            <td className="show-in-desktop">9</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard