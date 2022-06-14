import Contador from '../Contador';
import Formulario from "../Formulario";
import Lista from "../Lista"
import Produto from '../Produto';
import ListagemProdutos from '../ListagemProdutos';

function Corpo() {
  // Array - lista de produtos
  const produtos = [
    {
      nome: "Xbox &#38; PS5",
      valor: 10000,
      imagem: "https://static.nagem.com.br/util/artefatos/produtos/m/n/812031600888847/525324.jpg"
    },
    {
      nome: "Batata doce",
      valor: 50,
      imagem: "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/iStock-496551718[1]-1000x1000.jpg"
    },
    {
      nome: "Bala halls",
      valor: 5,
      imagem: "https://www.drogariaminasbrasil.com.br/media/product/b97/bala-halls-extra-forte-bb7.jpg"
    }

  ];

  return (
    <div>
      <Contador />
      <Formulario />
      <Lista>
        <Lista.Item conteudo='Paraguai' />
        <Lista.Item conteudo='Uruguai' />
        <Lista.Item conteudo='Argentina' />
        <Lista.Item conteudo='Venezuela' />
      </Lista>

      <ListagemProdutos>
        {produtos.map(produtos => {
            return (
              <Produto
                nome={produtos.nome}
                valor={produtos.valor}
                imagem={produtos.imagem}
              />
            )
          })
        }
      </ListagemProdutos>
    </div>
  );
}

export default Corpo;