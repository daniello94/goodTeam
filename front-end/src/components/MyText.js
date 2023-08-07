import styles from "../styles/TextStyle.module.scss";

const MyText = (props) => {
    return (
        <p className={
            `
            ${styles.text}
            ${props.secondContent && styles.secondContent}
            `
        }
        >{props.children}</p>
    )
}
export default MyText;