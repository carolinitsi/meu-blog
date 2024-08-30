import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css"

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import {useQuery} from "../../hooks/useQuery";

import PostDetail from "../../components/PostDetais/PostDetail";

const Search = () => {

    const query = useQuery();
    const search = query.get("q");

    const {documents:posts} = useFetchDocuments("posts", search)
    console.log(posts,"posts")
    return (
        <div className={styles.search_container}>
            <h1>Resultados encontrados para: {search}</h1>
            {posts && posts.lenght === 0 && (
                <>
                    <p>Não foram encontrados resultados para sua busca...</p>
                    <Link to="/meu-blog" className="btn btn-dark">Voltar</Link>
                </>
            )}
            {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
        </div>
    )
};

export default Search;