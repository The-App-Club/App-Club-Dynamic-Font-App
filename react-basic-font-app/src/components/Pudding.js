import styled from '@emotion/styled';

const StyledContainer = styled.div`
  @font-face {
    font-family: 'Great Vibes';
    src: url('/fonts/GreatVibes-Regular.woff2') format('woff2'),
      url('/fonts/GreatVibes-Regular.woff') format('woff'),
      url('/fonts/GreatVibes-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  font-family: 'Great Vibes';
  font-weight: normal;
  font-style: normal;
  font-size: 34px;
`;

const Pudding = ({children}) => {
  return (
    <StyledContainer>
      <p>
        abcdefghijklmnopqrstuvwxyz
        <br />
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        0123456789.:,;()*!?'@#&lt;&gt;$%&^+-=~
      </p>
      <p>The quick brown fox jumps over the lazy dog.</p>
    </StyledContainer>
  );
};

export {Pudding};
