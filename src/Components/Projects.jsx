import React from "react";
import "./Projects.css";
import Edzz from "../assets/Edozzier Clone.gif"
import Van from "../assets/Van-Life Clone.gif"
import LC from "../assets/Love Calculator.gif"
import SP from "../assets/schl portal.gif"
import Weather from "../assets/Weather-App.gif"
import Bank from "../assets/Bank-App.gif"
import Calculator from "../assets/Calculator.gif"
import Firebase from "../assets/firebase.png"

const Projects = () => {
  return (
    <>
      <h1
        id="Projects"
        className="hidden text-light text-center pt-5 display-3"
      >
        Latest Projects
      </h1>
      <div className="row d-flex justify-content-center align-items-center p-5 gap- container-fluid m-0">
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card">
            <img className="card__background" src={Edzz} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Edozzier Home Page</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://live-coding-test-gamma.vercel.app/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Live-Coding-Test"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={Van} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Van Life Clone</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://van-life-new-pied.vercel.app/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Van-life"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={LC} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Love Calculator App</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://love-calculator-khaki.vercel.app/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Love-Calculator"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={SP} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Simple School Portal App</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://javascript-green.vercel.app/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Javascript"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={Weather} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Weather App</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a target="_blank" href="https://clima-view-brown.vercel.app/">
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/ClimaView"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={Firebase} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Flexible Sign-Up Methods with Firebase Authentication</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://oluwasola1993.github.io/Firebase-Assignment/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Firebase-Assignment"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={Calculator} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Calculator</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://calculator-umber-two.vercel.app/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Calculator"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col col-lg-6 pb- mb-4">
          <div className="card ">
            <img className="card__background" src={Bank} alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Bank App</h2>
              </div>
              <div className="card__button d-flex align-items-center justify-content-center social">
                <a
                  target="_blank"
                  href="https://banking-app-front-end.vercel.app/"
                >
                  <i className="fa fa-link " aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Oluwasola1993/Banking-App-Front-End"
                >
                  <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          target="_blank"
          href="https://github.com/Oluwasola1993?tab=repositories"
          className="hidden btn btn-lg text-dark btn-light w-50 mb-5 "
        >
          More 💻
        </a>
      </div>
    </>
  );
};

export default Projects;
