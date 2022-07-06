import styled from '@emotion/styled';

const StyledFontSelector = styled.select``;

const StyledFontSelectorOption = styled.option``;

const FontSelector = ({handleChange}) => {
  return (
    <StyledFontSelector onChange={handleChange}>
      {['default', 'Kosugi'].map((item, index) => {
        return (
          <StyledFontSelectorOption key={index} value={item}>
            {item}
          </StyledFontSelectorOption>
        );
      })}
    </StyledFontSelector>
  );
};

export {FontSelector};
