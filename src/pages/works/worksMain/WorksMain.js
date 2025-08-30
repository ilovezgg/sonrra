import React, { useState } from 'react';
import z from './WorksMain.module.css';

const WorksMain = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    { id: 'picOne', className: z.picOne, title: 'Работа 1' },
    { id: 'picTwo', className: z.picTwo, title: 'Работа 2' },
    { id: 'picThree', className: z.picThree, title: 'Работа 3' },
    { id: 'picFourth', className: z.picFourth, title: 'Работа 4' },
    { id: 'photoOne', className: z.photoOne, title: 'Работа 5' },
    { id: 'photoTwo', className: z.photoTwo, title: 'Работа 6' },
    { id: 'photoThree', className: z.photoThree, title: 'Работа 7' },
    { id: 'photoOneTwo', className: z.photoOneTwo, title: 'Работа 8' },
  ];

   const openModal = (img) => {
    setSelectedImage(img);
    setIsAnimating(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsAnimating(false);
    }, 300); 
  }

  return (
    <div className={z.main}>
       <div className={z.worksContainer}>
        {images.slice(0, 4).map((img) => (
          <div 
            key={img.id}
            className={`${img.className} ${z.imageItem}`}
            onClick={() => openModal(img)}
          />
        ))}
      </div>
      
      <div className={z.worksContainerTwo}>
        {images.slice(4, 8).map((img) => (
          <div 
            key={img.id}
            className={`${img.className} ${z.imageItem}`}
            onClick={() => openModal(img)}
          />
        ))}
      </div>
       {isModalOpen && (
        <div 
          className={`${z.modalOverlay} ${isAnimating ? z.fadeIn : z.fadeOut}`}
          onClick={closeModal}
        >
          <div 
            className={`${z.modalContent} ${isAnimating ? z.zoomIn : z.zoomOut}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${z[selectedImage?.id]} ${z.fullSizeImage}`} />
            <button className={z.closeButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksMain;