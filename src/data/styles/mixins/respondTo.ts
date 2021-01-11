export const minWidth = (breakpoint: number) => {
  return `@media screen and (min-width: ${breakpoint}px)`;
};

export const maxWidth = (breakpoint: number) => {
  return `@media screen and (max-width: ${breakpoint}px)`;
};
