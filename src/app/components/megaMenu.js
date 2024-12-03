export default function Header() {
    return (
        <header className={styles.header}>
            {/*Three Header menu sections*/}
            <div className={styles.left}>
                <h1 className={styles.logo}>Vitality</h1>
            </div>

            <div className={styles.middle}>
                <nav className={styles.navbar}>
                     <ul>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="about">About Us</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                        <li><Link href="quiz">Quiz</Link></li>
                     </ul>
                </nav>
            </div>

            <div className={styles.right}>
                <IconCart className={styles.iconCart}/>
                <IconSearch className={styles.iconSearch}/>
                <IconWishlist className={styles.iconWishlist}/>
                <IconProfile className={styles.iconProfile}/>
            </div>

        </header>


    )
}
