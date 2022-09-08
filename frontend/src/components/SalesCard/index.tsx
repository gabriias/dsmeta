import './styles.css'
import NotificationButton from "../NotificationButton"

function SalesCard() {
    return (
        <div className="card-container">
            <h2>Vendas</h2>
            <div className="search">
                <div className="search-container">
                    <input className="input-search" type="date" name="date-start" id="" />
                </div>
                <div className="search-container">
                    <input className="input-search" type="date" name="date-end" id="" />
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