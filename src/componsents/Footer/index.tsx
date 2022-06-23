import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className = { styles.footer }>
        <ul className = { styles.container }>
            <li className = { styles.items }>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </li>
            <li className = { styles.items }>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </li>
            <li className = { styles.items }>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </li>
            <li className = { styles.items }>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </li>
        </ul>
        <p className = { styles.text }>Все парва защищены</p>
    </footer>
  );
}

export default Footer;
