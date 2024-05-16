import { LogOut } from "lucide-react"
import { MessageCircleMore } from "lucide-react"
import { Settings } from "lucide-react"
import { Mail } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { User } from "lucide-react"
import { BriefcaseBusiness } from "lucide-react"
import { SignalMedium } from "lucide-react"
import { Blocks } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import styles from "./TopMenu.module.css"

export function TopMenu() {
  return (
    <div className={styles.topMenu}>
      <div>
        <div className={styles.topMenuLogo}>
          <div className={styles.topMenuLogoIcon}>
            <Blocks />
            <p>OnFix</p>
          </div>
          <div className={styles.topMenuVector}>
            <ChevronLeft />
          </div>
        </div>
      </div>
      <div className={styles.navList}>
        <div style={{ color: "#106F01" }} className={styles.navItem}>
          <div>
            <SignalMedium />
          </div>
          <p>Menu Principal</p>
        </div>
        <div className={styles.navItem}>
          <div>
            <BriefcaseBusiness />
          </div>
          <p>Comodatos</p>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className={styles.navItem}>
          <div>
            <User />
          </div>
          <p>Ordens de Serviço</p>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className={styles.navItem}>
          <div>
            <Mail />
          </div>
          <p>Emails</p>
          <span>2</span>
        </div>
        <div className={styles.navItem}>
          <div>
            <Settings />
          </div>
          <p>Configurações</p>
        </div>
      </div>
      <div className={styles.navListDown}>
        <div className={styles.navListDownItem}>
          <div>
            <MessageCircleMore />
          </div>
          <p>Documentação</p>
        </div>
        <div style={{ color: "#FF3B30" }} className={styles.navListDownItem}>
          <div>
            <LogOut />
          </div>
          <p>Log out</p>
        </div>
      </div>
    </div>
  )
}
