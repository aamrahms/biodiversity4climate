import React, { useState } from 'react'
import './BookPage.css';

/* Modal */
import Modal from "../Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
// import HeaderPage from '../../components/Header/HeaderPage';
// import Footer from '../../components/Footer/Footer';
// import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
// import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import BookNav from './BookNav';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const bookImg = require.context('../../img', true);

const Book = () => {
  const [modal1, changeModal1] = useState(false);
  const [modal2, changeModal2] = useState(false);
  const [modal3, changeModal3] = useState(false);
  const [modal4, changeModal4] = useState(false);
  const [modal5, changeModal5] = useState(false);
  const [modal6, changeModal6] = useState(false);
  return (
    <div>

      {/* <HeaderPage />

      <ParticleBackground /> */}

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Books'
            />
          </h1>
          {/* <BookNav/> */}
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => changeModal1(!modal1)}>
              <img src={bookImg(`./book-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => changeModal5(!modal5)}>
              <img src={bookImg(`./book-5.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => changeModal4(!modal4)}>
              <img src={bookImg(`./book-4.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => changeModal2(!modal2)}>
              <img src={bookImg(`./book-2.png`)} alt="" className="projects__img" />
            </a>
          </div>
          
          <div className="projects__item">
            <a onClick={() => changeModal3(!modal3)}>
              <img src={bookImg(`./book-3.png`)} alt="" className="projects__img" />
            </a>
          </div>
          
          <div className="projects__item">
            <a onClick={() => changeModal6(!modal6)}>
              <img src={bookImg(`./book-6.png`)} alt="" className="projects__img" />
            </a>
          </div>

          
          {/* 
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={bookImg(`./proyecto-11.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img src={bookImg(`./proyecto-10.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img src={bookImg(`./proyecto-9.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img src={bookImg(`./proyecto-8.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img src={bookImg(`./proyecto-7.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <img src={bookImg(`./proyecto-6.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img src={bookImg(`./proyecto-5.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img src={bookImg(`./proyecto-3.jpg`)} alt="" className="projects__img" />
            </a>
          </div> */}
        </section>
      </main>

      <Modal
        estado={modal1}
        cambiarEstado={changeModal1}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./book-1.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-1-p1'
                  defaultMessage='Encyclopedia of Ecology'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-1-p2'
                  defaultMessage='Evapotranspiration'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://shop.elsevier.com/books/encyclopedia-of-ecology/fath/978-0-444-63768-0" target="_blank">https://encyclopediaofecology.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
          
      <Modal
        estado={modal2}
        cambiarEstado={changeModal2}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./book-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-2-p1'
                  defaultMessage='Ecological Engineering, Volume
                  120, (2018)'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-2-p2'
                  defaultMessage='The effect of forest
                  disturbance on landscape
                  temperature.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.sciencedirect.com/journal/ecological-engineering" target="_blank">https://ecologicalengineering.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      
      <Modal
        estado={modal3}
        cambiarEstado={changeModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./book-3.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='Global Environmental Change 43
                  (2017) 51–61'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='Trees, forests and water: Cool
                  insights for a hot world '
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.sciencedirect.com/science/article/pii/S0959378017300134" target="_blank">https://globalenvironmentalchange.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    
      <Modal
        estado={modal4}
        cambiarEstado={changeModal4}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./book-4.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-4-p1'
                  defaultMessage='Direct: Ecosystem Services,
                  Volume 57, (2022), 101469.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-4-p2'
                  defaultMessage='Why
                  ecosystem services should be
                  counterbalanced by nature’s
                  thermodynamic costs.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.sciencedirect.com/journal/ecosystem-services/vol/57/suppl/C" target="_blank">https://ecosystemservices.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      
      <Modal
        estado={modal5}
        cambiarEstado={changeModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./book-5.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-13-p1'
                  defaultMessage='CellPress, Heliyon, Volume 8, Issue 10, (October 2022)'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-13-p2'
                  defaultMessage='Vegetation impact on atmospheric moisture transport under
                  increasing land-ocean temperature contrasts'
                />
              </p>
              <div className="eins-modal-text-2">
              <span>Link:</span> <a href="https://www.sciencedirect.com/journal/heliyon" target="_blank">https://heliyon.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
       
      <Modal
        estado={modal6}
        cambiarEstado={changeModal6}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./book-6.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-4-p1'
                  defaultMessage='European Journal of Sustainable
                  Development, 9(3), 313. (2020)'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-4-p2'
                  defaultMessage='Saving Water for the Future Via Increasing
                  Plant Literacy of Pupils.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://ecsdev.org/ojs/index.php/ejsd/article/view/1087" target="_blank">https://europeanjournel.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/*
      <Modal
        estado={estadoModal12}
        cambiarEstado={cambiarEstadoModal12}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-12-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-12-p1'
                  defaultMessage='Every Running, page developed for the sale of unisex shoes.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-12-p2'
                  defaultMessage='Designed so that the customer can choose the shoe model, see which one best suits their budget and which are the best valued by buyers.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/EveryRunning" target="_blank">https://every-running.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal11}
        cambiarEstado={cambiarEstadoModal11}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-11-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-11-p1'
                  defaultMessage='Plus Anime, created to watch or download the anime chapters of your choice.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-11-p2'
                  defaultMessage='It has a wide variety of Anime, both recent releases and community favorites, it also boasts movies of the genre in question.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/PlusAnime" target="_blank">https://plusanime.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal10}
        cambiarEstado={cambiarEstadoModal10}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-10-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-10-p1'
                  defaultMessage='Elegant Hand, page created for the sale of digital and analog watches.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-10-p2'
                  defaultMessage='Developed so that the customer can choose the watch of their choice, since it has a wide variety of brands and models. The page also has a night mode for more comfort.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/ElegantHand/" target="_blank">https://elegant-hand.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal9}
        cambiarEstado={cambiarEstadoModal9}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-9-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-9-p1'
                  defaultMessage='Life on paper, page created for a bookstore.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2'
                  defaultMessage='Designed so that the customer can purchase physical or digital books, it has a large number of categories so that its readers feel comfortable.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/vida-en-papel" target="_blank">https://vida-en-papel.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-8-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-8-p1'
                  defaultMessage='Shop Tec, is an ecommerce developed for the purchase of technological products.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-8-p2'
                  defaultMessage='It offers a large number of products, as well as the ability to navigate between the different categories of such products.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/shop-tec" target="_blank">https://shop-tec.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal7}
        cambiarEstado={cambiarEstadoModal7}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-7-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-7-p1'
                  defaultMessage='Power engine, is a car sales website.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-7-p2'
                  defaultMessage='Developed so that the customer can purchase the car of their dreams, it uses a slider system in many of its sections to facilitate the interaction of the page with users.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Power-Engine" target="_blank">https://power-engine.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-6-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-6-p1'
                  defaultMessage='Spider-Man fan page, is a project developed in honor of Spider-Man.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-6-p2'
                  defaultMessage='It offers a wide variety of information about Spider-Man and his multi-verse variants, as well as facts and trivia about his enemies and allies.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Spider-Man" target="_blank">https://spider-man-fans-page.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-5-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-5-p1'
                  defaultMessage='PremierFood, page created for the sale of fast food.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-5-p2'
                  defaultMessage='Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/PremierFood" target="_blank">https://premierfood.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={bookImg(`./proyecto-3.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='ProgramCoffe, a blog designed to inform about the best recipes for your coffee.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='It offers a large amount of information on the perfect preparations for a good coffee, as well as the temperature at which it must be prepared, as well as the best coffee beans.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Blog-Coffe" target="_blank">https://ProgramCoffe.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}

      {/* <ScrollToTop /> */}

      {/* <Footer /> */}
    </div>
  )
}
export default Book;