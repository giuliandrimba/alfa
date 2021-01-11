import styled from 'styled-components';
import { Breakpoint } from 'src/data/styles/Breakpoint';
import { Type, TypeProps } from '../Type/styled';

export enum TypeParagraphSizes {
  XS,
  S,
  M,
  L,
  XL,
}

const textSizes = {
  [Breakpoint.XS]: {
    [TypeParagraphSizes.XS]: 150,
    [TypeParagraphSizes.S]: 150,
    [TypeParagraphSizes.M]: 150,
    [TypeParagraphSizes.L]: 150,
    [TypeParagraphSizes.XL]: 150,
  },
};

export const TypeParagraph = styled(Type).attrs<TypeProps>(() => ({
  sizes: textSizes,
}))<TypeProps>``;
