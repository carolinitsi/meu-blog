import {Link} from "react-router-dom";
import styles from "./About.module.css"

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Sobre</h1>
            <p>Seja bem-vindo(a) ao Meu Blog, este projeto foi desenvolvido com <strong>React</strong> no front-end e <strong>Firebase</strong> no back-end, afim de estudar essas tecnologias e suas comunicações.</p>
            <p>Aqui você pode criar sua conta, fazer login, criar uma publicação, editar e excluir.</p>
            <p>Comece criando uma publicação!</p>
            <Link to="/posts/create" className="btn">Publicar</Link>
        </div>
    )
}

export default About;