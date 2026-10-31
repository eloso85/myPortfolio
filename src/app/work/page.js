import Image from "next/image";
import { projects } from '../../data/projects';
import styles from './page.module.css';

export const metadata = {
    title: 'Work | Alejandro Segura',
    description: 'Selected web development projects by Alejandro Segura'
}

export default function WorkPage() {
    return(
        <main className={styles.page}>
            <header className={styles.heading}>
                <p className={styles.kicker}>Selected Projects</p>
                <h1>My work</h1>
                <p className={styles.introduction}>
                    Applications I've built while learning and working with
                    modern web technologies    
                </p>
            </header>

            <ul className={styles.projectList}>
                {projects.map((project)=>(
                    <li key={project.id} className={styles.project}>
                        <div className={styles.screenshot}>
                            <Image 
                                src={project.image}
                                alt={`${project.name} application screenshot`}
                                fill
                                sizes="(min-width: 64rem) 45vw, 90vw"
                                className={styles.image}
                            />
                        </div>

                        <div className={styles.details}>
                            <h2>{project.name}</h2>
                            <p className={styles.description}>
                                {project.description}
                            </p>
                            <p className={styles.technologies}>
                                Built With: {project.tech.join(' · ')}
                            </p>
                        </div>

                    </li>
                ))}
            </ul>

        </main>
    )
}