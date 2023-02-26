import {css} from "@emotion/css";

export const cssLink = (colors, type, isDisabled) => {
    const {primary, secondary, grey, black, white, helper_blue_3, tertiary} = colors

    const underline = css`
      &:after {
        content: "";
        bottom: 0;
        height: 2px;
        position: absolute;
        right: 0;
        left: 0;
        background-color: ${white.hex};
        border-radius: 5px;
        transform-origin: bottom left;
        transition: all .3s ease;
      }
    `

    const customCss = {
        "default-link": css`
          a {
            color: ${!isDisabled ? primary.hex : grey.hex};
            font-weight: 600;
            font-size: 14px;
            display: flex;
            align-content: center;
            justify-content: center;
            height: 24px;
            pointer-events: ${isDisabled ? 'none' : 'all'};


            span {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            svg {
              width: 20px;
              height: 20px;
              transition: all .3s ease;
              fill: ${!isDisabled ? primary.hex : grey.hex};
              margin-top: 3px;
              margin-left: 5px;
            }

            &:hover {
              color: ${!isDisabled ? secondary.hex : grey.hex};

              svg {
                fill: ${!isDisabled ? secondary.hex : grey.hex};
                transform: translateX(3px);
              }
            }
          }
        `,
        "header-light": css`
          a {
            color: ${!isDisabled ? black.hex : grey.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;

            svg {
              display: none;
            }

            &:hover {
              color: ${!isDisabled ? black.hex : grey.hex};
            }
          }
        `,
        "header-dark": css`
          ${underline}
          a {
            color: ${!isDisabled ? white.hex : grey.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;

            svg {
              display: none;
            }
          }

          &:hover {
            a {
              color: ${!isDisabled ? `rgba(${white.rgb},0.70)` : grey.hex};
            }

            &:after {
              transform: scaleX(0);
            }
          }
        `,
        "footer": css`
          a {
            color: ${!isDisabled ? grey.hex : grey.hex};
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;

            svg {
              display: none;
            }
          }

          &:hover {
            a {
              color: ${!isDisabled ? helper_blue_3.hex : grey.hex};
            }
          }
        `,
        "menu-mobile": css`
          a {
            color: ${!isDisabled ? tertiary.hex : grey.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            display: flex;
            align-content: center;
            justify-content: center;
            
            svg {
              width: 20px;
              height: 20px;
              transition: all .3s ease;
              fill: ${!isDisabled ? tertiary.hex : grey.hex};
              margin-top: 3px;
              margin-left: 5px;
            }
          }

          &:hover {
            a {
              color: ${!isDisabled ? tertiary.hex : grey.hex};
            }

            svg {
              fill: ${!isDisabled ? tertiary.hex : grey.hex};
              transform: translateX(3px);
            }
          }
        `,
    }

    const defaultStyle = css`
      position: relative;

      a {
        user-select: none;
        text-decoration: none;
        transition: all .3s ease;
      }
    `

    return `${customCss[type]} ${defaultStyle}`

}
