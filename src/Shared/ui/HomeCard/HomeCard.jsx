import mainImage from "../../../assets/home-img.png";
import "./HomeCard.css"

const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card__img">
        <img src={mainImage} alt="" />
        <div className="home-card__gradient"></div>
      </div>
      <div className="home-card__price">
        <p className="home-card__price_title">Каркасный дом, 77м2</p>
        <p className="home-card__price_desc">Цена: от 15,800,000тг</p>
      </div>
    </div>
  );
};

export default HomeCard;
