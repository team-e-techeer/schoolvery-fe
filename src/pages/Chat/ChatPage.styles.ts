import styled from '@emotion/styled';

export const EmailWrapper = styled.section`
  flex-grow: 1;
`;

export const EmailBlock = styled.section`
  height: 87%;
  overflow: scroll;
  overflow-x: hidden;
`;

export const EachBlock = styled.div`
  margin-top: 20px;
`;

interface EachText {
  fromUser: boolean;
}

export const AvatarBlock = styled.div<EachText>`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  flex-grow: 0;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

export const AvatarTextBlock = styled.div`
  flex-direction: column;
  margin: 0px 10px;

  p:nth-of-type(1) {
    font-size: 0.9em;
  }
  p:nth-of-type(2) {
    margin-top: 5px;
    position: relative;
    background-color: #eee;
    padding: 8px 12px;
    border-radius: 8px;
    border-top-left-radius: 0px;
    max-width: 300px;
    white-space: pre-line;
    :after {
      border-top: 8px solid #eee;
      border-left: 8px solid transparent;
      border-right: 0px solid transparent;
      border-bottom: 0px solid transparent;
      content: '';
      position: absolute;
      top: 0px;
      left: -8px;
    }
  }
`;

export const TextBlock = styled.div`
  margin-right: 30px;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  p {
    min-width: 1px;
    max-width: 300px;
    background-color: #eee;
    padding: 8px 12px;
    border-radius: 8px;
    white-space: pre-line;
    text-align: right;
  }
`;
