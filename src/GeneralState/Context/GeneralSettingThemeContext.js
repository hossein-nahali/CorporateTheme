import {createContext} from 'react';
import {GeneralSettingTheme} from "../DefaultValue/GeneralSettingTheme";

const GeneralSettingThemeContext = createContext({...GeneralSettingTheme})

export default GeneralSettingThemeContext;