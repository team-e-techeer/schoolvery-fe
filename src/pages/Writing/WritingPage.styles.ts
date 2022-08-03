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
  margin-left: 10%;
  margin-right: 10%;
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
  width: 100%;
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

export const Input = styled.input`
  display: flex;
  flex: 1;
  border: 1px solid ${colors.mainColor};
  margin-left: 7%;
  border-radius: 0.7rem;
  padding: ${inputPadding}rem;
  font-size: ${inputPadding}rem;
  ::placeholder {
    opacity: 0.6;
    font-size: ${inputPadding}rem;
    color: #a3a3a3;
  }
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
