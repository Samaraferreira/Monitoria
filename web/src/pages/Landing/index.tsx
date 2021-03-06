import React from 'react';
import { Link } from 'react-router-dom';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import Logo from '../../assets/images/logo-img.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <main id="page-landing">
      <img src={Logo} />
      <p>
        Precisando de ajuda nos estudos? Encontre um monitor.
      </p>

      <div className="buttons-container">
        <Link to="/study" className="study">
          <img src={studyIcon} alt="Estudar" />
          Encontrar monitor
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
