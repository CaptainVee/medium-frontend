import { useState, useEffect } from "react";
import mediumImg from "../assets/mediumImg.png";
import Article from "../components/Article";
import ArticlePost from "../components/ArticlePost";
import Footer from "../components/Footer";

function Home() {
  const [blogs, setBlogs] = useState(null);

  const handleChangeName = (name) => {
    setBlogs(name);
  };

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  if (blogs === null) {
    return <div className="">Loading....</div>;
  }
  return (
    <main id="main">
      {/* <!-- Jumbotron Start --> */}
      <section class="container-fluid jumbotron">
        <div class="jt-right d-none d-lg-block">
          <img src={mediumImg} alt="" />
        </div>

        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 p-0">
            <div class="container jt-left">
              <h1>Stay curious.</h1>
              <p>
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <a
                onClick={() => {
                  handleChangeName("Twitter");
                }}
                href="#"
                class="btn btn-dark rounded-pill btn-lg"
              >
                Start reading
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Jumbotron End --> */}

      {/* <!-- Trends Start --> */}
      <section class="container-fluid trends">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-12 p-0">
              <div class="container trends-header">
                <h4>
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    class="ie y"
                  >
                    <path fill="#fff" d="M0 .8h28v28H0z"></path>
                    <g opacity="0.8" clip-path="url(#trending_svg__clip0)">
                      <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                      <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                      <path
                        d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                        stroke="#000"
                        stroke-linecap="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="trending_svg__clip0">
                        <path
                          fill="#fff"
                          transform="translate(4 4.8)"
                          d="M0 0h20v20H0z"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                  TRENDING ON Medium
                </h4>
              </div>
            </div>

            <div class="col-md-12 trend-posts my-4">
              <div class="container">
                <div class="row">
                  <Article />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trends End --> */}

      {/* <!-- Articles Start --> */}
      <section class="container-fluid articles">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 col-lg-8 order-2 order-lg-1">
              {blogs ? (
                blogs.map((blog) => <ArticlePost key={blog.id} blog={blog} />)
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </section>
      {/* <!-- Articles End --> */}
    </main>
  );
}

export default Home;
