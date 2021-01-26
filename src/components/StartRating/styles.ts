import styled from 'styled-components';

export const sizes = {
  small: 1,
  normal: 1.5,
  large: 2
};

export const Start = styled.label<{
  isSelected: boolean;
  size: keyof typeof sizes;
}>`
  display: inline-block;
  padding: 4px 4px 4px 0;
  vertical-align: middle;
  line-height: 1;
  font-size: ${({ size }) => sizes[size]}em;
  color: ${({ isSelected }) => (isSelected ? '#ffd700' : '#ababab')};
  transition: color 0.2s ease-out;

  &:hover {
    cursor: pointer;
  }
`;
