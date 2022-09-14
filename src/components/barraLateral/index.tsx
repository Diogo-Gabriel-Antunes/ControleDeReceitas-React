
import { Link } from 'react-router-dom';
import './barraLateral.css';


const BarraLateral = () => {
  return (
    <div className='sidebar'>
      <div className='menu'>
        
      </div>
      <h1 className='logo'>Controle de receita</h1>
      <div className='menu_opcoes'>
        <div>
          <Link to="#">
            <i className='bx bx-user'></i>
            <span>Usuarios</span>
          </Link>
        </div>
        <div>
          <Link to="/receitas">
            <i className='bx bx-money'></i>
            <span>Receitas</span>
          </Link>
        </div>
        <div>
          <Link to="/despesas">
            <i className='bx bx-wallet-alt' ></i>
            <span>Despesas</span>
          </Link>
        </div>
        <div>
          <Link to="/resumo">
            <i className='bx bx-receipt' ></i>
            <span>Resumo</span>
          </Link>
        </div>
        <div>
          <Link to="/">
            <i className='bx bx-comment-detail'></i>
            <span>Formulario</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BarraLateral