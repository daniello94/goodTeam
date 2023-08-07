import React from 'react';
import styles from '../styles/Container.module.scss';

const Container = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={
            `${styles.container}
             ${props.heder && styles.hederContainer}
             ${props.secundContainer && styles.secundContainer}
             ${props.fixed && styles.fixedContainer}
             ${props.row && styles.containerRow}
             ${props.wrap && styles.containerWrap}
             ${props.professions && styles.professionsContainer}
             ${props.en && styles.en}
             ${props.pl && styles.pl}
             ${props.de && styles.de}
             ${props.fr && styles.fr}
             ${props.nl && styles.nl}
            `
        } style={props.style}>{props.children}</div>
    )
});
export default Container;
