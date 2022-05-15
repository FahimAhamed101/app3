import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";

export const ShopContainer = styled.div`
  
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 



}

 display: grid;
  justify-content: center;


width: 100%;

.week{
  display: flex;
  justify-content: center;
  margin:0 320px 70px 0;
}
`;

export const WelcomeHeader1 = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  background: linear-gradient(to right, #5fada9 25%, #b071ce 50%, #5fada9 75%);
  background-size: 400% 400%;
  transition: all 0.25s ease-in-out;
  object-fit: contain;
  object-position: center;
  display: flex;
  flex-direction: row;
  animation: welcome-header-shimmer 2.5s linear infinite;
  align-items: center;
  justify-content: space-between;
  @keyframes welcome-header-shimmer {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 0%;
    }
  }
.divw{
  width: 75%;
  
 
  align-items: center;

}

.flexdiv{0 0 30px;
  margin-right:30px;
}
 
}
  > div {
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  h1 {
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.75rem;

    color: black;
  display: flex;
.flex1{
  padding:15px 
  }

  p {
    font-size: 1.25rem;
    text-transform: uppercase;
    line-height: 1em;
    color: black;
    opacity: 0.55;
  }
`;

export const WelcomeHeader2 = styled.div`
width: 100%;
max-width: ${PAGE_MAX_WIDTH};
display: flex;
flex-direction: row;

justify-content: center;

.stepbar{
  display: flex;
flex-direction: row;

justify-content: center;
}
.midle{
  width: 100%;
  display: flex;
  flex-direction: row;
  .flexbox{
    display: grid;
   align-items:center;
   padding-top:1rem;
    grid-template-columns: 0.5fr 1fr ;
  }
  .flexbox1{
    display: grid;
    align-items:start;
    grid-template-columns: 0.5fr 1fr ;
  }
}
.flexitems {
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  .flexitem1{
    display: grid;

    grid-template-columns: 4fr 1fr 1fr ;
  
  


  }
  .flexitems11{
    display: grid;
padding-right:30px;
    grid-template-row: 1fr 1fr ;
    grid-gap:15px;
    
    
  
  }
  .flexitems2{
    display:flex;
    align-items:center;
margin-left:10px;
    height:65px;
  }
  .flexitem4{
    display:grid;
    grid-template-columns: 1fr 1fr ;
    justify-content:  space-between;
    
  }
 
 } 
 
 
`;



export const ShopItemsWrapper = styled.div`
  width: 80%;
  max-width: ${PAGE_MAX_WIDTH};

 
  justify-content: center; 
 

  margin: 0 auto;

    .griditems{
     
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center; 
    grid-gap: 60px;
    
    .color{
    color:#1CA1EE;
  }
  .flexbox{
    display:flex;
    justify-content: space-between;
  }
  .flex1{
    display:flex;
  }
 
  }
`;
