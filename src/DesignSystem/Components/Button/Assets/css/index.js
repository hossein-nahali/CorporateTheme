import {css} from "@emotion/css";

export const cssBtn = (type, bgColor, bgColorHover, boxShadow, bgPressed, disabled, colors) => {
    const {primary, black, white, hover_primary, grey, shadow_button} = colors

    const style = {
        "fill": css`
          button {
            min-width: 190px;
            height: 54px;
            cursor: pointer;
            color: ${white.hex};
            box-shadow: ${boxShadow ? boxShadow : shadow_button};
            border-radius: 6px;
            background-color: ${bgColor ? bgColor : primary.hex};
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;

            svg {
              fill: ${white.hex};
            }

            &:hover {
              background-color: ${bgColorHover ? bgColorHover : hover_primary.hex};
            }

            &:active {
              background-color: ${bgPressed ? bgPressed : primary.hex};
            }

            &:disabled {
              background-color: #9497A1;
              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "outlined-button-with-icon": css`
          button {
            min-width: 328px;
            height: 54px;
            cursor: pointer;
            color: ${primary.hex};
            border-radius: 6px;
            background: none;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            border: 1px solid ${primary.hex} !important;

            svg {
              fill: ${primary.hex};
              width: 32px !important;
              height: 32px !important;
            }

            &:disabled {
              border: 1px solid ${grey.hex} !important;
              color: ${grey.hex} !important;

              svg {
                fill: ${grey.hex} !important;
              }

              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "with-icon": css`
          button {
            min-width: 100%;
            height: 44px;
            cursor: pointer;
            color: ${white.hex};
            box-shadow: ${boxShadow ? boxShadow : shadow_button};
            border-radius: 6px;
            background-color: ${bgColor ? bgColor : primary.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            padding: 10px 14px;

            svg {
              fill: ${white.hex};
            }

            &:hover {
              background-color: ${bgColorHover ? bgColorHover : hover_primary.hex};
            }

            &:active {
              background-color: ${bgPressed ? bgPressed : primary.hex};
            }

            &:disabled {
              background-color: ${grey.hex};
              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "little-button": css`
          button {
            min-width: 137px;
            height: 44px;
            cursor: pointer;
            color: ${white.hex};
            border-radius: 6px;
            background-color: ${bgColor ? bgColor : primary.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            padding: 10px 14px;

            svg {
              fill: ${white.hex};
            }

            &:active {
              background-color: ${bgPressed ? bgPressed : primary.hex};
            }

            &:disabled {
              background-color: ${grey.hex};
              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "circle-desktop": css`
          min-width: 120px;
          height: 120px;
          background-color: ${!disabled ? bgColor ? bgColor : primary.hex : grey.hex};
          border-radius: 120px;
          padding: 0 !important;

          &:hover {
            background-color: ${!disabled ? bgColorHover ? bgColorHover : hover_primary.hex : ''};
          }

          button {
            cursor: pointer;
            color: ${white.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            padding: 10px 14px;
            background: none;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            border-radius: 120px;
            border: 1px solid rgb(${white.rgb}, 0.40) !important;

            svg {
              fill: ${white.hex};
            }

            &:active {
              background-color: ${bgPressed ? bgPressed : primary.hex};
            }

            &:disabled {
              background-color: ${grey.hex};
              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "circle-mobile": css`
          min-width: 100px;
          height: 100px;
          background-color: ${!disabled ? bgColor ? bgColor : primary.hex : grey.hex};
          border-radius: 120px;
          padding: 0 !important;

          &:hover {
            background-color: ${!disabled ? bgColorHover ? bgColorHover : hover_primary.hex : ''};
          }

          button {
            cursor: pointer;
            color: ${white.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            padding: 10px 14px;
            background: none;
            width: calc(100% - 15px);
            height: calc(100% - 15px);
            border-radius: 120px;
            border: 1px solid rgb(${white.rgb}, 0.40) !important;

            svg {
              fill: ${white.hex};
            }

            &:active {
              background-color: ${bgPressed ? bgPressed : primary.hex};
            }

            &:disabled {
              background-color: ${grey.hex};
              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "with-icon-no-fill": css`
          button {
            min-width: 100%;
            padding: 10px 14px;
            height: 45px;
            cursor: pointer;
            color: ${black.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            background: none;

            svg {
              width: 24px;
              height: 24px;
              margin-right: 14px;
              fill: ${black.hex};
            }

            &:hover {
              color: ${primary.hex};

              svg {
                fill: ${primary.hex};
              }
            }

            &:disabled {
              cursor: unset;
              box-shadow: none;
              color: ${grey.hex};

              svg {

                fill: ${grey.hex};
              }
            }
          }
        `,
        "with-icon-no-fill-big": css`
          button {
            min-width: 218px;
            height: 54px;
            cursor: pointer;
            color: ${black.hex};
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            background: none;

            svg {
              width: 24px;
              height: 24px;
              margin-right: 14px;
              fill: ${black.hex};
            }

            &:hover {
              color: ${primary.hex};

              svg {
                fill: ${primary.hex};
              }
            }

            &:disabled {
              cursor: unset;
              box-shadow: none;
              color: ${grey.hex};

              svg {

                fill: ${grey.hex};
              }
            }
          }
        `,
        "icon-button-mobile": css`
          button {
            min-width: 84px;
            height: 54px;
            cursor: pointer;
            color: ${white.hex};
            border-radius: 6px;
            background-color: ${bgColor ? bgColor : primary.hex};
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            padding: 10px 14px;

            &:hover {
              background-color: ${bgColorHover ? bgColorHover : hover_primary.hex};
            }

            svg {
              fill: ${white.hex};
              margin: 0 !important;
            }

            &:active {
              background-color: ${bgPressed ? bgPressed : primary.hex};
            }

            &:disabled {
              background-color: ${grey.hex};
              cursor: unset;
              box-shadow: none;
            }
          }
        `,
        "s": css`
          button {
            min-width: 218px;
            height: 54px;
            cursor: pointer;
            color: ${black.hex};
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            background: none;

            svg {
              width: 24px;
              height: 24px;
              margin-right: 14px;
              fill: ${black.hex};
            }

            &:hover {
              color: ${primary.hex};

              svg {
                fill: ${primary.hex};
              }
            }

            &:disabled {
              cursor: unset;
              box-shadow: none;
              color: ${grey.hex};

              svg {

                fill: ${grey.hex};
              }
            }
          }
        `
    }

    const staticCss = css`
      padding: 10px 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .3s ease;

      button {
        transition: all .3s ease;
        border: none;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: center;

        svg {
          width: 24px;
          height: 24px;
          margin-right: 14px;
          transition: all .3s ease;
        }
      }
    `

    return `${staticCss} ${style[type]}`
}
