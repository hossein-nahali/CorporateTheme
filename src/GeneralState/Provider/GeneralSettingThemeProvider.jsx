import {useReducer} from "react";
import {GeneralSettingTheme} from "../DefaultValue/GeneralSettingTheme";
import {GeneralSettingThemeReducer, GeneralSettingThemeContext} from "./../Index";

export const GeneralSettingThemeProvider = ({children}) => {
    const [state, dispatchState] = useReducer(GeneralSettingThemeReducer, {...GeneralSettingTheme});

    return (
        <GeneralSettingThemeContext.Provider value={{state, dispatchState}}>
            {children}
        </GeneralSettingThemeContext.Provider>
    );
};