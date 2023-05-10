import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

function BlogDetail() {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:3001/blogs/${id}/`);
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch(`http://localhost:3001/blogs/${id}/`, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  };

  return (
    <section className="container-fluid articles mt-9">
      <div className="container">
        {loading && <h3>Loading...</h3>}
        <h1>{error && error}</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-8 order-2 order-lg-1 mt-5">
            <h1>Blog details {id}</h1>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{blog.title}</h5>

                <p className="card-text">
                  <small className="text-body-secondary">
                    {blog.date} · {blog.duration_to_read} read ·
                  </small>
                </p>
              </div>
              <img
                src="https://miro.medium.com/fit/c/200/134/1*GAyvD3bIRca3EVotLMSUqQ.jpeg"
                className="card-img-bottom"
                alt="..."
              />
              <p className="card-text">{blog.body}</p>
            </div>
          </div>
          <div className="col-12 mt-3">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete blog
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
