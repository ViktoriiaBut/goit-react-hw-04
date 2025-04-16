import { SyncLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = ({load}) => {
    return (
        load && <div className={s.loader}>
         <SyncLoader color="blue" loading={load} size={30} />
        </div>
    )
}

export default Loader;
