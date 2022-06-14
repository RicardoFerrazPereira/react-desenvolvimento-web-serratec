import { useState } from "react";
import { Container } from "../../Styles";
import styled from "styled-components";


const InputWrapper = styled.div`
    width: 100%;
`;

// Declaração da função
const Formulario = () => {
    // Estado é parecido com get; set; porém sofre alterações e renderiza de novo
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    const alterarNome = (e) => {
        setNome(e.target.value);
    }

    // Retorno do código visual (pseudo-HTML, Jsx)
    return (
        <Container>
            <InputWrapper>
                <input
                    value={nome}
                    onChange={e => alterarNome(e)}
                    placeholder="Digite seu nome"
                />
                {nome}
            </InputWrapper>

            <InputWrapper>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                />
                {email}
            </InputWrapper>
        </Container >
    )
}

// Exportar para permitir importação em outros arquivos
export default Formulario;