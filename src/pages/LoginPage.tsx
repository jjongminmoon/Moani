import styled from "@emotion/styled";
import CommonTitle from "../components/commonUI/CommonTitle";
import Swal from "sweetalert2";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, id, pwd)
      .then(() => {
        Swal.fire({
          text: "로그인 성공",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          text: err,
          icon: "error",
          confirmButtonText: "확인",
          confirmButtonColor: "#000"
        })
      );
  };

  return (
    <Section>
      <CommonTitle>ADMIN LOGIN</CommonTitle>
      <Caption>
        <p>이 곳은 관리자 로그인 페이지입니다.</p>
        <p className="text">일반 고객님들은 로그인 없이 페이지 이용이 가능합니다.</p>
      </Caption>
      <LoginBox onSubmit={handleEmailLogin}>
        <p>아이디</p>
        <Input
          type="text"
          value={id}
          onChange={handleId}
          placeholder="이메일을 입력해주세요"
          required
        />
        <p>비밀번호</p>
        <Input
          type="password"
          value={pwd}
          onChange={handlePwd}
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <Button>로그인</Button>
      </LoginBox>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  height: 100vh;
  padding-top: 120px;
`;

const Caption = styled.div`
  text-align: center;

  .text {
    margin-top: 20px;
  }
`;

const LoginBox = styled.form`
  width: 500px;
  padding: 60px;
  background-color: #eee;
  border-radius: 12px;
  box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.2);

  p {
    margin: 10px 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: black;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 8px;
`;
