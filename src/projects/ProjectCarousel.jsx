import style from "./projectCarousel.module.css";
import reactImg from "../assets/React-icon.svg.png";
import mernImg from "../assets/mernStack.jpg";
const ProjectCarousel = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.carousel}>
          <a
            href="https://iphone-calculator-77suuvrxr-amandaraphael.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              <i class="fab fa-js"></i>
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>iphone calculator</p>
              <p>Technologies: Vanilla JavaScript, HTML5, CSS3</p>
            </div>
          </a>
          <a
            href="https://amandaraphael.github.io/AvengerQuiz/"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              <i class="fab fa-js"></i>
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>Avenger Quiz</p>
              <p>Technologies: Vanilla JavaScript, HTML5, CSS3</p>
            </div>
          </a>
          <a
            href="https://blog-of-thrones2-qtbhnbkko-amandaraphael.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              <img src={reactImg} width="50px" height="50px" alt="reactImage" />
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>Blog of Thrones</p>
              <p>Technologies: React, JavaScript, HTML5, CSS3, mediaquery</p>
            </div>
          </a>
          <a
            href="https://fun-code-react-ga8wgfi25-amandaraphael.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              <img src={reactImg} width="50px" height="50px" alt="reactImage" />
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>Fun-Code Academy</p>
              <p>Technologies: React,JavaScript, HTML5, CSS3, mediaquery</p>
            </div>
          </a>
          <a
            href="https://musing-lovelace-57c5de.netlify.app/"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              <img src={reactImg} width="50px" height="50px" alt="reactImage" />
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>
                Bento: Award winning Japanese restaurant website
              </p>
              <p>Technologies: React,JavaScript, HTML5, CSS3, mediaquery</p>
            </div>
          </a>

          <a
            href="https://thaikoodam-bridge-frontend.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              {" "}
              <img src={mernImg} width="50px" height="50px" alt="mernImage" />
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>Thaikoodam Bridge</p>
              <p>Technologies: MongoDb, ExpressJs, React, NodeJs</p>
            </div>
          </a>
          <a
            href="https://solar-api-front-ge8ss0fwa-amandaraphael.vercel.app/satellites"
            rel="noreferrer"
            target="_blank"
            className={style.carousel__item}
          >
            <div className={style.carousel__item_head}>
              {" "}
              <img src={mernImg} width="50px" height="50px" alt="mernImage" />
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>Solar Api</p>
              <p>Technologies: MongoDb, ExpressJs, React, NodeJs</p>
            </div>
          </a>

          <div className={style.carousel__item}>
            <div className={style.carousel__item_head}>
              {" "}
              <img src={mernImg} width="50px" height="50px" alt="mernImage" />
            </div>
            <div className={style.carousel__item_body}>
              <p className={style.title}>Currently working on Eventafy</p>
              <p>A full stack project build with MERN stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
