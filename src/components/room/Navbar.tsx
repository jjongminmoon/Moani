import styled from "@emotion/styled";
import { roomNavList } from "../../data/navList";
import { SetStateAction } from "react";

type Props = {
  selectedMenu: number;
  setSelectedMenu: React.Dispatch<SetStateAction<number>>;
};

export default function Navbar({ selectedMenu, setSelectedMenu }: Props) {
  return (
    <Wrapper>
      {roomNavList.map(({ id, name }) => (
        <Item
          key={name}
          onClick={() => setSelectedMenu(id)}
          backgroundColor={selectedMenu == id ? "#ddd" : ""}
        >
          {name}
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  gap: 5px;
  margin-top: 30px;
  font-size: 20px;
`;

const Item = styled.li<{ backgroundColor: string }>`
  width: 120px;
  padding: 10px 20px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
