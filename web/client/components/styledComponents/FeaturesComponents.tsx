import styled from "styled-components";

const MainContainer = styled.div`
   
   background-color: ${(props: any) => props.backgroundColor};
   height: ${(props: any) => props.height};
   width: 100%;

`

const Name = styled.h3`
   margin:auto;
   color:#5e5e5e;
   font-weight:medium;
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