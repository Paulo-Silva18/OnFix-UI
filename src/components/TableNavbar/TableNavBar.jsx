import { Redo2 } from 'lucide-react';
import { SquareCheckBig } from 'lucide-react';
import { BriefcaseBusiness, Check } from 'lucide-react';
import { Users } from 'lucide-react';
import styles from './TableNavBar.module.css';

export function TableNavBar() {
  return (
    <div className={styles.tableNavBar}>
      <div className={styles.tableNavBarItem}>
        <div className={styles.uppNavBar}>
          <h1>5</h1>
          <div className={styles.iconUsers}>
            <Users />
          </div>
        </div>
        <div className={styles.downDiv}>
          <div>
            <p>Aparelhos disponíveis</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.tableNavBarItem}>
        <div className={styles.uppNavBar}>
          <h1>2</h1>
          <div className={styles.iconUsers}>
            <BriefcaseBusiness />
          </div>
        </div>
        <div className={styles.downDiv}>
          <div>
            <p>Notebooks</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.tableNavBarItem}>
        <div className={styles.uppNavBar}>
          <h1>6</h1>
          <div className={styles.iconUsers}>
            <SquareCheckBig />
          </div>
        </div>
        <div className={styles.downDiv}>
          <div>
            <p>Equipamentos em manutenção</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.tableNavBarItem}>
        <div className={styles.uppNavBar}>
          <h1>3</h1>
          <div className={styles.iconUsers}>
            <Redo2 />
          </div>
        </div>
        <div className={styles.downDiv}>
          <div>
            <p>Aguardando retirada</p>
          </div>
        </div>
      </div>
    </div>
  )
}