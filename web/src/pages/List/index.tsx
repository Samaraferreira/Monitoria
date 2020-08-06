import React from 'react';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const List: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os monitores disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default List;
