import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CompAluno from '../../components/aluno';
import { useState } from 'react';

export default function Aluno(){

    const[nome,setNome]=useState('');
    const[curso,setCurso]=useState('');
    const[Nchamada,setNchamada]=useState(Number());
    const[idade,setIdade]=useState(Number());
    const[ano,setAno]=useState(Number());
    const[resultado,setResultado]=useState('');
    const[alunos,setAlunos]=useState([]);

    function addAluno(){

        let aluno={

            nomeAluno:nome,
            cursoAluno:curso,
            idadeAluno:idade,
            anoAluno:ano,
            resultadoAluno:resultado
        }

        setAlunos(...[alunos,aluno]);
        console.log(alunos);
    }

    return(

        <div className='aluno-page'>

            <Cabecalho/>
           
           <div className='add-aluno'>

                <div>
                    <label>Nome</label>
                    <input type='text' value={nome} onChange={(e) => {setNome(e.target.value)}}/>
                </div>
                
                <div>
                    <label>Número de chamada</label>
                    <input type='number' value={Nchamada} onChange={(e) => {setNchamada(e.target.value)}}/>
                </div>
                
                <div>
                    <label>Idade</label>
                    <input type='number' value={idade} onChange={(e) => {setIdade(e.target.value)}}/>
                </div>
                
                <div>
                    <label>Curso</label>
                    <input type='text' value={curso} onChange={(e) => {setCurso(e.target.value)}}/>
                </div>
                
                <div>
                    <label>Ano</label>
                    <input type='number' value={ano} onChange={(e) => {setAno(e.target.value)}}/>
                </div>
                
                <div>
                    <label to='resultado'>Resultado</label>
                    <select name='resultado' onChange={(e) => setResultado(e.target.value)}>

                        <option></option>
                        <option value='Cursando'>Cursando</option>
                        <option value='Desistente'>Desistente</option>
                        <option value='Aprovado'>Aprovado</option>
                        <option value='Reprovado'>Reprovado</option>
                    </select>
                </div>
                
                <button onClick={addAluno}>Adicionar</button>
           </div>

           
           <table className='alunos'>

                <thead>

                    <tr>
                        <th>Nome</th>
                        <th></th>
                    </tr>
                </thead>
           </table>
            
        </div>
    );
}