import styled from "styled-components";

const MainContainer = styled.div`
   background-color: ${(props: any) => props.backgroundColor};
   height: ${(props: any) => props.height};
   width: 100%;
   display:flex;
   align-items: center;
   flex-direction:column;
   position: relative;
   justify-content: space-between;
   padding-top: ${(props: any) => props.imagePosition === "top" ? "0" : "5rem"};
   padding-bottom: ${(props: any) => props.imagePosition === "bottom" ? "0" : "6rem"};
   overflow: hidden;
   @media (max-width: 768px) {
      height: auto;
   }

`

const Name = styled.h3`
   margin:auto;
   color:#5e5e5e;
   font-weight:medium;
   padding-bottom:12px ;
`

const Title = styled.h1`
   margin:auto;
   font-weight:semibold;
   font-size:1.7rem;
`

const Description = styled.p`
   color:#5e5e5e;
   font-size:1rem;
   text-align:center;
   padding-left: 72px;
   padding-right: 72px;
   padding-bottom: 20px;
`

const DataChargesText = styled.p`
   color:gray;
`

export {
   MainContainer,
   Name,
   Title,
   Description,
   DataChargesText
}; 