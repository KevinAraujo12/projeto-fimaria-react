import { useEffect, useState } from "react";
import api from "../../services/api";
// // https://api.themoviedb.org/3/movie/now_playing?api_key=52b56f08b71aa6b88d4cb893597fd4d1&language=pt-BR

export default function Home() {
    const [filmes, setFilmes] = useState();

    useEffect(()=> {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "52b56f08b71aa6b88d4cb893597fd4d1",
                    languagem: "pt-BR",
                    page: 1,
                }
            });

            console.log(response.data.results);
        }

        loadFilmes();
    }, []);

    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}