import styles from "../styles/TextStyle.module.scss";
import { useTranslation } from 'react-i18next';

const ForHeder = (props) => {
    const { i18n } = useTranslation();
    const languageClass = i18n.language;
    return (
        <h4 className={
            `
            ${styles.h4}
            ${props.h4Two && styles.h4Two}
            ${props.h4Tree && styles.h4Tree}
            ${props.bottomFive && styles.bottomFive}
            ${props.h4Two && styles[`h4Two${languageClass.charAt(0).toUpperCase() + languageClass.slice(1)}`]}
            ${props.h4Tree && styles[`h4Tree${languageClass.charAt(0).toUpperCase() + languageClass.slice(1)}`]}
            `
        }>{props.children}</h4>
    )
}
export default ForHeder;
