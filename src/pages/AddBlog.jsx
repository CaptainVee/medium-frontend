import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("John Doe");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setLoading(true);
    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((e) => {
      setLoading(false);
      console.log(e);
      navigate("/");
    });
  };

  return (
    <section className="container mt-9">
      <h3 className="text-center mb-3">Add a new blog</h3>
      <form className="row justify-content-center g-3" onSubmit={handleSubmit}>
        <div className="col-6">
          <div className="mb-3">
            <label className="form-label">Blog title:</label>
            <input
              type="text"
              className="form-control"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Blog body</label>
            <textarea
              className="form-control"
              required
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option>John Doe</option>
            <option>Jane Smith</option>
            <option>Mark Johnson</option>
          </select>

          <div className="col-12 mt-3">
            {loading ? (
              // If the isLoading state is true, display the "Loading..." message
              <div>Loading...</div>
            ) : (
              // If the isLoading state is false, display the "Add blog" button
              <button type="submit" className="btn btn-dark">
                Add blog
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddBlog;
