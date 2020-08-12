import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface ITeacher {
  _id: string;
  name: string;
  email: string;
  avatar_url: string;
  whatsapp: string;
  bio: string;
  subjects: Array<string>;
  topics: Array<string>;
}

interface TeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar_url} alt={teacher.name} />
        <div className="infos">
          <strong>{teacher.name}</strong>
          <div className="subjects">
            {teacher.subjects.map((subject) => (
              <span key={subject}>{subject}</span>
            ))}
          </div>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <p>E-mail: {teacher.email}</p>

      <div className="topics">
        {teacher.topics?.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>

      <footer>
        <p>
          Toda monitoria é<strong>GRATUITA</strong>
        </p>
        <a target="_blanck" href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
