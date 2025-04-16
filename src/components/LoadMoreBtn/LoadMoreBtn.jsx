import { SyncLoader } from "react-spinners";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, LoadingMore }) => {
    return (
        <div className={s.loadContainer}>
            <button className={s.loadBtn} onClick={onClick} disabled={LoadingMore}>
                {LoadingMore ? <SyncLoader color="gray" size={20} /> : "Load more"}
           </button>
        </div>
    )
}

export default LoadMoreBtn;



