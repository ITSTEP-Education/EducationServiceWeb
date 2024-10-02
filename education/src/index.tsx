import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Card from './MyComponent/Card';
import LargeCard from './MyComponent/LargeCard';

interface Subject {
  image: string;
  title: string;
  type: string;
  duration: string;
  price: string;
  buttonColor: string;
}

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null); // Состояние для выбранного предмета

  const handleSelectSubject = (subject: Subject) => {
    if (selectedSubject && selectedSubject.title === subject.title) {
      setSelectedSubject(null); // Если нажали на уже выбранный предмет, сбрасываем выбор
    } else {
      setSelectedSubject(subject); // Устанавливаем новый выбранный предмет
    }
  };

  const subjects: Subject[] = [ 
    {
      image: require('./assets/logo/logoC++.png'),
      title: 'C++',
      type: 'back-end',
      duration: '14 міс',
      price: '7000 грн',
      buttonColor: '#00599C',
    },
    {
      image: require('./assets/logo/logoCSharp.png'),
      title: 'C#',
      type: 'back-end',
      duration: '6 міс',
      price: '1800 грн',
      buttonColor: '#9A4F96',
    },
    {
      image: require('./assets/logo/logoPython.png'),
      title: 'Python',
      type: 'back-end',
      duration: '12 міс',
      price: '2200 грн',
      buttonColor: '#FFD43B',
    },
    {
      image: require('./assets/logo/logoJS.png'),
      title: 'JS',
      type: 'front-end',
      duration: '8 міс',
      price: '3000 грн',
      buttonColor:'#F7E018'
    },
    {
      image: require('./assets/logo/logoTS.png'),
      title: 'TS',
      type: 'front-end',
      duration: '8 міс',
      price: '3000 грн',
      buttonColor:'#3178C6'
      
    },
  ];

  return (
    <div className="container">
      <div className="card-container">
        {subjects.map((subject, index) => (
          <Card
            key={index}
            image={subject.image}
            type={subject.type}
            description="some text to describe language of programming"
            duration={subject.duration}
            price={subject.price}
            language={subject.title}
            color="#00599C"
            buttonColor={selectedSubject?.title === subject.title ? 'green' : subject.buttonColor}
            onSelect={() => handleSelectSubject(subject)}
          />
        ))}
      </div>
      <div className="large-card-container">
        <LargeCard subject={selectedSubject} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));