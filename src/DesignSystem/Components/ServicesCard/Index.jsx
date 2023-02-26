import {useContext} from "react";
import {RightText, CenterText, StretchedRight, SmallCard, DefaultStyle} from './Assets/css/Index'
import {GeneralSettingThemeContext} from "../../../GeneralState/Index";
import {Link} from './../Index'
import {ArrowRight} from "../../Icons/Index";

export const ServicesCard = (props) => {
    // ⚡ types icon 👇👇 ⚡
    // right-text
    // center-text
    // stretched-right
    // small-card
    const {
        title = '',
        description = '',
        icon,
        type = 'right-text',
        textLink = '',
        href = ""
    } = props
    const {colors} = useContext(GeneralSettingThemeContext).state

    const css = (type) => {
        const styles = {
            "right-text": RightText(colors),
            "center-text": CenterText(colors),
            "stretched-right": StretchedRight(colors),
            "small-card": SmallCard(colors),
        }

        return styles[type]
    }

    return (
        <div className={`${DefaultStyle(colors)} ${css(type)}`}>
            {icon && <div className="icon"> {icon}</div>}
            <h3>{title}</h3>
            <p>{description}</p>
            {textLink && <Link text={textLink} href={href} icon={<ArrowRight/>}/>}
        </div>
    )
}