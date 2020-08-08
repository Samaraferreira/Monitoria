import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import subjects from '../../assets/data/subjects.json';

import api from '../../services/api';

import './styles.css';


const List: React.FC = () => {
  const [subject, setSubject] = useState('');

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os monitores disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={subjects}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button type="submit">Buscar</button>
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
