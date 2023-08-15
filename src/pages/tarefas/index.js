import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';

function Tarefas(){

    const [tarefa, setTarefa] = useState(null);
    const [adicionar, setAdicionar] = useState([]);

    function valor (e) {

        setTarefa(e.target.value);
    }

    function ADD () {

        setAdicionar([...adicionar,tarefa]);

        setTarefa('');
    }

    function apertar(e){

        if(e.key==='Enter'){

            ADD();
        }
    }

    function apagar(){

        setAdicionar([]);
    }

    return(

        <div className='pagina-tarefas'>

            <Cabecalho/>

            <div className='container'>

                <div className='conteudo'>

                    <h1>Lista de tarefas</h1>

                    <div className='adicionar'>

                        <input type='text' value={tarefa} onChange={valor} onKeyUp={apertar}></input>
                    </div>

                    <div className='tarefas'>

                        <ul>
                            {adicionar.map(tarefa=> <li> {tarefa} </li>)}
                        </ul>
                    </div>

                    <button onClick={apagar}>APAGAR TAREFAS</button>
                </div>
            </div>
        </div>
    );
}

export default Tarefas;