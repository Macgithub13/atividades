import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho(){

    const navig=useNavigate();
    return(
        
        <header className='cabecalho'>

            <button onClick={ () => {

                navig('/');
            }}>Voltar para home</button>
            <h1>Atividades</h1>
            <img src='/assets/images/logo-react-icon.png' alt=''/>

        </header>
    );
}