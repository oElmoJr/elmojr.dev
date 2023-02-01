import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    palette: {
      common: {
        primary: {
          background: string;
          text: string;
        };
        secondary: {
          border: string;
          background: string;
          text: string;
        };
        tertiary: {
          border: string;
          background: string;
          text: string;
        };
      };

      colors: {
        yellow: string;
        black: string;
        white: string;
        red: string;
        green: string;
        blue: string;
        violet: string;
      };
    };
  }
}
