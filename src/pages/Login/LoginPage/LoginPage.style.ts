import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  flex: 1;
  margin-left: 3rem;
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

export const Input = styled.input`
  display: block;
  background-color: #eeeeee;
  margin: 3rem 0;
  border-radius: 0.7rem;
  width: 80%;
  margin-left: 10%;
  padding: 1.5rem;
  ::placeholder {
    opacity: 0.6;
  }
`;
