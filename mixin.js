/*=====================Mixin styled component =================*/

/*----------- Mixin truncate ----*/

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}


/*---- Media breakpoints mixin ---*/

export const media = {
  mobie: (...args) => css`
    @media (min-width: 476px) {
      ${ css(...args) }
    }
  `
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${ css(...args) }
    }
  `
  desktop: (...args) => css`
    @media (min-width: 1024px) {
      ${ css(...args) }
    }
  `
}

/*---- Transform mixin ---*/

export function transform(property) {
  return `
    -webkit-transform: ${property};
	-moz-transform: ${property};
	-ms-transform: ${property};
	transform: ${property};
  `;
}

/*---- border-radius mixin ---*/

export function radius(radius) {
  return `
    -webkit-border-radius: ${radius};
    -moz-border-radius: ${radius};
    -ms-border-radius: ${radius};
    border-radius: ${radius};
  `;
}
