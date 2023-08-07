import styles from "../styles/MyButtonAndMyLink.module.scss";
import anime from "../styles/Animation.module.scss"
const MyButton = (props) => {
    return (
        <button className={
            `
            ${styles.btn}
            ${props.btnOne && styles.btnOne}
            ${props.animation && anime.animeBtn}
            ${props.animationTwo && anime.animeBtnTwo}
        `
        } style={props.style} onClick={props.onClick} title={props.title} >{props.children}</button>
    )
}
export default MyButton;