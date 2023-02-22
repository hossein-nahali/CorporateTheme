import {useContext, useEffect} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";
import {ColorTheme} from "./ColorTheme";

export const ThemeMode = () => {
    const {dispatchState} = useContext(GeneralSettingThemeContext)
    const colors = ColorTheme[localStorage?.theme]

    useEffect(() => {
        dispatchState({type: "InitColor", payload: {...colors}})
    }, [])
}