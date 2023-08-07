import styles from "../styles/TextStyle.module.scss";

const MyHeder = (props) => {
    return (
        <h1 className={
            `${styles.heder}`
        }
        >{props.children}</h1>
    )
}
export default MyHeder;