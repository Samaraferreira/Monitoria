import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/51099911?s=460&u=98a67ad897a2cd5658e5b128401ef549634ae66b&v=4"
          alt="Samara"
        />
        <div>
          <strong>Samara Ferreira</strong>
          <span>Programação web</span>
        </div>
      </header>

      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>

      <p>
        E-mail: ferreirasamara.sf@gmail.com
      </p>

      <div className="topics">
        <span>
          HTML
        </span>
        <span>
          CSS
        </span>
        <span>
          JavaScript
        </span>
      </div>

      <footer>
        <p>
          Toda monitoria é
          <strong>GRATUITA</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
