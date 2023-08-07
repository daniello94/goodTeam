import { Link } from "react-router-dom";
import styles from "../styles/MyButtonAndMyLink.module.scss";

const MyLink = (props) => {
    return (
        <Link to={props.to} onClick={props.onClick} className={
            `
                ${styles.link}
                ${props.views && styles.views}
            `
        } style={props.style}>{props.children}</Link>
    )
}
export default MyLink;