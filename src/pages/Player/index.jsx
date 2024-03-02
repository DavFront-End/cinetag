import Banner from "components/Banner/Banner";
import Titulo from "components/Titulo/Titulo";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Player.module.css"
import NaoEncontrada from "pages/NaoEncontrada/NaoEncontrada";
import { useEffect, useState } from "react";

const Player = () => {
    const [video, setVideo] = useState();

    const parametro = useParams();
    const navegacao = useNavigate();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/DavFront-End/cinetag-api/videos?id=${parametro.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        }, [])
    })

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo><h1>Player</h1></Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen >
                </iframe>

                <div >
                <button
                className={styles.button} 
                onClick={() => navegacao(-1)}>
                    Voltar
                </button>
              </div>
            </section>

           
        </>
    )
}

export default Player;