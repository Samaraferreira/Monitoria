import React from 'react';
import { Link } from 'react-router-dom';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <main id="page-landing">
      <h1>Monitoria.</h1>
      <p>
        Precisando de ajuda nos estudos? Encontre um monitor ou se torne um.
      </p>

      <div className="buttons-container">
        <Link to="/study" className="study">
          <img src={studyIcon} alt="Estudar" />
          Procurar monitor
        </Link>
        <Link to="/give-classes" className="give-classes">
          <img src={giveClassesIcon} alt="Dar aulas" />
          Quero ser monitor
        </Link>
      </div>

      <span className="footer">
        Colabore com o projeto no{' '}
        <a href="https://github.com/Samaraferreira/Monitoria" target="_blanck">
          GitHub
        </a>
        <img src={purpleHeartIcon} alt="Coração roxo" />
      </span>
    </main>
  );
};

export default Landing;
