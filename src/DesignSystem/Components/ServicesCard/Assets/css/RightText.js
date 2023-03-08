import {css} from "@emotion/css";

export const RightText = (colors, glassIcon) => {
    const {primary, background, black, white, grey, shadow_card_3} = colors
    const style = css`
      padding: 46px 35px;
      box-shadow: ${shadow_card_3};
      border-radius: 6px;
      max-width: calc(330px - 50px);
      background-color: ${white.hex};
      align-content: flex-start;

      .icon {
        padding: 14px;
        display: flex;
        align-content: center;
        justify-content: center;
        border: 1px solid ${background.hex};
        border-radius: 12px;
        margin-bottom: 20px;
        width: fit-content;

        svg {
          fill: ${!glassIcon ? primary.hex : ''};
          width: 42px;
          height: 42px;
          display: block;
        }
      }

      h3 {
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        color: ${black.hex};
        letter-spacing: -0.015em;
        margin: 0 0 16px;
        text-align: left;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        margin: 0;
        color: ${grey.hex};
        text-align: left;
        letter-spacing: -0.015em;
      }

      a {
        margin-top: 30px;
        justify-content: flex-start !important;
      }
    `

    return `${style}`
}
