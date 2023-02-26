import {css} from "@emotion/css";

export const StretchedRight = (colors) => {
    const {primary, shadow_card_3, white, grey, black} = colors

    const style = css`
      padding: 20px 35px;
      box-shadow: ${shadow_card_3};
      border-radius: 6px;
      max-width: calc(540px - 70px);
      background-color: ${white.hex};
      align-items: flex-start;

      .icon {
        border-radius: 12px;
        margin-bottom: 20px;
        width: fit-content;

        svg {
          fill: ${primary.hex};
          width: 80px;
          height: auto;
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
        letter-spacing: -0.015em;
        text-align: left;
      }

      a {
        margin-top: 20px;
      }
    `

    return `${style}`
}
