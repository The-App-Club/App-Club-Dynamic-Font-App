import styled from '@emotion/styled';

const StyledSampleText = styled.h1``;

const SampleText = ({children, attachedFont}) => {
  // https://fonts.google.com/specimen/Kosugi
  const renderSampleText = ({attachedFont}) => {
    switch (attachedFont) {
      case 'Kosugi':
        return (
          <StyledSampleText
            style={{
              fontFamily: `"Kosugi", sans-serif`,
            }}
          >
            {'This is a sample text...'}
          </StyledSampleText>
        );
        break;

      default:
        return (
          <StyledSampleText
            style={{
              fontFamily: `sans-serif`,
            }}
          >
            {'This is a sample text...'}
          </StyledSampleText>
        );
        break;
    }
  };

  return <>{renderSampleText({attachedFont})}</>;
};

export {SampleText};
