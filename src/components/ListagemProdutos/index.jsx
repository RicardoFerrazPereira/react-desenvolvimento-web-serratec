import styled from 'styled-components';
//import Produto from '../Produto';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`    
/*
const ListagemProdutos = () => {
    return (
        <Container>
            <Produto
                nome="Xbox &#38; PS5"
                valor={10000}
                imagem="https://static.nagem.com.br/util/artefatos/produtos/m/n/812031600888847/525324.jpg"
            />

            <Produto
                nome="Batata doce"
                valor={50}
                imagem="https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/iStock-496551718[1]-1000x1000.jpg"
            />

            <Produto
                nome="Bala Halls"
                valor={3}
                imagem="https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/iStock-496551718[1]-1000x1000.jpg"
            />


        </Container>
    );    
};
*/

const ListagemProdutos = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );

};

export default ListagemProdutos;
