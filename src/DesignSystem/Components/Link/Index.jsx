import {cssLink} from "./Assets/css";
import {useContext} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";

export const Link = (props) => {
    // ⚡ types icon 👇👇 ⚡
    // default-link
    // header-light
    // header-dark
    // footer
    // menu-mobile
    const {
        text = '',
        href = '#',
        icon,
        disabled = false,
        type = 'default-link'
    } = props
    const {colors} = useContext(GeneralSettingThemeContext).state

    const css = cssLink(colors, type, disabled)

    return (
        <div className={css}>
            <a href={href}><span>{text && text}</span> {icon && icon}</a>
        </div>
    )
}