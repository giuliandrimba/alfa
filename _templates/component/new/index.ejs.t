---
to: src/components/<%= type %>s/<%= h.inflection.camelize(name) %>/index.ts
---
import <%= h.capitalize(name) %> from './<%= h.capitalize(name) %>';

export default <%= h.capitalize(name) %>;
