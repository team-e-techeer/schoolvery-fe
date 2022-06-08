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

export const TopBlock = styled.div`
  display: flex;
  margin-top: 10%;
  padding-bottom: 10%;
  width:100%;
  border-bottom: 0.8px solid #878787;
  justify-Content: center;
  align-Items: center;
`;
