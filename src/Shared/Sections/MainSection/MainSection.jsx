import "./MainSection.css";
import logo from "../../../assets/logo-icon.svg";
import mainImage from "../../../assets/home-img.png";
import BlockInfo from "../../ui/BlockInfo/BlockInfo";
import LinkButton from "../../ui/LinkButton/LinkButton";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-section__container">
        <div className="main-section__container_header">
          <img src={logo} alt="logo" />
          <a href="#" className="main-section__container_header_link">
            Наши проекты
          </a>
          <a href="#" className="main-section__container_header_link">
            Способы оплаты
          </a>
          <a href="#" className="main-section__container_header_link">
            Контакты
          </a>
        </div>
        <div className="main-section__container_content">
          <h1 className="main-section__container_content_title">
            Готовый каркасный дом от 100м2 под ключ за 2 месяца
          </h1>
          <p className="main-section__container_content_description">
            Построим продуманный и экологичный дом с повышенной
            теплолэффективностью для вашей комфортной жизни
          </p>
          <LinkButton href="#" text="Оставить заявку" />
          <div className="main-section__container_content_blocks">
            <BlockInfo title="65~" description="Дней средний срок строительства" />
            <BlockInfo title="7+" description="Лет гарантии на построенный дом" />
            <BlockInfo title="180+" description="Домов построили с 2013 года" />
          </div>
        </div>
      </div>
      <img src={mainImage} alt="main-image" />
    </section>
  );
};

export default MainSection;
