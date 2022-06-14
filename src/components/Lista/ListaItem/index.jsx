//import styled from "styled-components";
import { ItemEstilizado } from "./Styles";

const ListaItem = ({conteudo}) => {
    return <ItemEstilizado>{conteudo}</ItemEstilizado>
}
export default ListaItem;

// como era
/*
const ListaItem = ({conteudo}) => {
    return <li>{conteudo}</li>
}
export default ListaItem;
*/