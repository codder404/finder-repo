import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.main`
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Title = styled.h1`
  font-size: 2.9rem;
  color: ${props => props.theme.colors.TitleColor};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${props => props.theme.colors.InputColor};
    border: 5px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
        /* background-color: rgba(255, 0, 0, 0.1); */
      `}

    &::placeholder {
      color: ${props => props.theme.colors.InputPlaceholderColor};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${props => props.theme.colors.ButtonColor};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      /* background: ${shade(0.2, '#0000b3')}; */
      opacity: 0.8;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      background: ${props => props.theme.colors.ButtonColor};
      opacity: 0.8;

      div {
        strong {
          color: #fff;
        }
        p {
          color: ${props => props.theme.colors.RepoPHoverColor};
        }
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 3px solid ${props => props.theme.colors.ButtonColor};
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${props => props.theme.colors.RepoStrongColor};
      }

      p {
        font-size: 18px;
        color: ${props => props.theme.colors.RepoPColor};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
