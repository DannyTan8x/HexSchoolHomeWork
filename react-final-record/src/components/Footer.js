export default function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center bottom-0 end-0 start-0">
        <div className="container p-4">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-twitter-x"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-success mb-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>個人作品集練習， 無商務用途。</p>
          </section>
          {/* Link */}
          <section className="d-none">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://9scodes.com/">
            9scodes.com
          </a>
        </div>
      </footer>
    </>
  );
}
