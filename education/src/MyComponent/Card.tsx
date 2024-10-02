import React from 'react';
import '../styles/styleCards.css';

interface CardProps {
  image: string;
  type: string;
  description: string;
  duration: string;
  price: string;
  language: string;
  buttonColor: string; // Цвет для кнопки "Обрати предмет"
  color: string; // Цвет для кнопки языка
  onSelect: () => void; 
}

const Card: React.FC<CardProps> = ({
  image,
  type,
  description,
  duration,
  price,
  language,
  color,
  buttonColor,
  onSelect,
}) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt="Card logo" className="card-image" />
      </div>
      <div className={`label ${type === 'front-end' ? 'front-end' : 'back-end'}`}>
        {type}
      </div>
      <div className="card-description">{description}</div>
      <div className="duration-block">{duration}</div>
      <div className="price-block">{price}</div>

      <button className="language-button" style={{ backgroundColor: color }}>
        {language}
      </button>

      <button 
        className="choose-subject-btn"
        onClick={onSelect} 
        style={{ backgroundColor: buttonColor }} 
      >
        {buttonColor === 'green' ? 'Цей предмет обрано' : 'Обрати предмет'}
        <img 
          src={require(`../assets/logo/${buttonColor === 'green' ? 'galochka.png' : 'Krestik.png'}`)} 
          alt={buttonColor === 'green' ? 'check icon' : 'plus icon'} 
          className="plus-icon" 
        />
      </button>
    </div>
  );
};

export default Card;
