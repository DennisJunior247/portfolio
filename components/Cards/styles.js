import styled from "styled-components";
import Event from "../../assets/images/events.jpg";

export const CardMain = styled.div`
    display: flex;
    border-radius: 0.5rem;
    width: 500px;
    height: 250px;
    max-height: 250px;
    max-width:500px;
    overflow: hidden;
    background : #fff;
    box-shadow: 0  4px 5px 0 #bbb;
    margin: 20px;
    transition : background 0.2s ease-in;
    
 
    &:hover{
      background: #f6eff7f0;
      // borderBottom: outset rgba(249, 40, 51, 0.72),
      /* box-shadow: none; */

    }
`;

export const CustomListCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position : relative;
  cursor : pointer;
  padding-left : 20px;
  /* transition : bottom 0.5s ease-in-out; */

  

  .aside {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }

  .flex_end {
    justify-content: flex-end;
  }

`;

export const CardHeader = styled.div`
  width: 40%;
  height: 70%;
  overflow: hidden;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: linear-gradient(to right, #00000099, #00000099  ), url(${Event});
  background-position: center;
  background-size: cover;
  padding: 0 0 10px 10px;
  opacity : 1;
  transition: opacity 0.2s ease-in-out;
  
  .header_aside {
    width: 100%;
    display: flex;
    text-transform: capitalize !important;
    justify-content: flex-start;
    color: #f0f0f0;
    font-size: 15px;
  }

  &:hover {
    opacity : .82;
  } 
  &:hover .header_aside{
    opacity : 1;
  } 
  .header_icon{
    color : #ddd;
    font-size : 16px;
    margin : 3px 10px 0 0;
  }
`;
export const CardBody = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 25px;

  .body_header{
    display : flex;
  }
  .icons{
    font-size : 16px;
    margin-left : 20px;
  }
  .icon_wrap{
     width : 100%;

  }
  .icon_wrap_sub{
     width : 100%;
     transform : translateX(0);
    transition : transform .2s ease-in;
  }
  .bottom_icon_wrap{
    /* margin-bottom : -1.3rem; */
    transform : translateX(6rem);
    transition : transform .2s ease-in;

    .icons{
      font-size : 20px;
    }
  }
  &:hover  .bottom_icon_wrap{
    transform : translateX(0);
  }
`;
export const CardCover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;


  @media screen and (max-width: 1480px) {
    justify-content: center;
  }
`;

