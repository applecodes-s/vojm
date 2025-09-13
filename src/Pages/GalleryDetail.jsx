
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import galleryData from "../Components/data/galleryData";
import Modal from "../Components/Gallery/Modal";

function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const gallery = galleryData.find((g) => g.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  if (!gallery) {
    return (
      <div className="container py-10 text-center">
        <h2>Gallery not found</h2>
        <div className="mt-4">
          <Link to="/gallery" className="th-btn">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const openModal = (img, e) => {
    if (e) e.preventDefault();
    setModalImage(process.env.PUBLIC_URL + img);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container py-8">
          {/* Back button */}
      <div className="col-auto d-none d-xl-block mb-4">
        <div className="header-button">
          <Link to="/gallery" className="th-btn style3 th-icon">
            Back
          </Link>
        </div>
      </div>




      <h2 className="sec-title text-center mb-6">{gallery.title}</h2>
      <div className="row gy-4 gx-4">
  {gallery.images.map((img, idx) => (
    <div className="col-6 col-md-4 col-lg-3" key={idx}>
      <div className="gallery-box style5">
        <div className="gallery-img global-img">
          <img
            src={process.env.PUBLIC_URL + img}
            alt={`${gallery.title} ${idx + 1}`}
            className="img-fluid"
          />
          <a
            href={process.env.PUBLIC_URL + img}
            onClick={(e) => openModal(img, e)}
            className="icon-btn popup-image"
          >
            <i className="fal fa-magnifying-glass-plus" />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>


      <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
    </div>
  );
}

export default GalleryDetail;
