import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
/* components and styles */
import styles from "../styles/BecomePartner.module.scss";
import anime from "../styles/Animation.module.scss";
import Container from "../components/Container";
import SecondHeader from "../components/SecondHeader";
import MyButton from "../components/MyButton";
import ForHeder from "../components/ForHeder";
import MyText from "../components/MyText";

export default function BecomePartner() {
    const { t, i18n } = useTranslation();
    const langueClass = i18n.language;
    // eslint-disable-next-line no-unused-vars
    const [isContentOneVisible, setContentOneVisible] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isContentOneVisibleTwo, setContentOneVisibleTwo] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isContentOneVisibleBtn, setContentOneVisibleBtn] = useState(false);
    const [animeBand, setBand] = useState("");
    const [animeSpeed, setSpeed] = useState("");
    const [animeBtn, setAnimeBtn] = useState(false);

    useEffect(() => {
        const handleVisibility = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setContentOneVisible(true);
                        setBand("speed");
                    } else {
                        setContentOneVisible(false);
                        setBand("");
                    }
                });
            });

            if (contentOneRef.current) {
                observer.observe(contentOneRef.current);
            }
            return observer;
        };
        const observer = handleVisibility();

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleVisibilityTwo = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setContentOneVisibleTwo(true)
                        setSpeed('rubberBand')
                    } else {
                        setContentOneVisibleTwo(false)
                        setSpeed("")
                    }
                });
            });
            if (contentOneRefTwo.current) {
                observer.observe(contentOneRefTwo.current);
            }
            return observer
        };
        const observer = handleVisibilityTwo();
        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const handleVisibilityBtn = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setContentOneVisibleBtn(true);
                        setAnimeBtn(true);
                    } else {
                        setContentOneVisibleBtn(false);
                        setAnimeBtn(false);
                    }
                });
            });
            if (contentOneRefBtn.current) {
                observer.observe(contentOneRefBtn.current);
            }
            return observer
        };
        const observer = handleVisibilityBtn();
        return () => {
            observer.disconnect();
        }
    }, [])

    const contentOneRef = useRef(null);
    const contentOneRefTwo = useRef(null);
    const contentOneRefBtn = useRef(null);
    return (
        <Container>
            <Container row={true}>
                <div className={`${styles.contentOne} ${anime[animeBand]}`}>
                    <div ref={contentOneRef} className={styles.textContent}>
                        <ForHeder h4Two={true}>{t("text.becomePartner.forHeder")}</ForHeder>
                        <SecondHeader>{t("text.becomePartner.secondHeaderOne")}</SecondHeader>
                        <MyText secondContent={true}>{t("text.becomePartner.textOne")}</MyText>
                    </div>
                </div>
                <div className={`${styles.contentTwo} ${anime[animeSpeed]} ${styles[`contentTwo${langueClass.charAt(0).toUpperCase() + langueClass.slice(1)}`]}`}>
                    <div ref={contentOneRefTwo} className={styles.textContent}>
                        <SecondHeader h2ContentTwo={true}>{t("text.becomePartner.secondHeaderTwo")}</SecondHeader>
                        <MyText secondContent={true}>{t("text.becomePartner.textTwo")}</MyText>
                    </div>
                </div>
            </Container>
            <div ref={contentOneRefBtn} className={styles.contentButton}>
                <MyButton title={t("text.menu.login")} style={{ opacity: '0' }} animation={animeBtn} btnOne={true}>{t("text.menu.login")}</MyButton>
                <MyButton title={t("tags.signUpText")} style={{ opacity: '0' }} animationTwo={animeBtn} btnOne={true}>{t("text.becomePartner.textBtn")}</MyButton>
            </div>
        </Container>
    );
}
