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
  height: auto;
  border-radius: 5px;
  padding: 10px 5px;
`;
export const DecimalLayout = styled.div`
  padding: 5px 10px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 6px;
`;
export const Item = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: #205b7a;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-weight: bold;
`;
export const InputItem = styled.div`
  grid-column: ${(props) => (props.type === "binary" ? `1 / 4` : `1 / 6`)};
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #205b7a;
  background-color: #a2bbcf;
  padding: 10px 15px;
  font-size: 30px;
  color: #142f44;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Small = styled.span`
  font-size: 15px;
  position: relative;
  top: 6px;
  margin-right: 5px;
`;
export const BinaryLayout = styled.div`
  padding: 5px 10px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 6px;
`;
