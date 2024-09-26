import './header.css';
import { Link } from 'react-router-dom'

function Header(){

    return(
            <header>
                <a href="/" className="logo"><img src="./src/assets/logo_white-sf.png" alt="" className='imgLogo'/></a>
                <a href="/lista" className="lista">Listar Usuario</a>
                <a href="/login" className="login">Logar-se</a>
                <a href="/usuario" className="usuario">Cadastre-se</a>
                <a href="/CadFuncionario" className="usuario">Cadastre-se Funcionario</a>
            </header>
    )

}

export default Header;

