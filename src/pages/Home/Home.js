import styles from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import Loader from "../../components/Loader/Loader";


import PostDetail from "../../components/PostDetais/PostDetail";
const Home = () => {
    const [query, setQuery] = useState("");
    const {documents:posts, loading} = useFetchDocuments("posts");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            return navigate(`/meu-blog/search?q=${query}`);
        }
    }
    return (
        <div className={styles.home}>
            <h1>Veja as publicações mais recentes:</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input type="text" placeholder="Ou busque por tags..." onChange={(e) => setQuery(e.target.value)}/>
                <button className="btn btn-dark">Pesquisar</button>
            </form>
            <div>
                {loading && <Loader/>}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontradas publicações</p>
                        <Link to="/meu-blog/posts/create" className="btn">Criar publicação</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;