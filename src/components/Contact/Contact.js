import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
    budget: "",
    inspirationPhotos: [],
    dimensions: "",
    timeline: "",
    materials: "",
    finish: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    console.log("File input changed:", e.target.files);
    const files = Array.from(e.target.files); // Convert FileList to an array

    // Use FileReader to read each file and generate data URLs for image previews
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e);
          reader.readAsDataURL(file);
        });
      })
    )
      .then((imagePreviews) => {
        setFormData({
          ...formData,
          inspirationPhotos: [...formData.inspirationPhotos, ...imagePreviews],
        });
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };

  const handleDeleteImage = (index) => {
    const updatedInspirationPhotos = [...formData.inspirationPhotos];
    updatedInspirationPhotos.splice(index, 1);
    setFormData({ ...formData, inspirationPhotos: updatedInspirationPhotos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k4oou44",
        "template_l5n28ch",
        formData,
        "vnAgrBSuR4PCc1KnY"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          projectDescription: "",
          budget: "",
          inspirationPhotos: [],
          dimensions: "",
          timeline: "",
          materials: "",
          finish: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  useEffect(() => {
    const pagePath = window.location.pathname;
    const timeMenu = document.querySelector('.time-menu');
    const navMenu = document.querySelector('.nav-logo p');
  
    // Add the custom class if on the specific page
    if (pagePath === "/contact" && timeMenu && navMenu) {
      timeMenu.classList.add('custom-white-text');
      navMenu.classList.add('custom-white-text');
    } else {
      // Remove the custom class if not on the specific page
      timeMenu.classList.remove('custom-white-text');
      navMenu.classList.remove('custom-white-text');
    }
  
    // Cleanup function to remove the custom class when the component is unmounted
    return () => {
      if (timeMenu) {
        timeMenu.classList.remove('custom-white-text');
        navMenu.classList.remove('custom-white-text');
      }
    };
  }, []);

  return (
    <div className="contact-container space-mono-regular">
      <div className="contact-note">
        <div className="contact-info text-center text-uppercase">
          Request a quote
        </div>
        <div className="px-4 py-4">
          For all inquiries, please contact{" "}
          <a href="mailto:shoprhw@gmail.com">shoprhw@gmail.com</a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container px-4 pb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name:"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email:"
              required
            />
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Project Details (include Dimensions + Timeline):"
              required
            ></textarea>

            {/* <input
            type="text"
            name="dimensions"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="Dimensions:"
          /> */}

            {/* <label htmlFor="timelineLabel">Timeline:</label>
          <input
            type="date"
            id="timelineLabel"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          /> */}

            <select
              name="materials"
              value={formData.materials}
              onChange={handleChange}
            >
              <option value="">Material:</option>
              <option value="Oak">Oak</option>
              <option value="Maple">Maple</option>
              <option value="Ash">Ash</option>
              <option value="Walnut">Walnut</option>
            </select>

            <select
              name="finish"
              value={formData.finish}
              onChange={handleChange}
            >
              <option value="">Finish:</option>
              <option value="Clear">Clear</option>
              <option value="Light">Light</option>
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="Custom">Custom</option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Budget</option>
              <option value="1k">$1,000 - $3,000</option>
              <option value="4k">$4,000 - $6,000</option>
              <option value="7k">$7,000 - $9,000</option>
              <option value="10k">$10,000+</option>
            </select>

            {/* <div className="budget-text">
            Your budget helps us recommend suitable materials and design
            options within your desired investment range.
          </div> */}

            <label htmlFor="inspiration">Inspiration Photos +</label>
            <input
              type="file"
              id="inspiration"
              name="inspirationPhotos"
              accept="image/*"
              multiple // Allow multiple file selection
              onChange={handleFileInputChange} // Add an event handler to handle file input changes
            />
            <div className="image-previews">
              {formData.inspirationPhotos.map((imagePreview, index) => (
                <div key={index} className="image-preview-container">
                  <img
                    className="image-preview"
                    src={imagePreview}
                    alt={`Preview ${index + 1}`}
                  />
                  <button
                    className="delete-image-btn"
                    onClick={() => handleDeleteImage(index)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-container">
            <button className="send-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
