import {css} from "@emotion/css";

export const RightTextMobileLargeIcon = (colors, glassIcon) => {
    const {primary, black, grey} = colors
    const style = css`
      padding: 46px 35px;
      max-width: calc(330px - 50px);
      align-content: flex-start;

      .icon {
        margin-bottom: 20px;
        width: fit-content;

        svg {
          fill: ${!glassIcon ? primary.hex : ''};
          width: 84px;
          height: auto;
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
