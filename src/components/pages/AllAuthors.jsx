// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const { mode } = useContext(Context);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/authors",
          { withCredentials: true }
        );
        setAuthors(data.authors);
      } catch (err) {
        setError("Failed to fetch authors. Please try again later.");
      }
    };
    fetchAuthors();
  }, []);

  return (
    <article
      className={
        mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"
      }
    >
      <h2>ALL AUTHORS</h2>
      <div className="container">
        {error ? (
          <p className="error">{error}</p>
        ) : authors && authors.length > 0 ? (
          authors.map((element) => {
            return (
              <div className="card" key={element._id}>
                {element.avatar?.url ? (
                  <img src={element.avatar.url} alt="author_avatar" />
                ) : (
                  <div className="placeholder-avatar">No Image</div>
                )}
                <h3>{element.name}</h3>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />
        )}
      </div>
    </article>
  );
};

export default AllAuthors;
