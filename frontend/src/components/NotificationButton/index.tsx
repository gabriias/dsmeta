import axios from 'axios'
import './styles.css'
import icon from '../../assets/img/icon.svg'
import { BASE_URL } from "../../utils/request"
import { toast } from 'react-toastify'

type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response => {
        toast.info("SMS enviado com sucesso!")
    })
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="notify-button" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="aaa" />
        </div>

    )
}

export default NotificationButton