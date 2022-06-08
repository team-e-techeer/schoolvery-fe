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

export const ProfileBlock = styled.div`
  display:flex;
  justify-Content: center;
  align-Items: center;
  margin-top: 5%;
  width:100%;
  border-top: 0.8px solid #878787;
  border-bottom: 0.8px solid #878787;
`;

export const ProfileImg = styled.div`
  margin-top:5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom:5%;
  background-color: #C4C4C4;
  border-radius: 50%;
  width:105px;
  height:105px;
`;

export const ProfileInfo = styled.div`
  width: 30%;
  margin-top:7%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom:7%;
`;

export const ProfileSetting = styled.button`
  margin-left:7%;
  margin-right:7%;
  margin-bottom:15%;
`;

export const BoardBlock = styled.div`
  margin-top: 5%;
  display:flex;
`;

export const BoardBtn = styled.button`
width:33%;
`;