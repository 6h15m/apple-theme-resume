import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
   body{
      background: black;
      color: #F2F2F7;
      padding: 0;
      margin: 0;
      font-family: 'Pretendard', sans-serif;
    };
`;

export default GlobalStyle;
