import styled from "styled-components";

export const App = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a2bbcf;
  color: #fff;
`;
export const Card = styled.div`
  background-color: #142f44;
  width: 40%;
  height: 65%;
  border-radius: 5px;
`;
export const DecimalLayout = styled.div`
  padding: 5px 10px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 5px;
`;
export const DecimalItem = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: #205b7a;
  cursor: pointer;
  text-align: center;
`;
export const DecimalInputItem = styled.div`
  grid-column: 1 / 6;
`;
export const DecimalInput = styled.input`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #205b7a;
  background-color: #a2bbcf;
`;
