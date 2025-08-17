import HomeCard from "../../ui/HomeCard/HomeCard";
import LinkButton from "../../ui/LinkButton/LinkButton";
import "./CatalogSection.css";

const CatalogSection = () => {
  return (
    <section className="catalog-section">
      <div className="catalog-section__container">
        <h2 className="catalog-section__container_title">
          Каталог наших объектов за 2024 год
        </h2>
        <div className="catalog-section__content">
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        <div className="catalog-section__footer">
          <LinkButton href="#" text={"В каталог"} />
          <div className="catalog-section__footer_buttons">
          <button className="catalog-section__footer_button">&#8249;</button>
          <button className="catalog-section__footer_button">&#8250;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
