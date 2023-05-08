import React from "react";

function ArticlePost({ blog }) {
  return (
    <>
      {/* <!-- Articles Post Start --> */}
      <article class="container">
        <div class="row">
          <div class="col-7 col-md-8">
            <div class="article-pic">
              <a href="#">
                <img
                  src="https://via.placeholder.com/20"
                  class="rounded-circle"
                  alt=""
                />
                <span>{blog.author}</span>
              </a>
            </div>
            <div class="article-desc">
              <a href="#">
                <h3>{blog.title}</h3>
              </a>

              <p>{blog.body.slice(0, 50)}</p>
            </div>
            <div class="article-footer">
              <span>
                {blog.date} · {blog.duration_to_read} read ·
              </span>
              <a href="#" class="xbadge rounded-pill">
                Birding
              </a>
              <a href="#" class="float-end">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  class="ld"
                >
                  <path
                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                    fill="#292929"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="col-5 col-md-4 article-img">
            <a href="#">
              <img
                src="https://miro.medium.com/fit/c/200/134/1*GAyvD3bIRca3EVotLMSUqQ.jpeg"
                alt=""
              />
            </a>
          </div>
        </div>
      </article>
      {/* <!-- Articles Post End --> */}
    </>
  );
}

export default ArticlePost;
