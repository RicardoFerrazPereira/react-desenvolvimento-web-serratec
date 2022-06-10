import { useState } from "react";
import './styles.css';

const Contador = () => {
    const [numero, setNumero] = useState(1);

    const alterarValor = () => {
        if (numero > 10) {
            alert("Não é possível");
            return;
        }

        setNumero(numero + 1)
    }

    return (
        <div className="contador-wrapper">
            <h3>Contador</h3>
            {/* PROP: Parametros dos componentes React */}
            <Texto valor={numero} />
            <button onClick={() => alterarValor()}>Aumentar</button>
        </div>
    )
}

const Texto = ({valor}) => {
    return (<p>{valor}</p>)
}

export default Contador;