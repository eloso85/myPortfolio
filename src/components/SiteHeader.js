'use client'
import { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import styles from "./SiteHeader.module.css";

const navigation = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/notes", label: "Notes" },
    { href: "/contact", label: "Contact" },

];


export default function SiteHeader(){
    const dialogRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function openMenu() {
        dialogRef.current.showModal()
        setIsOpen(true)
    }

    function closeMenu() {
        dialogRef.current.close()
    }

    useEffect(() => {
        if (!isOpen) return
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const desktop = window.matchMedia("(min-width: 64rem)")

        function handleResize() {
            if (desktop.matches) {
                dialogRef.current?.close()
            }
        }
        desktop.addEventListener('change', handleResize)
        handleResize()

        return () => {
            document.body.style.overflow = previousOverflow
            desktop.removeEventListener('change', handleResize)
        }
    },   [isOpen])

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.brand}>
                Alejandro Segura
            </Link>

            <nav aria-label="Main navigation" className={styles.navigation}>
                {navigation.map((item)=>(
                    <Link key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}

            </nav>

            <button
            type="button"
            className={styles.menuButton}
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={openMenu}
            >

                <span className={styles.hamburger} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
            </button>
            
            <dialog
                ref={dialogRef}
                id="mobile-navigation"
                className={styles.drawer}
                aria-labelledby="navigation-title"
                onClose={()=> setIsOpen(false)}
                onClick ={(event) =>{
                    if (event.target === event.currentTarget) {
                        closeMenu()
                    }
                }}
            >
                <div className={styles.drawerContent}>
                    <div className={styles.drawerHeading}>
                        <h2 id="navigation-title">Navigation</h2>
                        <button
                            type='button'
                            className={styles.closeButton}
                            aria-label="Close navigation"
                            onClick={closeMenu}
                            autoFocus
                        >
                            <span aria-hidden='true'>x</span>
                </button>
            </div>
            <nav
                aria-label="Mobile navigation"
                className={styles.drawerNavigation}
            >
                {navigation.map((item)=>(
                    <Link
                     key={item.href}
                     href={item.href}
                     onClick={closeMenu}
                    >
                        {item.label}
                    
                    </Link>
                ))}

            </nav>
                </div>

            </dialog>
            
        </header>
    )
}