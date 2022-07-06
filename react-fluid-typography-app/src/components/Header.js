import styled from '@emotion/styled';
import styles from '../styles/fluid-font.module.css';

const StyledHeader = styled.h1``;

const Header = ({children, style}) => {
  return (
    <StyledHeader className={styles.fluidFont} style={{...style}}>
      {children}
    </StyledHeader>
  );
};

export {Header};
