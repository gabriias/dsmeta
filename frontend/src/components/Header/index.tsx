import './styles.css'
import logo from '../../assets/img/logo.svg'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
                <h1>DS Meta</h1>
                <h3>Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig">@devsuperior</a> </h3>
            </div>
        </header>

    )
}

export default Header