import { Header } from "./components/Header/Header"
import { TableNavBar } from "./components/TableNavbar/TableNavBar"
import { TopMenu } from "./components/TopMenu/TopMenu"
import { Table } from "./components/Table/Table"

import "./global.css"

export function App() {
  return (
    <div className="main">
      <div className="esquerda">
        <TopMenu />
      </div>
      <div className="direita">
        <div className="direita-1">
          <Header/>
        </div>
        <div className="direita-2">
          <TableNavBar />
        </div>
        <div className="direita-3">
          <Table />
        </div>
      </div>
    </div>
  )
}
