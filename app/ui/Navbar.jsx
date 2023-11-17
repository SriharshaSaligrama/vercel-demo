import React from "react";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <ul>
                    <li>
                        <a href="/">My Posts</a>
                    </li>
                    <li>
                        <a href="/posts">Add Post</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}