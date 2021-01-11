import styled from 'styled-components';
import { Breakpoint } from 'src/data/styles/Breakpoint';
import { Type, TypeProps } from '../Type/styled';

export enum TypeHeadingSizes {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

const textSizes = {
  [Breakpoint.XS]: {
    [TypeHeadingSizes.H1]: 150,
    [TypeHeadingSizes.H2]: 150,
    [TypeHeadingSizes.H3]: 150,
    [TypeHeadingSizes.H4]: 150,
    [TypeHeadingSizes.H5]: 150,
    [TypeHeadingSizes.H6]: 150,
  },
};

export const TypeHeading = styled(Type).attrs<TypeProps>(() => ({
  sizes: textSizes,
}))<TypeProps>``;
