import ArticlePost from "../components/ArticlePost";
import Footer from "../components/Footer";

function BlogDetail() {
  return (
    <section className="container-fluid articles mt-2">
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-8 order-2 order-lg-1 mt-5">
            <h1>Blog details</h1>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
              <img
                src="https://miro.medium.com/fit/c/200/134/1*GAyvD3bIRca3EVotLMSUqQ.jpeg"
                class="card-img-bottom"
                alt="..."
              />
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ex, enim ipsam ullam qui esse dicta exercitationem
                nemo earum debitis veritatis nisi beatae quis officiis ratione
                omnis libero hic similique numquam reiciendis!
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
