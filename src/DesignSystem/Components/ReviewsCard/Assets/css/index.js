import {css} from "@emotion/css";

export const cssLink = (colors, type) => {
    const {grey, black, white, shadow_card_3} = colors

    const customCss = {
        "profile-inside": css`

          .profile {
            margin-bottom: 25px;
            display: flex;
            align-content: center;

            > div {
              display: flex;
              align-content: flex-start;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
              margin-left: 25px;
            }

            img {
              width: 80px;
              height: 80px;
              border-radius: 80px;
            }

            h4 {
              font-weight: 700;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: -0.015em;
              color: ${black.hex};
              margin: 0;
            }

            span {
              font-weight: 500;
              font-size: 14px;
              line-height: 24px;
              color: ${grey.hex};

              letter-spacing: -0.01em;
            }
          }
        `,
        "profile-outside": css`
          padding-top: 75px !important;
          position: relative;

          .profile {
            position: absolute;
            top: -40px;
          }

          p {
            margin-bottom: 35px !important;
          }

          .info {
            display: flex;
            align-content: flex-start;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            h4 {
              font-weight: 700;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: -0.015em;
              color: ${black.hex};
              margin: 0;
            }

            span {
              font-weight: 500;
              font-size: 14px;
              line-height: 24px;
              color: ${grey.hex};

              letter-spacing: -0.01em;
            }
          }
        `
    }

    const defaultStyle = css`
      max-width: calc(540px - 70px);
      padding: 35px;
      background: ${white.hex};
      box-shadow: ${shadow_card_3};
      display: flex;
      flex-direction: column;

      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: -0.015em;
        color: ${grey.hex};
        margin: 0;
        text-align: left;
      }

      .profile {
        img {
          width: 80px;
          height: 80px;
          border-radius: 80px;
        }
      }
    `

    return `${customCss[type]} ${defaultStyle}`

}
