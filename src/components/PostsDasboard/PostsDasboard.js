import React, {useEffect, useState} from "react";
import styles from "./PostsDasboard.module.css";
import { Link } from "react-router-dom";

//hooks
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

const PostsDasboard = ({post}) => {

    const [showModalDelete, setShowModalDelete] = useState(false);

    const modalConfirmaDelete = () => {
        setShowModalDelete(true); 
    }

    return (
        <div className={styles.post_dashboard}>
            <img src={post.image} alt={post.title} />
            <div className={styles.post_infos}>
            <h2>{post.title}</h2>
                <p className={styles.createdby}>{post.createdBy}</p>
                <p className={styles.body}>{post.body}</p>
                <div className={styles.tags}>
                {post && post.tagsArray
                    .map((tag) => (
                        <p key={tag}>
                            <span>#</span>
                            {tag}
                        </p>
                    ))
                }
                </div>
                <div className={styles.buttons}>
                    <Link to={`/meu-blog/posts/${post.id}`} className="btn btn-outline">Ver</Link>
                    <Link to={`/meu-blog/posts/edit/${post.id}`} className="btn btn-outline">Editar</Link>
                    <button onClick={() => modalConfirmaDelete()} className="btn btn-outline btn-danger">Excluir</button>
                </div>
            </div>
            {showModalDelete && <ConfirmDelete showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} post={post}/>}
        </div>
    )
}

export default PostsDasboard;