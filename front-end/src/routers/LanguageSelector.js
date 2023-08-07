import React, { useState } from "react";
/* components */
import styles from "../styles/LangueSelector.module.scss";
import Container from "../components/Container";
export default function LanguageSelector({ onSelectLanguage }) {
    const [en, setEn] = useState(false);
    const [pl, setPL] = useState(false);
    const [de, setDe] = useState(false);
    const [fr, setFr] = useState(false);
    const [nl, setNl] = useState(false);
    return (
        <Container fixed={true} en={en} pl={pl} de={de} fr={fr} nl={nl}>
            <h1>Select the language of the website</h1>
            <div className={styles.contentSelector} >
                <button onMouseEnter={() => setEn(true)} onMouseLeave={() => setEn(false)} onClick={() => {
                    onSelectLanguage('en');
                }}>English</button>
                <button onMouseEnter={() => setFr(true)} onMouseLeave={() => setFr(false)} onClick={() => {
                    onSelectLanguage('fr');
                }}>French</button>
                <button onMouseEnter={() => setDe(true)} onMouseLeave={() => setDe(false)} onClick={() => {
                    onSelectLanguage('de');
                }}>German</button>
                <button onMouseEnter={() => setNl(true)} onMouseLeave={() => setNl(false)} onClick={() => {
                    onSelectLanguage('nl');
                }}>Netherland</button>
                <button onMouseEnter={() => setPL(true)} onMouseLeave={() => setPL(false)} onClick={() => {
                    onSelectLanguage('pl');
                }}>Polish</button>
            </div>
        </Container>
    )
}