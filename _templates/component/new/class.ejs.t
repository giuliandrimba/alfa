---
to: src/components/<%= type %>s/<%= h.inflection.camelize(name, true) %>/<%= h.capitalize(name) %>.tsx
---
import React from 'react';
import { Container } from './styled';

export interface <%= h.capitalize(name) %>Props { className?: string };

export default (props: <%= h.capitalize(name) %>Props) => {
  return (
    <Container className={props.className}>
    </Container>
  )
}


