import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import NiceSelect from '../Header/NiceSelect';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function PrayerRequestForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully ✅");
      // Here you can send data to backend/API
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div
      className="space-extra2-top space-extra2-bottom"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/video_bg_1.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row flex-row-reverse justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="video-box1">
              <button
                className="play-btn style2 popup-video"
                onClick={() => setModalIsOpen(true)}
              >
                <i className="fa-sharp fa-solid fa-play" />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <form onSubmit={handleSubmit} className="contact-form style2">
                <h3 className="sec-title mb-30 text-capitalize">
                  Submit Your Prayer Request
                </h3>

                <div className="row">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                    <img src={process.env.PUBLIC_URL + "assets/img/icon/user.svg"} alt="" />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>

                  <div className="col-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Mail"
                    />
                    <img src={process.env.PUBLIC_URL + "assets/img/icon/mail.svg"} alt="" />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>

                  <div className="col-12 form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                    />
                    <img src={process.env.PUBLIC_URL + "assets/img/icon/phone.svg"} alt="" />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                  </div>

                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Your Message"
                    />
                    <img src={process.env.PUBLIC_URL + "assets/img/icon/chat.svg"} alt="" />
                    {errors.message && <p className="error-text">{errors.message}</p>}
                  </div>

                  <div className="form-btn col-12 mt-24">
                    <button type="submit" className="th-btn style3">
                      Send message
                      <img src={process.env.PUBLIC_URL + "assets/img/icon/plane.svg"} alt="" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Popup"
        className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        <button className="close-btn" onClick={() => setModalIsOpen(false)}>
          &times;
        </button>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/Qct0UiBMyaY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default PrayerRequestForm;
