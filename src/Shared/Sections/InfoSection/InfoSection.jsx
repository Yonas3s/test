import img from "../../../assets/home2-img.png";
import "./InfoSection.css";
const InfoSection = () => {
  return (
    <section className="info-section">
      <h2 className="info-section__title">
        Строим дома по каркасной технологии
      </h2>
      <div className="info-section__content">
        <img className="info-section__content_img" src={img} alt="img" />
        <p className="info-section__content_text">
          Коттеджи и Бани, построенные по каркасной технологии, получили широкое
          рспространение во всем мире, некоторые из них уже много веков служат
          людям
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
