import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Modal from "../Modal";
import edit from "../../assets/icons/pencil.png";
import delet from "../../assets/icons/delet.png";
import { API_URL } from "../../services/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useFetch hookdan olingan o'zgaruvchilarni qo'shish
  const { data: fetchDatabi, loading: fetchLoading, error: fetchError, fetchData } = useFetch(API_URL);

  useEffect(() => {
    setData(fetchDatabi);
    setLoading(fetchLoading);
    setError(fetchError);
  }, [fetchDatabi, fetchLoading, fetchError]);

  //! OPEN AND CLOSE MODALL FUNCTION
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  //! DELETE FUNCTION 
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Serverdan muvaffaqiyatli o'chirildi");
          fetchData()
        } else {
          toast.error(`An error occurred ${id}`);
        }
      })
      .catch((error) => {
        toast.error("An error occurred",error)
      });
  };

  return (
    <section className="w-full pt-10 pb-3">
      <div className="w-full max-w-[1320px] mx-auto px-1 py-1">
        <ul className="w-full flex flex-column justify-between flex-wrap">
          {data?.map((item, id) => (
            <li key={id} className="w-full max-w-[310px]  mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  onClick={() => openModal(item?.avatar)}
                  src={item?.avatar}
                  alt={item.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer"
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-blue-500 mt-2">Price: ${item.price}</p>
                <div className="mt-5 w-full flex justify-between">
                  <button onClick={() => handleDelete(item.id)}>
                    <img className="w-22 h-5" src={delet} alt="delet img" />
                  </button>
                  <button>
                    <img className="w-22 h-5" src={edit} alt="pencil" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default Hero;
