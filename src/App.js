import './App.scss';
import {GeneralSettingTheme} from "./DesignSystem/GeneralSettingTheme";
import {Link} from "./DesignSystem/Components/Link";
import {ArrowLeft} from "./DesignSystem/Icons/ArrowLeft";

function App() {
    GeneralSettingTheme()

    return (
        <div className="App">
            <header className="App-header">
                <Link text={'Read more'} icon={<ArrowLeft/>} href={'#'}/>
            </header>
        </div>
    );
}

export default App;
