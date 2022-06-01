import styled from '@emotion/styled';
import colors from '../../constants/colors';
import { Link } from 'react-router-dom';

export const IconWrapper = styled.div`
  flex: 1;
  margin-left: 2rem;
  .button {
    border: none;
    cursor: pointer;
    padding: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

export const Title = styled.h2`
  margin-top: 8rem;
  font-size: 2.5rem;
  text-align: center;
`;

export const Container = styled.form`
margin-left: 10%;
margin-right: 10%;
`;

export const FirstSection = styled.div`
`;
export const SecondSection = styled.div`
display:flex;
`;
export const ThirdSection = styled.div`
margin-top: 3%;
`;

export const InputBlock = styled.div`
display:flex;
`;

export const IconCenterBlock = styled.div`
margin-left:47%;
margin-right:47%;
`;

export const IconBlock = styled.div`
margin-top:3.3rem;
`;

export const SecondDetailSection = styled.div`
margin-left:3%;
margin-right:3%;
`;

export const Input = styled.input`
  display: flex;
  border: 1px solid #fc775a;
  margin-top: 3rem;
  margin-left: 7%;
  margin-bottom: 1.5rem;
  border-radius: 0.7rem;
  width: 90%;
  padding: 1.5rem;
  font-size: 1.5rem;
  ::placeholder {
    opacity: 0.6;
    font-size: 1.5rem;
    font-color: #A3A3A3;
  }
`;

export const NumInput = styled.input`
  display: flex;
  border: 1px solid #fc775a;
  margin-top: 3rem;
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 1.5rem;
  border-radius: 0.7rem;
  width: 100%;
  padding: 1.5rem;
  font-size: 1.5rem;
  ::placeholder {
    opacity: 0.6;
    font-size: 1.5rem;
    font-color: #A3A3A3;
    text-align: center;
  }
`;

export const Post = styled.button`
display: flex;
margin-top: 2rem;
margin-bottom: 1.5rem;
border-radius: 0.7rem;
width: 100%;
padding: 1.5rem;
  color: #FFFFFF;
  background-color: #FC775A;
`;

export const TextArea = styled.textarea`
border: 1px solid #fc775a;
width:100%;
height:160px;
border-radius: 0.7rem;
`;