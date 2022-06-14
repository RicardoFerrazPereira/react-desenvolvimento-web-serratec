import Lista from "./ListaPai";
import ListaItem from "./ListaItem";

Lista.Item = ListaItem;

export default Lista;

// como era
/*
const Lista = ({children}) => {
    return <ul>{children}</ul>
}
export default Lista;
*/