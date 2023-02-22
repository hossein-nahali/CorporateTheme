import {Css} from "./Assets/css";
import {Arrow_left} from "../../Icons/arrow_left";
import {Arrow_right} from "../../Icons/arrow_right";
import {useContext} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";

export const ControlsDirection = (props) => {
    const {state} = useContext(GeneralSettingThemeContext)
    const {
        type = "desktop",
        disabled,
        direction = 'left'
    } = props

    const GenerateIcon = () => {
        const icons = {
            left: <Arrow_left/>,
            right: <Arrow_right/>
        }

        return icons[direction]
    }

    const css = Css(type, disabled, state.colors)

    return (
        <div className={css}>
            <GenerateIcon/>
        </div>
    )
}