import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

const List: React.FC = () => {
  const [subject, setSubject] = useState('Programação');
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  useEffect(() => {
    async function load(): Promise<void> {
      const response = await api.get('teachers', {
        params: {
          subject,
        },
      });

      setTeachers(response.data);
    }

    load();
  }, [subject]);

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os monitores disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Buscar por Matéria"
            options={[
              {
                value: 'Artes',
                label: 'Artes',
              },
              {
                value: 'Biologia',
                label: 'Biologia',
              },
              {
                value: 'Espanhol',
                label: 'Espanhol',
              },
              {
                value: 'Elétrica',
                label: 'Elétrica',
              },
              {
                value: 'Física',
                label: 'Física',
              },
              {
                value: 'Geografia',
                label: 'Geografia',
              },
              {
                value: 'História',
                label: 'História',
              },
              {
                value: 'Inglês',
                label: 'Inglês',
              },
              {
                value: 'Matemática',
                label: 'Matemática',
              },
              {
                value: 'Português',
                label: 'Português',
              },
              {
                value: 'Programação',
                label: 'Programação',
              },
              {
                value: 'Química',
                label: 'Química',
              },
              {
                value: 'Redação',
                label: 'Redação',
              },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </form>
      </Header>

      <main>
        {teachers.length ? (
          teachers.map((teacher) => (
            <TeacherItem key={teacher._id} teacher={teacher} />
          ))
        ) : (
          <label>
            Ops! Ainda não temos monitores cadastrados nessa matéria.
          </label>
        )}
      </main>
    </div>
  );
};

export default List;
