import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
};

export default function PaginationButton({ totalPages, currentPage, setCurrentPage }: Props) {
  const pageList: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Wrapper>
      <MoveButton onClick={prevPage}>{"<"}</MoveButton>
      {pageList.map((num, index) => (
        <Button
          key={index}
          onClick={() => setCurrentPage(num)}
          backgroundColor={currentPage === num ? "#ddd" : "#fff"}
        >
          {num}
        </Button>
      ))}
      <MoveButton onClick={nextPage}>{">"}</MoveButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 10px;
  margin-top: 30px;
  border: 1px solid #ddd;
  border-radius: 40px;
`;

const MoveButton = styled.button`
  padding: 10px 13px;
  border: none;
  background-color: #fff;

  &:hover {
    background-color: #ddd;
    border-radius: 100%;
  }
`;

const Button = styled.button<{ backgroundColor: string }>`
  padding: 10px 13px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 100%;

  &:hover {
    background-color: #ddd;
    border-radius: 100%;
  }
`;
