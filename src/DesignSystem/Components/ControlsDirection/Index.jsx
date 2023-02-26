import {Css} from "./Assets/css";
import {ArrowLeft} from "../../Icons/ArrowLeft";
import {ArrowRight} from "../../Icons/ArrowRight";
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
            left: <ArrowLeft/>,
            right: <ArrowRight/>
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