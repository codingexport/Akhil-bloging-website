import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [intro, setIntro] = useState("");
  const [paraOneTitle, setParaOneTitle] = useState("");
  const [paraOneImage, setParaOneImage] = useState(null);
  const [paraOneDescription, setParaOneDescription] = useState("");
  const [paraTwoTitle, setParaTwoTitle] = useState("");
  const [paraTwoImage, setParaTwoImage] = useState(null);
  const [paraTwoDescription, setParaTwoDescription] = useState("");
  const [paraThreeTitle, setParaThreeTitle] = useState("");
  const [paraThreeImage, setParaThreeImage] = useState(null);
  const [paraThreeDescription, setParaThreeDescription] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [paraOneImagePreview, setParaOneImagePreview] = useState("");
  const [paraTwoImagePreview, setParaTwoImagePreview] = useState("");
  const [paraThreeImagePreview, setParaThreeImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImagePreview = (e, setPreview, setImage) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result);
        setImage(file);
      };
    } else {
      toast.error("Please upload a valid image file.");
    }
  };

  const handleBlog = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("intro", intro);
    formData.append("mainImage", mainImage);
    formData.append("category", category);
    formData.append("published", published);
    if (paraOneTitle) formData.append("paraOneTitle", paraOneTitle);
    if (paraOneDescription) formData.append("paraOneDescription", paraOneDescription);
    if (paraOneImage) formData.append("paraOneImage", paraOneImage);
    if (paraTwoTitle) formData.append("paraTwoTitle", paraTwoTitle);
    if (paraTwoDescription) formData.append("paraTwoDescription", paraTwoDescription);
    if (paraTwoImage) formData.append("paraTwoImage", paraTwoImage);
    if (paraThreeTitle) formData.append("paraThreeTitle", paraThreeTitle);
    if (paraThreeDescription) formData.append("paraThreeDescription", paraThreeDescription);
    if (paraThreeImage) formData.append("paraThreeImage", paraThreeImage);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/post",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setTitle("");
      setIntro("");
      setCategory("");
      setMainImage(null);
      setMainImagePreview("");
      setParaOneTitle("");
      setParaOneDescription("");
      setParaOneImage(null);
      setParaOneImagePreview("");
      setParaTwoTitle("");
      setParaTwoDescription("");
      setParaTwoImage(null);
      setParaTwoImagePreview("");
      setParaThreeTitle("");
      setParaThreeDescription("");
      setParaThreeImage(null);
      setParaThreeImagePreview("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to post the blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="create-blog">
      <h3>CREATE BLOG</h3>
      <div className="container">
        <form onSubmit={handleBlog}>
          <div className="category-box">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Blog Category</option>
              <option value="B Pharma Students">B Pharma Students</option>
              <option value="MBA Students">MBA Students</option>
              <option value="BBA Students">BBA Students</option>
              <option value="BCA Students">BCA Students</option>
              <option value="bgi">bgi </option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="BLOG MAIN TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>BLOG MAIN IMAGE</label>
            <img
              src={mainImagePreview || "/imgPL.webp"}
              alt="mainImg"
              className="mainImg"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImagePreview(e, setMainImagePreview, setMainImage)}
              style={{ border: "none" }}
              required
            />
          </div>
          <textarea
            rows="10"
            className="intro"
            placeholder="BLOG INTRO..... (Must contain at least 250 characters!)"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            required
            minLength={250}
          />
          {[1, 2, 3].map((num) => (
            <div className="sub-para" key={num}>
              <input
                type="text"
                placeholder={`Paragraph ${num} title`}
                value={
                  num === 1 ? paraOneTitle : num === 2 ? paraTwoTitle : paraThreeTitle
                }
                onChange={(e) => {
                  if (num === 1) setParaOneTitle(e.target.value);
                  if (num === 2) setParaTwoTitle(e.target.value);
                  if (num === 3) setParaThreeTitle(e.target.value);
                }}
              />
              <img
                src={
                  num === 1
                    ? paraOneImagePreview || "/imgPL.webp"
                    : num === 2
                    ? paraTwoImagePreview || "/imgPL.webp"
                    : paraThreeImagePreview || "/imgPL.webp"
                }
                alt={`subPara${num}Img`}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (num === 1) handleImagePreview(e, setParaOneImagePreview, setParaOneImage);
                  if (num === 2) handleImagePreview(e, setParaTwoImagePreview, setParaTwoImage);
                  if (num === 3) handleImagePreview(e, setParaThreeImagePreview, setParaThreeImage);
                }}
                style={{ border: "none" }}
              />
              <textarea
                rows="10"
                placeholder={`Blog Paragraph ${num} Description`}
                value={
                  num === 1
                    ? paraOneDescription
                    : num === 2
                    ? paraTwoDescription
                    : paraThreeDescription
                }
                onChange={(e) => {
                  if (num === 1) setParaOneDescription(e.target.value);
                  if (num === 2) setParaTwoDescription(e.target.value);
                  if (num === 3) setParaThreeDescription(e.target.value);
                }}
              />
            </div>
          ))}
          <div className="publish-box">
            <label>Wants to publish now?</label>
            <select
              value={published}
              onChange={(e) => setPublished(e.target.value === "true")}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button className="create-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Posting..." : "POST BLOG"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
