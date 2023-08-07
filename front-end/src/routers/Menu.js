import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
/* components styles and icons */
import { BiMenu, BiX, BiLogOut, BiGridAlt, BiRightArrowAlt } from "react-icons/bi";
import Container from "../components/Container";
import styles from "../styles/Menu.module.scss";
import MyButton from "../components/MyButton";
import MyLink from "../components/MyLink";

export default function Menu(props) {
    const [secondMenu, setSecondMenu] = useState("off");
    const [mainMenu, setMainMenu] = useState("menu");
    const [isActive, setActive] = useState("close");
    const [showIcon, setShowIcon] = useState(true);
    const [isClose, setClose] = useState("open");
    const [mainButton, setButton] = useState("");
    const [viewsMenu, setMenu] = useState(true);
    const { t } = useTranslation();

    const menuHamburgerStan = () => {
        if (isActive === "open") {
            setActive("close")
            setClose("open")
        } else if (isActive === "close") {
            setActive("open")
            setClose("close")
        }
    };
    useEffect(() => {
        const updateMenuState = () => {
            if (window.matchMedia("(max-width: 567px)").matches) {
                setMenu(false);
                setSecondMenu("");
                setButton('off')
                setMainMenu('viewsMenu');
                setShowIcon(false);
            } else {
                setMenu(false);
                setSecondMenu("off");
                setButton("")
                setMainMenu('menu');
                setShowIcon(false);
                setActive("close");
                setClose("open");
            }
        };
        updateMenuState();
        window.addEventListener("resize", updateMenuState);
        return () => window.removeEventListener("resize", updateMenuState);
    }, []);

    return (
        <Container>
            {props.isLeagueSelector === false && (
                <nav className={styles.mainNav}>
                    <div className={styles[isClose]} onClick={() => {
                        menuHamburgerStan()
                    }}>
                        <BiMenu title={t("tags.open")} className={styles.iconOpen} />
                    </div>
                    <div className={styles[isActive]} >
                        <div className={styles.contentOpenMenu}>
                            <div className={styles.closeMobile} onClick={() => menuHamburgerStan()}>
                                <BiX title={t("tags.closed")} className={styles.iconClose} />
                            </div>
                            <ul className={styles[mainMenu]}>
                                <li className={styles[secondMenu]}> <BiRightArrowAlt onClick={() => {
                                    setMenu(true);
                                    setSecondMenu("off");
                                    setButton("")
                                    setMainMenu('menu');
                                    setShowIcon(true)
                                }} className={styles.iconBack} title={t('tags.two')} /></li>
                                <li><MyLink to={"/"}>{t("text.menu.one")}</MyLink></li>
                                {!props.user && (
                                    <li><MyLink to={"/"}>{t("text.menu.two")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li><MyLink>{t("text.menu.tree")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li><MyLink>{t("text.menu.for")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li><MyLink>{t("text.menu.five")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li><MyLink>{t("text.menu.six")}</MyLink></li>
                                )}
                                {!props.user && (
                                    <li><MyButton title={t("text.menu.login")}>{t('text.menu.login')}</MyButton></li>
                                )}
                                <li> <MyButton title={t("text.menu.langue")} onClick={() => props.setIsLeagueSelector(true)}>{t("text.menu.langue")}</MyButton></li>
                                {props.user && (
                                    <li className={styles[mainButton]}><MyButton onClick={() => {
                                        setMenu(false);
                                        setSecondMenu("");
                                        setButton('off')
                                        setMainMenu('viewsMenu');
                                        setShowIcon(false)
                                    }}><BiGridAlt className={styles.moreIcon} title={t("tags.one")} /></MyButton></li>
                                )}
                                {props.user && (
                                    <li className={styles[secondMenu]}><MyLink views={viewsMenu}>{t("text.menu.seven")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li className={styles[secondMenu]}><MyLink views={viewsMenu}>{t("text.menu.eight")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li className={styles[secondMenu]}><MyLink views={viewsMenu}>{t("text.menu.nine")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li className={styles[secondMenu]}><MyLink views={viewsMenu}>{t("text.menu.ten")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li className={styles[secondMenu]}><MyLink views={viewsMenu}>{t("text.menu.eleven")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li className={styles[secondMenu]}><MyLink views={viewsMenu}>{t("text.menu.twelve")}</MyLink></li>
                                )}
                                {props.user && (
                                    <li><MyButton title={t("text.menu.logOut")}>{showIcon ? <BiLogOut className={styles.iconLogOut} /> : t("text.menu.logOut")} </MyButton></li>
                                )}
                            </ul>

                        </div>
                    </div>
                </nav>
            )}
        </Container>
    )
}