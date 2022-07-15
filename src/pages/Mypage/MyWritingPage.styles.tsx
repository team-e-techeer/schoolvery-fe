import styled from '@emotion/styled';

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

export const TopBlock = styled.div`
  display: flex;
  margin-top: 10%;
  padding-bottom: 10%;
  width: 100%;
  border-bottom: 0.8px solid #878787;
  justify-content: center;
  align-items: center;
`;

export const PostBlock = styled.div`
  padding-bottom: 9rem;
`;
