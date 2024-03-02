
import { useFavoritoContext } from "context/Favoritos"
import styles from "./Card.module.css"
import iconeFavoritar from "./favoritar.png"
import iconeDesfavoritar from "./desfavoritar.png"
import { Link } from "react-router-dom"

const Card = ({ id, capa, titulo }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                style={{ cursor: 'pointer' }}
                alt="Favoritar Filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, capa, titulo })
                }}
            />
        </div>
    )
}

export default Card;