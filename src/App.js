import './App.scss';
import {GeneralSettingTheme} from "./DesignSystem/GeneralSettingTheme";
import {ControlsDirection} from "./DesignSystem/Components/ControlsDirection/Index";
function App() {
    GeneralSettingTheme()

    return (
        <div className="App">
            <header className="App-header">
                <ControlsDirection type={'mobile'} direction={'right'}/>
            </header>
        </div>
    );
}

export default App;
