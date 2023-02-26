import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronictypesetting, remaining essentially unchanged.
            </p>
            <Image src="/images/charizard.png" width="250" height="250" alt="Charizard" />
        </div>

    );
}