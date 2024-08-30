import styles from "./Post.module.css";

//hooks
import {useParams} from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

import PostDetail from "../../components/PostDetais/PostDetail";
const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocument("posts", id);

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando publicação...</p>}
            {post && (
                 <PostDetail post={post}/>
                )}
        </div>
    )
}

export default Post;