import {cssTag} from "./Assets/css";
import {useContext} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";

export const Tag = (props) => {
    const {
        text = '',
        href = '#',
        disabled = false,
    } = props
    const {colors} = useContext(GeneralSettingThemeContext).state

    const css = cssTag(colors, disabled)

    return (
        <div className={css}>
            <a href={href}><span>{text && text}</span></a>
        </div>
    )
}