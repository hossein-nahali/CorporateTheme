import {cssLink} from "./Assets/css";
import {useContext} from "react";
import GeneralSettingThemeContext from "../../../GeneralState/Context/GeneralSettingThemeContext";

export const ReviewsCard = (props) => {
    // ⚡ types 👇👇 ⚡
    // profile-outside
    // profile-inside
    const {
        profile = '',
        name = '',
        description = '',
        jobPosition = '',
        type = "profile-inside"
    } = props
    const {colors} = useContext(GeneralSettingThemeContext).state

    const css = cssLink(colors, type)

    const showProfile = () => {
        const profile_image = () => {
            const typeProfile = {
                "profile-inside": <div className="profile">
                    <img src={profile} alt="profile"/>
                    <div>
                        <h4>{name}</h4>
                        <span>{jobPosition}</span>
                    </div>
                </div>,
                "profile-outside": <div className={'profile'}><img src={profile} alt="profile"/></div>
            }

            return typeProfile[type]
        }

        const showInfo = () => {
            const typeInfo = {
                "profile-inside": '',
                "profile-outside":
                    <div className={'info'}>
                        <h4>{name}</h4>
                        <span>{jobPosition}</span>
                    </div>
            }

            return typeInfo[type]
        }

        return {profile_image, showInfo}
    }

    return (
        <div className={css}>
            {showProfile().profile_image()}
            <p>{description}</p>
            {showProfile().showInfo()}
        </div>
    )
}