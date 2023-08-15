import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import './index.scss';

function Media(){

    const [N1,setN1]= useState(0);
    const [N2,setN2]= useState(0);
    const [N3,setN3]= useState(0);

    const [media,setMedia]= useState(0);
    const [situacao,setSituacao]=useState('---');

    function calc(){

        let calcmedia=(N1+N2+N3)/3;
        const resultadocalc=calcmedia;
        setMedia(resultadocalc);
        
        if (N1>10||N1<0||N2>10||N2<0||N3>10||N3<0){

            setSituacao('Notas inválidas');
        }

        else if(resultadocalc>10||resultadocalc<0){

            setSituacao('Notas inválidas');
        }

        else if(resultadocalc<=10&&resultadocalc>=5){

            setSituacao('Aprovado');
        }

        else if(resultadocalc<=4){

            setSituacao('Reprovado');
        }
    }

    

    return(

        <div className='pagina-media'>

            <Cabecalho/>

            <div className='container'>

                <div className='conteudo'>

                    <label>Nota 1</label>
                    <input type='number' value={N1} onChange={(e) => {
                        
                        setN1(Number(e.target.value));
                        }}></input>

                    <label>Nota 2</label>
                    <input type='number' value={N2} onChange={(e) => {setN2(Number(e.target.value))}}></input>

                    <label>Nota 3</label>
                    <input type='number' value={N3} onChange={(e) => { setN3(Number(e.target.value))}}></input>

                    <button onClick={() =>{

                        calc();
                        
                    }}>CALCULAR</button>

                    <div>

                        <div>Média: {media.toFixed(1)}</div>
                        <div>Situação: {situacao}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Media;