import {GeneralSettingTheme} from "../DefaultValue/GeneralSettingTheme";

export default function GeneralSettingThemeReducer(prevState = GeneralSettingTheme, action) {
    switch (action.type) {
        case "InitColor":
            return {
                ...prevState,
                colors: {
                    ...action.payload
                },
            }

        default:
            return prevState
    }
}