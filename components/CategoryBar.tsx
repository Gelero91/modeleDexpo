import { Button } from './Button';
import styles from './CategoryBar.module.css';

const CategoryBar = () => {
    return (
        <section  className={styles.categoryBar}>
            <Button text='<' path='/' className={styles.categoryBarBtn}/>
                <nav className={styles.categoryBarList}>
                    <Button text='Ordinateur' path='/'/>
                    <Button text='Smartphone' path='/'/>
                    <Button text='Accessoires' path='/'/>
                    <Button text='Gaming' path='/'/>
                    <Button text='Audio' path='/'/>
                    <Button text='Camera' path='/'/>
                    <Button text='Montre' path='/'/>
                    <Button text='Musique' path='/'/>
                    <Button text='Vehicule' path='/'/>
                    <Button text='Meuble' path='/'/>
                    <Button text='Livre' path='/'/>
                    <Button text='Bricolage' path='/'/>
                    <Button text='Jardin' path='/'/>
                    <Button text='Matela' path='/'/>
                    <Button text='TV' path='/'/>
                </nav>
            <Button text='>' path='/' className={styles.categoryBarBtn}/>
        </section>
    );
}

export default CategoryBar;