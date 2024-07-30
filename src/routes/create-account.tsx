import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
  `;
const Title = styled.h1`
  font-size: 42px;
  `;
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  `;
const Input = styled.input`
  padding: 10px 20px;
  border-radius:  50px;
  border:none;
  width: 100%;
  font-size: 16px;
  &[type="submit"]{
    cursor: pointer;
    &:hover{
      opacity:0.8;
    }
  }
  `;

export default function CreateAccount(){
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //input 내용 바꾸기
  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
   
  };

  //input 제출
  const onSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
      try{
        
      }catch(e){

      }finally{
        setLoading(false);
      }
    };

  return (
  <Wrapper>
    <Title>Log into X</Title>
    <Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required/>
        <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required/>
        <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required/>
        <Input type="submit" value="회원가입" />
    </Form>
  </Wrapper>
  );
}