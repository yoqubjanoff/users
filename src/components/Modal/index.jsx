import React from "react";
import closeIcon from '../../assets/icons/close.gif'


const Modal = ({ image, onClose }) => {
  
  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" onClick={onClose}
    >
      <div className="relative z-15 mx-auto my-6 max-w-10xl">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
                <img src={closeIcon} alt="" className="closeIcon " />
            </button>
          </div>
          <div className="relative flex-auto p-6">
            <img src={image} alt="Modal Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
