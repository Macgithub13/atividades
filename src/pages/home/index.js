import './index.scss';
import {Link} from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

function Home(){

    return(

        <div className='pagina-home'>

            <Cabecalho/>
            
            <div className='conteudo'>

                <h1>Home Page</h1>

                <nav className='menu'>

                    <Link to='/contato' className='link'>Página contatos </Link>
                    <Link to='/tarefa' className='link'>Página listar tarefas</Link>
                    <Link to='/media' className='link'>Página de calcular média</Link>
                    <Link to='/aluno' className='link'>Página aluno</Link>
                </nav>
            </div>
            
        </div>
    );
}

export default Home;