import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 30%;
padding-top : 20px;

  .icons{
    color : #6d6d6d;
    font-size : 18px;
    cursor : pointer;
    transition : color .9s ease-in-out; 
  }
    .icons:hover{
        color : #6d1ac5f0;
      }
   h2{
     color : #6d6d6d;
     font-size: 20px;
   }
   .button-icon{
     margin-right: 7%;
     font-size : 20px;
   }
`;
export const ImageDiv = styled.div`
  width: 70px;
  height: 70px;
  max-width: 70px;
  max-height: 70px;
  overflow: hidden;
  border-radius : 50px;
  margin: 0 10px;

  img{
    width : 70px;
   object-position : cover;
  }


 
`;
