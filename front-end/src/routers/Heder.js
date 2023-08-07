import React from "react";
import { useTranslation } from "react-i18next";
/* components and styles */
import anime from "../styles/Animation.module.scss";
import styles from "../styles/Heder.module.scss";
import Container from "../components/Container";
import ForHeder from "../components/ForHeder";
import MyHeder from "../components/MyHeder";
import MyText from "../components/MyText";
/* components */
export default function Heder() {
    const { t } = useTranslation();
    return (
        <Container secundContainer={true} >
            <div className={styles.opacity}></div>
            <div className={styles.contentText}>
                <span className={`${styles.iconLeft} ${anime.iconLeft}`}>{"["}</span>
                <div className={`${styles.text} ${anime.text}`}>
                    <ForHeder>{t("text.header.forHeader")}</ForHeder>
                    <MyHeder>{t("text.header.myHeader")}</MyHeder>
                    <MyText>{t("text.header.myText")}</MyText>
                </div>
                <span className={`${styles.iconRight} ${anime.iconRight}`}>{"]"}</span>
            </div>
        </Container>
    )
}