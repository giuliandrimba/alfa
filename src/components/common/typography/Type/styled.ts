import styled from 'styled-components';
import { Breakpoint } from 'src/data/styles/Breakpoint';

export type TypeProps = React.ComponentProps<any> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: {
    [name: string]: [value: number];
  };
  sizes?: {
    [key: string]: {
      [name: string]: [value: number];
    };
  };
};

const generateFontSizes = (props: TypeProps): string => {
  let css: string = ``;
  for (const [breakpointKey, breakpoints] of Object.entries(props.sizes)) {
    css += `@media screen and (min-width: ${breakpointKey}px) {`;
    for (const [sizeKey] of Object.entries(breakpoints)) {
      if (parseInt(sizeKey, 10) === parseInt(props.size, 10)) {
        const fontSize = (breakpoints as any)[sizeKey];
        css += `
        font-size: ${fontSize / 10}rem;
        `;
      }
    }
    css += `}`;
  }
  return css;
};

export const Type = styled.span`
  ${generateFontSizes}
`;
