import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import styles from "./ConfirmDelete.module.css";
import Loader from "../../components/Loader/Loader";
const ConfirmDelete = ({post,showModalDelete, setShowModalDelete}) => {
    
    const {deleteDocument} = useDeleteDocument("posts", null, post.id);

    if (showModalDelete === true) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no"; 
    } 

    const cancelShowModalDelete = () => {
        setShowModalDelete(false);
        document.documentElement.style.overflow = "auto";
        document.body.scroll = "yes"; 
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <p>Tem certeza que deseja excluir essa publicação?</p>
                <div>
                    <button className="btn btn-outline" onClick={() => cancelShowModalDelete()}>Cancelar</button>
                    <button className="btn btn-outline btn-danger" onClick={() => deleteDocument(post.id)}>Excluir</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;