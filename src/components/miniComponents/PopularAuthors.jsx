
   // eslint-disable-next-line no-unused-vars
   import axios from "axios";
   // eslint-disable-next-line no-unused-vars
   import React, { useEffect, useState } from "react";
   import { BeatLoader } from "react-spinners";

   const PopularAuthors = () => {
     const [authors, setAuthors] = useState([]);

     useEffect(() => {
       const fetchAuthors = async () => {
         try {
           const { data } = await axios.get(
             "http://localhost:4000/api/v1/authors",
             { withCredentials: true }
           );
           setAuthors(data.authors);
         } catch (error) {
           console.error("Error fetching authors:", error);
           setAuthors([]); // Ensure authors is at least an empty array
         }
       };
       fetchAuthors();
     }, []);

     return (
       <section className="popularAuthors">
         <h3>Popular Authors</h3>
         <div className="container">
           {authors && authors.length > 0 ? (
             authors.slice(0, 4).map((element) => {
               return (
                 <div className="card" key={element._id}>
                   <img
                     src={element.avatar?.url || "default-avatar-url.jpg"} // Fallback URL
                     alt={element.name || "author"}
                   />
                   <p>{element.name || "Unknown Author"}</p>
                   <p>{element.role || "Role not specified"}</p>
                 </div>
               );
             })
           ) : (
             <BeatLoader color="gray" size={30} />
           )}
         </div>
       </section>
     );
   };

   export default PopularAuthors;
   

