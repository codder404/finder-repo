import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      ImageBackground: string;
      primary: string;
      secondary: string;
      TitleColor: string;
      InputColor: string;
      InputPlaceholderColor: string;
      ButtonColor: string;

      RepoStrongColor: string;
      RepoPColor: string;
      RepoPHoverColor: string;
      background: string;
      text: string;
    };
  }
}
