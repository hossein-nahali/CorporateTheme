import {css} from "@emotion/css";

export const SmallCard = (colors) => {
    const {primary, black, white, grey, shadow_card_3} = colors
    const style = css`
      padding: 25px;
      box-shadow: ${shadow_card_3};
      border-radius: 6px;
      max-width: calc(255px - 50px);
      background-color: ${white.hex};

      .icon {
        padding: 14px;
        border-radius: 12px;
        margin-bottom: 20px;
        width: fit-content;

        svg {
          fill: ${primary.hex};
          width: 45px;
          height: 45px;
        }
      }

      h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: ${black.hex};
        letter-spacing: -0.015em;
        margin: 0 0 10px;
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
        margin-top: 15px;
      }
    `

    return `${style}`
}
