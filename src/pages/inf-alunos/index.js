import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CompAluno from '../../components/aluno';
import { useState } from 'react';

export default function Aluno(){

    const[nome,setNome]=useState('');
    const[curso,setCurso]=useState('');
    const[Nchamada,setNchamada]=useState('');
    const[idade,setIdade]=useState('');
    const[ano,setAno]=useState('');
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
           
           <div className='add-aluno-container'>

                <div className='add-aluno'>
                    <div>
                        <div>
                            <label>Nome</label>
                            <input type='text' placeholder='Digite nome do aluno ' value={nome} onChange={(e) => {setNome(e.target.value)}} style={{width:"250px"}}/>
                        </div>

                        <div>
                            <label to='curso'>Curso</label>
                            <select onChange={(e) => {setCurso(e.target.value)}} style={{width:"150px"}}>

                                <option>Administração</option>    
                                <option>Comunicação Visual</option>
                                <option>Elétro Mecânica</option>
                                <option>Elétro Técnica</option>
                                <option>Informática</option>
                                <option>Secretariado</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Idade</label>
                            <input type='number' value={idade} onChange={(e) => {setIdade(e.target.value)}}/>                   
                        </div>

                        <div>
                            <label>Número de chamada</label>
                            <input type='number' value={Nchamada} onChange={(e) => {setNchamada(e.target.value)}}/>
                        </div>
                    </div>
                    
                    <div>
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
                    </div>
                </div>

                <button onClick={addAluno}>Adicionar</button>
           </div>

           
           <table className='alunos'>

                
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Chamada</th>
                        <th>Idade</th>
                        <th>Ano</th>
                        <th>Resultado</th>
                    </tr>
                </thead>

                <tbody>
                    {alunos.map(item => 
                    
                    <tr>

                        <td>{item.nomeAluno}</td>
                    </tr>)}
                    
                </tbody>
           </table>
            
        </div>
    );
}