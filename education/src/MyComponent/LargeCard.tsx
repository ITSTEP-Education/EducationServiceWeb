import React from 'react';
import '../styles/LargeCard.css';
import PurpleButton from './PurpleButton';


interface Subject {
  image: string;
  title: string;
  type: string;
  duration: string;
  price: string;
  buttonColor: string; 
  
}

interface LargeCardProps {
  subject: Subject | null;
}

const LargeCard: React.FC<LargeCardProps> = ({ subject }) => {
  if (!subject) {
    return <div className="large-card">Выберите предмет, чтобы увидеть информацию</div>;
  }

  // Условный стиль для типа
  const typeStyle = subject.type === 'front-end' ? '#a3f9b3' : '#757575'; // Зеленый для front-end, серый для back-end

  return (
    <div className="large-card">
      <div className="large-card-image-container">
        <img src={subject.image} alt={subject.title} className="large-card-image" />
      </div>
      <div className="info-block">
        <div 
          className="large-card-type" 
          style={{ backgroundColor: typeStyle }} // Применяем условный цвет
        >
          {subject.type}
        </div>
        <div className="large-card-duration">{subject.duration}</div>
        <div className="large-card-price">{subject.price}</div>
      </div>
      <button className="large-card-language" style={{ backgroundColor: subject.buttonColor }}>
        {subject.title}
      </button>
      <button className="large-card-button" style={{ backgroundColor: subject.buttonColor }}>
        Обраний передмет
      </button>
      <PurpleButton /> {/* Добавляем кнопку в компонент */}

    </div>



  );
};

export default LargeCard;
