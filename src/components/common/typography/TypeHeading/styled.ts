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

export const TypeHeading = styled(Type).attrs<TypeProps>((props: any) => ({
  sizes: props.theme.headings,
}))<TypeProps>``;
