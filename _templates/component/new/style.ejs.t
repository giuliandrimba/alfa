---
to: src/components/<%= type %>s/<%= h.inflection.camelize(name, true) %>/styled.ts
---
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;
