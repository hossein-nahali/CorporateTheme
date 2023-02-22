import {useReducer} from "react";
import GeneralSettingThemeContext from "../Context/GeneralSettingThemeContext";
import GeneralSettingThemeReducer from "../Reducer/GeneralSettingThemeReducer";
import {GeneralSettingTheme} from "../DefaultValue/GeneralSettingTheme";

export const GeneralSettingThemeProvider = ({children}) => {
    const [state, dispatchState] = useReducer(GeneralSettingThemeReducer, {...GeneralSettingTheme});

    return (
        <GeneralSettingThemeContext.Provider value={{state, dispatchState}}>
            {children}
        </GeneralSettingThemeContext.Provider>
    );
};