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
    // tab-small
    // tab-small-no-fill
    // tab-large
    // tab-large-no-fill
    // tab-large-mobile
    // tab-large-no-fill-mobile
    const {colors} = useContext(GeneralSettingThemeContext).state
    const {
        type = "fill",
        text,
        bgColor,
        bgColorHover,
        bgPressed,
        boxShadow,
        disabled,
        icon,
        href = '',
        typeTag = 'button'
    } = props;

    const css = cssBtn(type, bgColor, bgColorHover, boxShadow, bgPressed, disabled, colors)

    const TagType = (typeTag) => {
        const tagType = {
            "link": <a href={href}>{text && text}{icon && icon}</a>,
            "button": <button disabled={disabled}>{text && text}{icon && icon}</button>
        }

        return tagType[typeTag]
    }

    return (
        <div className={css}>
            {TagType(typeTag)}
        </div>
    )
}