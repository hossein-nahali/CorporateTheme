import {css} from "@emotion/css";

export const CenterText = (colors) => {
    const {primary, background, shadow_card_3, white, grey, black} = colors
    const style = css`
      padding: 35px;
      box-shadow: ${shadow_card_3};
      border-radius: 6px;
      max-width: calc(330px - 50px);
      background-color: ${white.hex};
      align-items: center;

      .icon {
        padding: 14px;
        display: flex;
        align-content: center;
        justify-content: center;
        border: 1px solid ${background.hex};
        border-radius: 12px;
        margin-bottom: 30px;
        width: fit-content;

        svg {
          fill: ${primary.hex};
          width: 42px;
          height: 42px;
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
        text-align: center;
        letter-spacing: -0.015em;
      }

      a {
        margin-top: 30px;
      }
    `

    return `${style}`
}
