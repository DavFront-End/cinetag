
import Banner from "components/Banner/Banner";
import Titulo from "components/Titulo/Titulo";
import Card from "components/Card";
import styles from "./Favoritos.module.css"
import { useFavoritoContext } from "context/Favoritos";

const Favoritos = () => {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo><h1>Meus favoritos</h1></Titulo>
            <section className={styles.container}>
                 {favorito.map(favoritos => {
                    return <Card {...favoritos} key={favoritos.id} />
                })}
            </section>
               
        </>

    )
}

export default Favoritos