import { useParams } from "react-router-dom";

const PokemonDetail = () => {
    const params = useParams();
    console.log('params', params.name);
    return(
        <h1>{params.name}</h1>
        
    )
}

export default PokemonDetail;
