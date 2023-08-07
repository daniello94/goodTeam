import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
/* component and style */
import styles from "../styles/MainProfessions.module.scss";
import SecondHeder from "../components/SecondHeader";
import anime from "../styles/Animation.module.scss";
import Container from "../components/Container";
import ForHeder from "../components/ForHeder";
import MyText from "../components/MyText";
/* media */
import iconVentilation from "../media/image/icons/10860617.png";
import iconSpecial from "../media/image/icons/11062035.png";
import iconBuilding from "../media/image/icons/4631533.png";
import iconElectric from "../media/image/icons/3467269.png";
import iconPlumber from "../media/image/icons/2997155.png";
import iconTiler from "../media/image/icons/1928768.png";
const offers = [
    {
        name: "offerOne",
        icon: iconBuilding,
    },
    {
        name: "offerTwo",
        icon: iconElectric,
    },
    {
        name: "offerTree",
        icon: iconPlumber,
    },
    {
        name: "offerFor",
        icon: iconVentilation,
    },
    {
        name: "offerFive",
        icon: iconSpecial,
    },
    {
        name: "offerSix",
        icon: iconTiler,
    },
];

export default function MainProfessions() {
    const { t } = useTranslation();
    const [animeHeader, setAnimeHeader] = useState("");
    const [animeOffers, setAnimeOffers] = useState(new Array(offers.length).fill(''));
    const offerRefs = useRef(offers.map(() => React.createRef()));
    const headerRef = useRef(null);
    useEffect(() => {
        const handleAnimeHeader = () => {
            const observer = new IntersectionObserver((entires) => {
                entires.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimeHeader("animeFadeIn");
                    } else {
                        setAnimeHeader("");
                    }
                });
            });
            if (headerRef.current) {
                observer.observe(headerRef.current);
            }
            return observer;
        };
        const observer = handleAnimeHeader();
        return () => {
            observer.disconnect();
        }
    }, []);

    useEffect(() => {
        const handleAnimeOffer = (index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimeOffers(prevState => {
                            const newState = [...prevState];
                            newState[index] = "animeFlip";
                            return newState;
                        });
                    } else {
                        setAnimeOffers(prevState => {
                            const newState = [...prevState];
                            newState[index] = "";
                            return newState;
                        });
                    }
                });
            }, { rootMargin: "0px 0px -10px 0px" });
            if (offerRefs.current[index].current) {
                observer.observe(offerRefs.current[index].current);
            }
            return observer;
        };
        const observers = offers.map((_, index) => handleAnimeOffer(index));
        return () => {
            observers.forEach(observer => observer.disconnect());
        }
    }, []);

    return (
        <Container style={{ backgroundColor: "black", color: "white" }}>
            <div ref={headerRef} className={`${styles.textContentHeader} ${anime[animeHeader]}`}>
                <SecondHeder>{t("text.mainProfessions.secundHeader")}</SecondHeder>
                <MyText secondContent={true}>{t("text.mainProfessions.myText")}</MyText>
            </div>
            <Container professions={true} row={true} wrap={true}>
                {offers.map((offer, index) => (
                    <div key={index} ref={offerRefs.current[index]} className={styles.offerOption}>
                        <div
                            className={`${anime[animeOffers[index]]}`}
                            style={{ '--animation-delay': `${(index + 1) * 3}s` }}
                        >
                            <div className={`${styles.iconContent}`}>
                                <img src={offer.icon} alt="icon" />
                            </div>
                            <ForHeder bottomFive={true}>
                                {t(`text.mainProfessions.offerOption.${offer.name}.forHeader`)}
                            </ForHeder>
                            <MyText secondContent={true}>
                                {t(`text.mainProfessions.offerOption.${offer.name}.myText`)}
                            </MyText>
                        </div>
                    </div>
                ))}
            </Container>
        </Container>
    );
};
