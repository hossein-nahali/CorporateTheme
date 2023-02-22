import './Assets/css'
import {cssBtn} from './Assets/css/index'
import {useContext} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";

export const Button = (props) => {
    // ⚡ types icon 👇👇 ⚡
    // fill
    // with-icon
    // with-icon-no-fill
    // with-icon-no-fill-big
    // little-button
    // circle-desktop
    // circle-mobile
    // icon-button-mobile
    // outlined-button-with-icon
    const {state} = useContext(GeneralSettingThemeContext)
    const {
        type = "fill",
        text,
        bgColor,
        bgColorHover,
        bgPressed,
        boxShadow,
        disabled,
        icon
    } = props;

    const css = cssBtn(type, bgColor, bgColorHover, boxShadow, bgPressed, disabled, state.colors)

    return (
        <div className={css}>
            <button disabled={disabled}>
                {text && text}
                {icon && icon}
            </button>
        </div>
    )
}