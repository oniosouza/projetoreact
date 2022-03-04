function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome} />
            <h2>nome: {props.nome}</h2>
            <p>idade: {props.idade}</p>
            <p>profissao: {props.profissao}</p>   
        </div>
    )
}
export default Pessoa