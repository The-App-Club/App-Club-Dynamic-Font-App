import styled from '@emotion/styled';
import {css} from '@emotion/css';

const StyledContainer = styled.div`
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  pre {
    font-size: 1rem;
    font-weight: 800;
  }
`;

const Pudding = ({family, category, choicedFont}) => {
  return (
    <StyledContainer
      className={css`
        font-family: '${family}', ${category};
      `}
    >
      <p>
        abcdefghijklmnopqrstuvwxyz
        <br />
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        0123456789.:,;()*!?'@#&lt;&gt;$%&^+-=~
      </p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <pre>
        <code>{JSON.stringify(choicedFont, null, 2)}</code>
      </pre>
    </StyledContainer>
  );
};

export {Pudding};
