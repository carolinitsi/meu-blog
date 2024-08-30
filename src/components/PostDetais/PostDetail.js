import React from "react";
import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({post}) => {
    return (
        <div className={styles.post_detail}>
            <h2>{post.title}</h2>
            <p className={styles.createdby}>{post.createdBy}</p>
            <p>{post.body}</p>

            <img src={post.image} alt={post.title} />
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
            <Link to={`/meu-blog/posts/${post.id}`} className="btn btn-outline">Ler</Link>
        </div>
    )
}

export default PostDetail;