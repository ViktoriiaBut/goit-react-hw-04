import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const App =() => {
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setloadingMore] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [query, setQuery] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)

  const KEY = "qPFeK_Yb8bseog7rmNx9ZiEqmz3TMS6gci6wwcZRweY"

  return(
    <>
    <Toaster />
    <SearchBar />
    <ImageGallery />
    <ImageModal />
    </>
  )
}
export default App;
