import styled from "styled-components";

export const GeneralLayout = styled.div`
 width:100%;
 height : 100vh;
 display:flex;
 justify-content : flex-start;

 main {
     padding: 0 0 0 20% ;
     width : 100%;
    
 }
 @media(max-width : 1100px){
    main {
     padding: 5rem 0 0 0 ;  
     display : flex;
     align-items : center;
     justify-content: center;
    
 }
}
`;
