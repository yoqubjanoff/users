import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Modal from "../Modal";
import edit from "../../assets/icons/pencil.png";
import delet from "../../assets/icons/delet.png";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { data, loading, error } = useFetch(
    "https://6548a42bdd8ebcd4ab234d7e.mockapi.io/product"
  );

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-blue-500 mt-2">Price: ${item.price}</p>
                <div className="mt-5 w-full flex justify-between">
                  <button >
                    <img className="w-22 h-5" src={delet} alt="pencil" />
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
