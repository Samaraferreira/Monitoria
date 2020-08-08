import React, { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';

import warningIcon from '../../assets/images/icons/warning.svg';
import subjects from '../../assets/data/subjects.json';

import './styles.css';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  // const [subject, setSubject] = useState(subjects);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [topics, setTopics] = useState('');

  const history = useHistory();

  function handleSelectedSubjects(value: string) {
    if (selectedSubjects.includes(value)) {
      const updatedSubjects = selectedSubjects.filter(item => item !== value);
      setSelectedSubjects(updatedSubjects);
    } else {
      setSelectedSubjects(older => [...older, value]);
    }
  }

  const handleCreateClass = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const data = {
        name,
        avatar,
        whatsapp,
        bio,
        subject: selectedSubjects,
        topics
      };

      console.log(data);

      // api
      //   .post('teachers', data)
      //   .then(() => alert('Cadastro realizado com sucesso!'));

      history.push('/');
    } catch {
      alert('Erro no cadastro!');
    }
  };

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que bom que você quer ajudar!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input
              name="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Escolha a matéria <span>Pode ser mais que uma</span></legend>

            <div className="group-checkbox">
              {subjects.map(subject => (
                <Checkbox
                  name={subject.label}
                  value={subject.value}
                  label={subject.label}
                  onChange={() => handleSelectedSubjects(subject.value)}
                />)
              )}
            </div>

            <Input
              name="subject"
              label="Quer destacar algum assunto? (separe por vírgula) - opcional"
              value={topics}
              placeholder="ex.: java, html, css"
              onChange={(e) => setTopics(e.target.value)}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os campos obrigatórios
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
