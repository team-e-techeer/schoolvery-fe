import colors from '@/constants/colors';
import styled from '@emotion/styled';

const IconWrapper = styled.div`
  display: flex;
  margin-top: 5rem;

  flex-direction: column;
  align-items: center;
  span {
    margin-top: 1rem;
    color: ${colors.grey600};
    font-size: 1.5rem;
  }
`;

const VerticalLine = styled.div`
  margin-top: 4rem;
  border-top: 0.1rem solid ${colors.grey300};
`;

const BlankView = styled.div`
  height: 3rem;
`;

export { IconWrapper, VerticalLine, BlankView };
