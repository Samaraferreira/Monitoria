import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

const Success: React.FC = () => {
  return (
    <div id="page-success">
      <img src={successIcon} alt="Sucesso" />
      <h1>Cadastro salvo!</h1>
      <p>Tudo certo! Você está na nossa lista de monitores.</p>
      <Link to="/study">Acessar lista</Link>
    </div>
  );
};

export default Success;
