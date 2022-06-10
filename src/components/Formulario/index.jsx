import { useState } from "react";

const Formulario = () => {
    const [nome, setNome] = useState();

    const alternarNome = (e) => {
        debugger;
        setNome(e.target.value);
    }
    return (
    <>
        <input
        value={nome}
        onChange={e => alternarNome(e)}
        placeholder="Digite seu nome" />
        {nome}
    </>    
    )
}

export default Formulario;