import React, { useState, useEffect, FormEvent } from 'react';
import { ChevronRightSquare } from '@styled-icons/boxicons-regular';
import { Link } from 'react-router-dom';

import api from '../../service/api';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepo = localStorage.getItem('@GithubExplorer:respositories');

    if (storagedRepo) {
      return JSON.parse(storagedRepo);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:respositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do repositório ou autor');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([repository, ...repositories]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Repositório não encontrado 😢!');
    }
  }
  return (
    <>
      <S.Title>Encontre repositórios do Github</S.Title>

      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="search"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Buscar</button>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}
      <S.Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <ChevronRightSquare size={20} />
          </Link>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
