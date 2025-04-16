import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from "./assets/ImageGallery/ImageGallery";
import SearchBar from "./assets/SearchBar/SearchBar";
import Loader from "./assets/Loader/Loader";
import LoadMoreBtn from "./assets/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./assets/ErrorMessage/ErrorMessage";
import ImageModal from "./assets/ImageModal/ImageModal";

const KEY = "qPFeK_Yb8bseog7rmNx9ZiEqmz3TMS6gci6wwcZRweY";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (searchQuery, newPage = 1, isLoadMore = false) => {
    try {
      isLoadMore ? setIsLoadingMore(true) : setIsLoading(true);
      setHasError(false);

      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchQuery,
          page: newPage,
          per_page: 16,
          client_id: KEY,
        },
      });

      if (response.data.results.length === 0) {
        toast.error("Nothing found!");
        return;
      }

      setImages(prevImages =>
        newPage === 1 ? response.data.results : [...prevImages, ...response.data.results]
      );
      setPage(newPage);
      setQuery(searchQuery);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setHasError(true);
      toast.error("Failed to get images!");
      console.error("Ошибка при загрузке изображений:", err);
    } finally {
      isLoadMore ? setIsLoadingMore(false) : setIsLoading(false);
    }
  };

  const addLoadMore = () => {
    fetchImages(query, page + 1, true);
  };

  
  const handleSearch = newQuery => {
    setImages([]);
    setPage(1);
    fetchImages(newQuery, 1);
  };

  function openModal() {
    setIsModalOpen(true)
    
  };

  function closeModal() {
    setIsModalOpen(false)
    
  };

  function handleClick (image) {
    setSelectedImage(image);
    setIsModalOpen(true);
    openModal();
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} disabled={isLoading} />

      {isLoading && <Loader load={true} />}
      {hasError && < ErrorMessage />}

      <ImageGallery images={images} onImageClick={handleClick} />

      {page < totalPages && images.length > 0 && (
        <LoadMoreBtn onClick={addLoadMore} loadMore={isLoadingMore} />
      )}

      <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} onClick={handleClick}/>
    </>
  );
};

export default App;