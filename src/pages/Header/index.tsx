import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';

import lightImg from '../../assets/images/logo.svg';
import darkImg from '../../assets/images/logo-dark.svg';

import * as S from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  let theme = '';
  if (title === 'dark') {
    theme = darkImg;
  } else {
    theme = lightImg;
  }
  return (
    <S.Container>
      <img src={theme} alt="Github Finder" />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </S.Container>
  );
};

export default Header;
