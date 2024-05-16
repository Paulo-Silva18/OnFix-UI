import { Redo2 } from 'lucide-react';
import { SquareCheckBig } from 'lucide-react';
import { BriefcaseBusiness, Check } from 'lucide-react';
import { Users } from 'lucide-react';
import styles from './TableNavBar.module.css';

export function TableNavBar() {
  return (
    <div className={styles.tableNavBar}>
      <div className={styles.tableNavBar1}>
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
      <div className={styles.tableNavBar2}>
        <div className={styles.uppNavBar2}>
          <h1>2</h1>
          <div className={styles.iconUsers2}>
            <BriefcaseBusiness />
          </div>
        </div>
        <div className={styles.downDiv2}>
          <div>
            <p>Notebooks</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.tableNavBar3}>
        <div className={styles.uppNavBar3}>
          <h1>6</h1>
          <div className={styles.iconUsers3}>
            <SquareCheckBig />
          </div>
        </div>
        <div className={styles.downDiv3}>
          <div>
            <p>Equipamentos em manutenção</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.tableNavBar4}>
        <div className={styles.uppNavBar4}>
          <h1>3</h1>
          <div className={styles.iconUsers4}>
            <Redo2 />
          </div>
        </div>
        <div className={styles.downDiv4}>
          <div>
            <p>Aguardando retirada</p>
          </div>
        </div>
      </div>
    </div>
  )
}