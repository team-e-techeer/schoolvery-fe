import colors from '@/constants/colors';
import styled from '@emotion/styled';

const inputPadding = 1.3;

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
  @media (min-width: 200px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  margin: auto;
`;

export const FirstSection = styled.div`
  margin-top: 3rem;
`;
export const SecondSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ThirdSection = styled.div`
  margin-top: 3%;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 45%;
  margin-top: 3rem;
`;

export const RawFlexWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  flex: 1;
  p {
    margin-left: 0.5rem;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: center;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  @media (min-width: 200px) {
    margin-left: 10%;
  }
  @media (min-width: 768px) {
    margin-left: 7%;
  }
  @media (min-width: 1024px) {
    margin-left: 7%;
  }
  img {
    width: 5rem;
    max-height: 8rem;
  }
  p {
    margin-left: 2rem;
  }
`;

export const BlankView = styled.div`
  flex: 1;
`;

export const IconCenterBlock = styled.div`
  /* margin-left: 47%;
  margin-right: 47%; */
  margin-right: 2rem;
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  flex: 0.1;
`;

export const NumInput = styled.input`
  display: flex;
  border: 1px solid ${colors.mainColor};
  border-radius: 0.7rem;
  width: 50%;
  padding: 1rem;
  font-size: ${inputPadding}rem;
  text-align: center;
  ::placeholder {
    opacity: 0.6;
    font-size: ${inputPadding}rem;
    color: #a3a3a3;
    text-align: center;
  }
`;

export const RawFlexTimeWrapper = styled.div`
  display: flex;
  flex: 1;
  /* margin-left: 2rem; */
`;

export const InputForm = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2.5rem;
  font-size: ${inputPadding}rem;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.mainColor};
    border-radius: 0.7rem;
    color: ${colors.black};

    outline: none;
    /* padding: 1.25rem; */
    padding: ${inputPadding}rem;
    background: none;

    &:hover {
      border-color: ${colors.subColor};
    }

    &:focus {
      border-color: ${colors.mainColor};
    }
  }

  & label {
    position: absolute;
    left: 1rem;
    top: 1.3rem;
    padding: 0.4rem;
    border-radius: 0.7rem;
    color: ${colors.grey100};
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: ${colors.subColor};
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  input:-webkit-autofill ~ label {
    top: -1rem;
    font-size: 1rem;
    left: 0.8rem;
  }
  @media (min-width: 200px) {
    margin-left: 7%;
  }
  @media (min-width: 768px) {
    margin-left: 7%;
  }
  @media (min-width: 1024px) {
    margin-left: 7%;
  }
`;

export const Input = styled.input`
  display: block;
  flex: 1;
  border: 1px solid ${colors.mainColor};
  /* margin-left: 7%; */
  border-radius: 0.7rem;
  padding: ${inputPadding}rem;
  font-size: ${inputPadding}rem;
  ::placeholder {
    opacity: 0.6;
    font-size: ${inputPadding}rem;
    color: #a3a3a3;
  }
  &:focus {
    border: 5px solid ${colors.mainColor};
    transition: 0.5s ease-in;
  }
`;

export const Label = styled.label`
  position: relative;
  left: 1rem;
  top: 0.8rem;
  padding: 0 0.5rem;
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: $clr-bg;
`;

export const TimeInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  margin-left: 1rem;
  border: 1px solid ${colors.mainColor};
  border-radius: 0.7rem;
  padding: ${inputPadding}rem;
  font-size: ${inputPadding}rem;
  text-align: center;
`;

export const TimeInput = styled.input`
  display: flex;
  flex: 0.5;
  min-width: 0;
  flex-shrink: 0;

  justify-self: center;
  justify-content: center;
  text-align: center;
  ::placeholder {
    opacity: 0.6;
    font-size: ${inputPadding}rem;
    color: #a3a3a3;
    text-align: center;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.mainColor};
  width: 100%;
  height: 160px;
  border-radius: 0.7rem;
  padding: 1rem;
  resize: none;
  outline: none;
`;

export const CategoryBtn = styled.button``;
