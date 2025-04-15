import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSubmit, disabled }) => {
    const [query, setQuery] = useState("")
    function handlChange(e) {
        setQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const trQuery = query.trim()
        if (trQuery === "") {
            toast.error("Waiting your query")
            return
        }

        onSubmit(trQuery)
        setQuery("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
          <div className={s.searchContainer}>
            <div className={s.searcWrapper}>
            <input
              className={`${s.searchInput} ${disabled ? s.disabledInput : ""}`}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Enter your query"
              value={query}
              disabled={disabled}
              onChange={handlChange}
            />
            <button
              className={`${s.searchBtn} ${disabled ? s.disabledBtn : ""}`}
              type="submit"
              disabled={disabled}
            >
              <IoSearch />
            </button>
            </div>
          </div>
        </form>
      );
    };
    
    export default SearchBar;