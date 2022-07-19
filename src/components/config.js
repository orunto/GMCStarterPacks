export const breakpoints = [576, 768, 992, 1200, 1400];

export const device = {
    small: `@media screen and (max-width: ${breakpoints[0]}px)`,
    medium: `@media screen and (min-width: ${breakpoints[1]}px)`,
    large: `@media screen and (min-width: ${breakpoints[2]}px)`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]}px)`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]}px)`,
    mdToLg: `@media (min-width: 768px) and (max-width: 991px)`,
    lgToXl: `@media (min-width: 992px) and (max-width: 1199px)`,
};