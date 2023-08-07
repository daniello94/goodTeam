import React, { useState, useEffect, useRef} from "react";
import { useTranslation } from "react-i18next";
/* components and styles */
import styles from "../styles/OurOfferPage.module.scss";
import SecondHeader from "../components/SecondHeader";
import anime from "../styles/Animation.module.scss";
import Container from "../components/Container";
import ForHeder from "../components/ForHeder";
import MyText from "../components/MyText";
/* import media */
import iconDatBase from "../media/image/icons/4107785.png";
import iconPeople from "../media/image/icons/912318.png";
import iconPhone from "../media/image/icons/3842647.png";
import iconStar from "../media/image/icons/991999.png";
export default function OurOfferPage() {
    const { t, i18n } = useTranslation();
    const langueClass = i18n.language;
    const [nameAnimation, setNameAnimation] = useState('');
    const [topToBottom, setTopToBottom] = useState("");
    const [leftToRight, setLeftToRight] = useState("");
    const [rightToLeft, setRightToLeft] = useState("");
    const [bottomToTop, setBottomToTop] = useState("");

    useEffect(() => {
        const handleVisibility = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setNameAnimation('animateElement')
                    } else {
                        setNameAnimation('');
                    }
                })
            })
            if (contentRef.current) {
                observer.observe(contentRef.current)
            }
            return observer
        };
        const observer = handleVisibility()
        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const handleVisibility = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTopToBottom("animationTopToBottom");
                        setBottomToTop("animationBottomToTop");
                        setLeftToRight("animationLeftToRight");
                        setRightToLeft("animationRightToLeft");
                    } else {
                        setTopToBottom("");
                        setBottomToTop("");
                        setLeftToRight("");
                        setRightToLeft("");
                    }
                })
            })
            if (contentAnime.current) {
                observer.observe(contentAnime.current)
            }
            return observer
        };
        const observer = handleVisibility()
        return () => {
            observer.disconnect()
        }
    }, []);

    const contentRef = useRef(null);
    const contentAnime = useRef(null);
    return (
        <Container style={{ backgroundColor: 'black', color: 'white', overflow: "hidden" }}>
            <div ref={contentRef} className={`${styles.contentHederOfferPage} ${anime[nameAnimation]}`}>
                <SecondHeader>{t("text.ourOfferPage.secundHeader")}</SecondHeader>
                <MyText secondContent={true}>{t("text.ourOfferPage.myText")}</MyText>
            </div>
            <Container ref={contentAnime} style={{ backgroundColor: 'black' }} row={true} wrap={true}>
                <div id={styles.position1} className={`${styles.offerStyle} ${styles[`offerStyle${langueClass.charAt(0).toUpperCase() + langueClass.slice(1)}`]} ${anime[leftToRight]}`}>
                    <img src={iconDatBase} alt="iconBase" />
                    <div className={styles.textContent}>
                        <div className={styles.hederContent}>
                            <ForHeder h4Tree={true}>{t("text.ourOfferPage.blokOffer.dateBase.forHeader")} <br /><span>{t("text.ourOfferPage.blokOffer.dateBase.forHeaderBold")}</span></ForHeder>
                        </div>
                        <MyText secondContent={true}>{t("text.ourOfferPage.blokOffer.dateBase.myText")}</MyText>
                    </div>
                </div>
                <div id={styles.position2} className={`${styles.offerStyleTwo} ${styles[`offerStyleTwo${langueClass.charAt(0).toUpperCase() + langueClass.slice(1)}`]} ${anime[topToBottom]}`}>
                    <img src={iconPeople} alt="iconBase" />
                    <div className={styles.textContent}>
                        <div className={styles.hederContent}>
                            <ForHeder h4Tree={true}>{t("text.ourOfferPage.blokOffer.contactPeople.forHeader")} <br /><span>{t("text.ourOfferPage.blokOffer.contactPeople.forHeaderBold")}</span></ForHeder>
                        </div>
                        <MyText secondContent={true}>{t("text.ourOfferPage.blokOffer.contactPeople.myText")}</MyText>
                    </div>
                </div>
                <div id={styles.position3} className={`${styles.offerStyle} ${styles[`offerStyle${langueClass.charAt(0).toUpperCase() + langueClass.slice(1)}`]} ${anime[bottomToTop]}`}>
                    <img src={iconPhone} alt="iconBase" />
                    <div className={styles.textContent}>
                        <div className={styles.hederContent}>
                            <ForHeder h4Tree={true}>{t("text.ourOfferPage.blokOffer.communication.forHeader")} <br /><span>{t("text.ourOfferPage.blokOffer.communication.forHeaderBold")}</span></ForHeder>
                        </div>
                        <MyText secondContent={true}>{t("text.ourOfferPage.blokOffer.communication.myText")}</MyText>
                    </div>
                </div>
                <div id={styles.position4} className={`${styles.offerStyleTwo} ${styles[`offerStyleTwo${langueClass.charAt(0).toUpperCase() + langueClass.slice(1)}`]} ${anime[rightToLeft]}`}>
                    <img src={iconStar} alt="iconBase" />
                    <div className={styles.textContent}>
                        <div className={styles.hederContent}>
                            <ForHeder h4Tree={true}>{t("text.ourOfferPage.blokOffer.grade.forHeader")} <br /><span>{t("text.ourOfferPage.blokOffer.grade.forHeaderBold")}</span></ForHeder>
                        </div>
                        <MyText secondContent={true}>{t("text.ourOfferPage.blokOffer.grade.myText")}</MyText>
                    </div>
                </div>
            </Container>
        </Container>
    )
}