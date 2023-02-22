import {css} from "@emotion/css";

export const Css = (type, disabled, colors) => {
    const {tertiary, helper_blue_3, secondary} = colors
    const style = {
        "desktop": css`
          width: 110px;
          height: 60px;
          border-radius: 20px;

          svg {
            height: auto;
            width: 35px;
          }
        `,
        "mobile": css`
          width: 48px;
          height: 40px;
          border-radius: 14px;

          svg {
            height: auto;
            width: 24px;
          }
        `
    }
    const staticStyle = css`
      display: flex;
      align-content: center;
      justify-content: center;
      background-color: ${tertiary.hex};

      svg {
        fill: ${!disabled ? secondary.hex : helper_blue_3.hex};
      }
    `

    return `${style[type]} ${staticStyle}`
}