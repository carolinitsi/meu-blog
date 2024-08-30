import styles from "./Dashboard.module.css";
import {Link} from "react-router-dom";

//hooks
import {useAuthValue} from "../../context/AuthContext";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";

import PostsDasboard from "../../components/PostsDasboard/PostsDasboard";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
    const {user} = useAuthValue();
    const id = user.uid;

    //post do user
    const {documents: posts, loading} = useFetchDocuments("posts",null, id);

    return (
        <div className={styles.dasboard}>
            <h2>Gerencie suas publicações:</h2>
            {posts && posts.length === 0 ? (
                <div className={styles.noposts}>
                    <p>Não foram encontradas publicações</p>
                    <Link to="/posts/create" className="btn">Criar uma publicação</Link>
                </div>
            ) : (
                <div>
                    {posts && posts.map((post) => (
                    <PostsDasboard key={post.id} post={post}/>
                    ))}

                </div>
            )}
            {loading &&  <Loader/>}
        </div>
    )
}

export default Dashboard;