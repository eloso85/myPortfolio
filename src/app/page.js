import styles from './page.module.css';
export default function HomePage() {
    return (
        <main className={styles.hero}>
            <div className={styles.content}>
            <h1 className={styles.title}>Alejandro Segura</h1>
            <p className={styles.description}>Welcome to my developer portfolio!</p>
            </div>
            
        </main>
    )
}