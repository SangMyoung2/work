import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset' //브라우저의 css를 사용하지 않고 내가 사용한 css를 사용하겠다는 의미 styled-reset

const GlobalStyle = createGlobalStyle`

${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap');
  
  body {
    font-size: 15px;
    line-heghit: 1.6;
    font-family: 'Noto Sans KR', sans-FileSystemWritableFileStream;
    color: #333;
  }
  
  a {text-decoration: none; color: #333;}

  .box p{}
  
  `

  export default GlobalStyle;