import {Css} from "./Assets/css";
import {useContext} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";
import {ArrowLeft, ArrowRight} from "../../Icons/Index";

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