import {css} from "@emotion/css";

export const cssTag = (colors, isDisabled) => {
    const {primary, background, transition, white, grey} = colors
    const style = css`
      height: 30px;

      a {
        display: flex;
        align-content: center;
        justify-content: center;
        height: 100%;
        position: relative;
        padding-right: 11px;
        padding-left: 11px;
        box-shadow: inset 0 0 0 1px ${background.hex};
        transition: ${transition};
        border-radius: 6px;
        user-select: none;
        text-decoration: none;
        transition: ${transition};
        font-weight: 800;
        font-size: 14px;
        color: ${!isDisabled ? primary.hex : grey.hex};
        background: none;
        pointer-events: ${!isDisabled ? 'all' : 'none'};

        &:hover {
          background-color: ${!isDisabled ? primary.hex : ''};
          color: ${!isDisabled ? white.hex : ''};
          box-shadow: ${!isDisabled ? 'inherit' : 'inset 0 0 0 1px ${background.hex'};
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    `

    return `${style}`

}
