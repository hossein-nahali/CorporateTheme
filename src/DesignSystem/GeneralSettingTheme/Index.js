import {ThemeMode} from "./Functions/ThemeMode";
import {useEffect} from "react";

export const GeneralSettingTheme = () => {

    ThemeMode()

    useEffect(() => {
        if (!localStorage?.theme) {
            localStorage.setItem('theme','light')
        }
    }, [])
}