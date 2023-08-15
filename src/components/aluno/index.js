import './index.scss';

export default function Inf(props){

    return(
    
        <div className='comp-aluno'>

            <h1>{props.nome}</h1>
            <h2> <b>Curso:</b> {props.curso}</h2> 
            <p> <b>Idade:</b> {props.idade}</p>
            <p> <b>Ano:</b> {props.ano}</p>
            <p> <b>Resultado Final:</b> {props.resultado}</p>
        </div>
    );
}