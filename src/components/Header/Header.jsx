import styles from "./Header.module.css"
import { Search } from "lucide-react"
import { Bell } from "lucide-react"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Menu Principal</h1>
        <p>Informações</p>
      </div>
      <div className={styles.headerRight}>
        <Search />
        <Bell />
        <span>Daniel Júnior</span>
        <ChevronDown />
      </div>
    </header>
  )
}
