import React from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div id="Home">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ps-lg-5 px-3 pe-lg-0 py-lg-3 shadow-sm fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div id="logo">
              <span>D</span>
              <span>s</span>
              <span>h</span>
              <span>o</span>
              <span>l</span>
              <span>l</span>
              <span>y</span>
              <span>b</span>
              <span>o</span>
              <span>y</span>
              <span>c</span>
              <span>o</span>
              <span>d</span>
              <span>e</span>
              <span>r</span>
            </div>
          </a>
          <div className="d-flex gap-4 px-2 mx-lg-5 social shadow rounded">
            <Link
              target="_blank"
              to={"https://github.com/Oluwasola1993"}
              className="text-black fs-4"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </Link>
            <Link target="_blank" to={""} className="text-black fs-4">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </Link>
            <Link target="_blank" to={""} className="text-black fs-4">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-sm"></span>
          </button>

          <div
            className="collapse navbar-collapse container-fluid ms-lg-5 ps-lg-5 justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me- mb- mb-lg-0 ms-lg-5 pe-lg-5 nav-ul">
              <div className="row">
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      smooth
                      to="#Hero"
                    >
                      <i className="fa fa-star-o"></i>
                      <span>Home</span>
                    </Link>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <Link className="nav-link" smooth to="#About">
                      <i className="fa fa-user-o"></i>
                      <span>About</span>
                    </Link>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <Link className="nav-link" smooth to="#Skills">
                      <i className="fa fa-lightbulb"> </i>
                      <span>Skills</span>
                    </Link>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <Link className="nav-link" smooth to="#Projects">
                      <i className="fa fa-gear fa-spin fa-3x fa-fw p-0"></i>
                      <span className="ps-">Projects</span>
                    </Link>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <Link className="nav-link" smooth to="#Contact">
                      <i className="fa fa-address-book-o"></i>
                      <span>Contact</span>
                    </Link>
                  </li>
                </div>
                {/* <div className="col-4 col-sm">
                  <li className="nav-item">
                    <DownloadOptions
                      href="https://www.linkedin.com/in/kehinde-olaleye-307229123/"
                      downloadData={downloadResume} // Pass the download function
                      onDownloadClick={
                        isDownloading ? () => {} : downloadResume
                      } // Disable download click if already downloading
                    />
                  </li>
                </div> */}
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5"></div>
    </div>
  );
};

export default Navbar;
