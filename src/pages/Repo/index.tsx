import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {
  ChevronLeftSquare,
  ChevronRightSquare,
} from '@styled-icons/boxicons-regular';

import api from '../../service/api';

import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  discription: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repo: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(resposnse => {
      setRepository(resposnse.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);
  return (
    <>
      <S.Header>
        <Link to="/">
          <ChevronLeftSquare size={16} />
          Voltar
        </Link>
      </S.Header>
      {repository && (
        <S.RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.discription}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}
      <S.Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <ChevronRightSquare size={20} />
          </a>
        ))}
      </S.Issues>
    </>
  );
};

export default Repo;
