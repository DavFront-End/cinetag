import { useNavigate } from "react-router-dom"
import error from "./error-404.png"
import styles from "./NaoEncontrada.module.css"

const NaoEncontrada = () => {
    const navegacao = useNavigate();
    return (
        <>
            <section>
                <div>
                    <h1>Ops!</h1>
                    <p>O contéudo dessa página não foi encontrado :/</p>
                    <img src={error} alt="imagem de erro 404" />
                </div>


                <button
                    className={styles.button}
                    onClick={() => navegacao(-1)}>
                    Voltar
                </button>
            </section>
        </>
    )
}

export default NaoEncontrada;