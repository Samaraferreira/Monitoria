import React, {
  useCallback,
  useMemo,
  useState,
  FormEvent,
  ChangeEvent,
} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Checkbox from '../../components/Checkbox';

import avatarImage from '../../assets/images/avatar.png';
import warningIcon from '../../assets/images/icons/warning.svg';
import subjects from '../../assets/data/subjects.json';

import './styles.css';

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<File>();
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [topics, setTopics] = useState('');
  const [messageBtn, setMessageBtn] = useState('');

  const history = useHistory();

  const handleSelectedSubjects = useCallback(
    (value: string) => {
      if (selectedSubjects.includes(value)) {
        const updatedSubjects = selectedSubjects.filter(
          (item) => item !== value,
        );
        setSelectedSubjects(updatedSubjects);
      } else {
        setSelectedSubjects((oldValue) => [...oldValue, value]);
      }
    },
    [selectedSubjects],
  );

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : avatarImage;
  }, [avatar]);

  const handleUploadAvatar = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setAvatar(event.target.files[0]);
      }
    },
    [],
  );

  const handleCreateTeacher = useCallback(
    async (data: FormData): Promise<void> => {
      try {
        await api.post('teachers', data);

        setMessageBtn('');
        history.push('/success');
      } catch {
        setMessageBtn('Erro no cadastro!');
      }
    },
    [history],
  );

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    setMessageBtn('Enviando...');

    if (name && email && avatar && whatsapp && bio && selectedSubjects) {
      const data = new FormData();

      const convertedSubjects = selectedSubjects.toString();

      const newWhatsapp = '55' + whatsapp;

      data.append('name', name);
      data.append('email', email);
      data.append('avatar', avatar);
      data.append('whatsapp', newWhatsapp);
      data.append('bio', bio);
      data.append('subjects', convertedSubjects);
      data.append('topics', topics);

      handleCreateTeacher(data);
    } else {
      setMessageBtn('Verifique seus dados');
    }
  };

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que bom que você quer ajudar!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <div id="input-file">
              <span
                className="avatar-image"
                style={{ backgroundImage: `url(${preview})` }}
              />
              <input
                id="file"
                name="avatar"
                placeholder="Adicionar avatar"
                type="file"
                accept=".png, .jpeg, .jpg"
                onChange={handleUploadAvatar}
              />
              <label className="upload-label" htmlFor="file">
                Adicionar avatar
              </label>
            </div>

            <Input
              name="name"
              label="Nome completo"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="email"
              label="E-mail"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              placeholder="DDD+número (Ex.: 82912345678)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <Textarea
              name="bio"
              label="Biografia"
              placeholder="Mostre que você é legal"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Escolha a matéria <span>Pode ser mais que uma</span>
            </legend>

            <div className="group-checkbox">
              {subjects.map((subject) => (
                <Checkbox
                  key={subject.value}
                  name={subject.label}
                  value={subject.value}
                  label={subject.label}
                  onChange={() => handleSelectedSubjects(subject.value)}
                />
              ))}
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

            <button type="submit">{messageBtn || 'Salvar cadastro'}</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
