import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE} ;
    -webkit-font-smoothing: antialiased ;
}

a{
    text-decoration: none;

}



button:hover, a:hover {
 filter:brightness(0.2s)
}

body, input-security, button, textarea{
    font-family: 'robot slab', serif;
    font-size: 16px;
    outline: none;
}
`