import styles from "../styles/TextStyle.module.scss"
import { useTranslation } from 'react-i18next';
const SecondHeader = (props) => {
    const { i18n } = useTranslation();
    const languageClass = i18n.language;
    return (
        <h2 className={
            `
        ${styles.h2}
        ${styles.h2 && styles[`h2${languageClass.charAt(0).toUpperCase() + languageClass.slice(1)}`]}
        ${props.h2ContentTwo && styles.h2ContentTwo}
        ${props.h2ContentTwo && styles[`h2ContentTwo${languageClass.charAt(0).toUpperCase() + languageClass.slice(1)}`]}

        `
        }>{props.children}</h2>
    )
}
export default SecondHeader;