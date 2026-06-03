import { useState } from "react";
import axios from "axios";

function CreatePost() {

  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("heading", heading);
    formData.append("details", details);

    try {

      const res = await axios.post(
        "http://localhost:4000/create-post",
        formData
      );

      console.log(res.data);

      alert("Post Created Successfully");

      setHeading("");
      setDetails("");
      setImage(null);

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <div className="flex justify-center items-center py-10 bg-gray-900">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[90%] md:w-[500px]"
      >

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create News Post
        </h1>

        {/* Image Input */}

        <div className="mb-5">

          <label className="block text-white mb-2">
            Upload Image
          </label>

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-white border border-gray-600 rounded-lg p-2"
            required
          />

        </div>

        {/* Heading Input */}

        <div className="mb-5">

          <label className="block text-white mb-2">
            Heading
          </label>

          <input
            type="text"
            placeholder="Enter heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
            required
          />

        </div>

        {/* Details Input */}

        <div className="mb-5">

          <label className="block text-white mb-2">
            Details
          </label>

          <textarea
            placeholder="Enter details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none h-32 resize-none"
            required
          />

        </div>

        {/* Button */}

        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold"
        >
          Create Post
        </button>

      </form>

    </div>
  );
}

export default CreatePost;