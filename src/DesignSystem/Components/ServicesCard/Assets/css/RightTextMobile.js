import {css} from "@emotion/css";

export const RightTextMobile = (colors, glassIcon) => {
    const {primary, background, black, white, grey, shadow_card_3} = colors
    const style = css`
      padding: 30px 25px;
      box-shadow: ${shadow_card_3};
      border-radius: 6px;
      max-width: calc(330px - 50px);
      background-color: ${white.hex};
      align-content: flex-start;

      .icon {
        padding: 9px;
        display: flex;
        align-content: center;
        justify-content: center;
        border: 1px solid ${background.hex};
        border-radius: 12px;
        margin-bottom: 20px;
        width: fit-content;

        svg {
          fill: ${!glassIcon ? primary.hex : ''};
          width: 36px;
          height: 36px;
          display: block;
        }
      }

      h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: ${black.hex};
        letter-spacing: -0.015em;
        margin: 0 0 16px;
        text-align: left;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        margin: 0;
        color: ${grey.hex};
        text-align: left;
        letter-spacing: -0.015em;
      }

      a {
        margin-top: 20px;
        justify-content: flex-start !important;
      }
    `

    return `${style}`
}
