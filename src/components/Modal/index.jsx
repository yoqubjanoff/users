import React from "react";

const Modal = ({ image, onClose }) => {
  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      onClick={onClose}
    >
      <div className="relative mx-auto my-6 max-w-10xl">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
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
