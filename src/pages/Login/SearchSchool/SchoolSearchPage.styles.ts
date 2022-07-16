import colors from '@/constants/colors';
import styled from '@emotion/styled';

export const BlankView = styled.div`
  height: 0.5rem;
`;

export const ListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${colors.mainColor};
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.26;
    cursor: not-allowed;
  }
  &:active {
    background-color: ${colors.grey100};
  }
`;

export const SearchItem = styled.div`
  display: flex;
  padding: 2rem 0;
  flex: 1;
`;
