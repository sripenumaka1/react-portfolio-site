import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, delay = 0 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        className={styles.gallery}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={styles.galleryItem}
            onClick={() => setSelectedImage(image)}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
          >
            <img src={image.src} alt={image.alt || `Gallery image ${index + 1}`} />
            {image.caption && <p className={styles.caption}>{image.caption}</p>}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
            >
              <FaTimes />
            </motion.button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt || 'Selected image'}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;

