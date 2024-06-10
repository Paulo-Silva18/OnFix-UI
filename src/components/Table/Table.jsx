import React, { useState } from "react"
import styles from "./Table.module.css"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import { Circle } from "lucide-react"
import { Ellipsis } from "lucide-react"

export function Table() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" })
  const [sortedData, setSortedData] = useState([
    {
      id: "#12594",
      date: "12/12/2023",
      name: "Frank Murlo",
      city: "Patrocínio",
      type: "Celular",
      status: "Aguardando",
      color: "#4034C7",
      statusColor: "#4034C7",
    },
    {
      id: "#12490",
      date: "15/12/2023",
      name: "Thomas Bleir",
      city: "Patos de Minas",
      type: "Computador",
      status: "Em reparo",
      color: "#FF9500",
      statusColor: "#FF9500",
    },
    {
      id: "#12306",
      date: "23/12/2023",
      name: "Bill Norton",
      city: "Patrocínio",
      type: "Computador",
      status: "Finalizado",
      color: "#106F01",
      statusColor: "#106F01",
    },
    {
      id: "#12307",
      date: "23/12/2023",
      name: "Marcos da Viola",
      city: "Patrocínio",
      type: "Computador",
      status: "Serviço não realizado",
      color: "#CD0000",
      statusColor: "#CD0000",
    },
  ])

  const sortData = (key) => {
    let direction = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }

    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1
      }
      return 0
    })

    setSortedData(sorted)
    setSortConfig({ key, direction })
  }

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <h1>Lista de Ordens de serviço</h1>
        <div className={styles.essa_semana}>
          <p>Essa semana</p>
          <ChevronDown className={styles.chevronIcon} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className={styles.headerCell} onClick={() => sortData("id")}>
              <div className={styles.headerContent}>
                <span style={{ cursor: "pointer" }}>ID</span>
                <ArrowUpDown className={styles.icon} />
              </div>
            </th>
            <th>Data</th>
            <th className={styles.headerCell} onClick={() => sortData("name")}>
              <div className={styles.headerContent}>
                <span style={{ cursor: "pointer" }}>Nome do responsável</span>
                <ArrowUpDown className={styles.icon} />
              </div>
            </th>
            <th>Cidade</th>
            <th className={styles.headerCell} onClick={() => sortData("type")}>
              <div className={styles.headerContent}>
                <span style={{ cursor: "pointer" }}>Tipo</span>
                <ArrowUpDown className={styles.icon} />
              </div>
            </th>
            <th
              className={styles.headerCell}
              onClick={() => sortData("status")}
            >
              <div className={styles.headerContent}>
                <span style={{ cursor: "pointer" }}>Status</span>
                <ArrowUpDown className={styles.icon} />
              </div>
            </th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td className={styles.cellContent}>
                <div
                  className={styles.rectangle}
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className={styles.id_number}>{item.id}</span>
              </td>
              <td className={styles.data}>{item.date}</td>
              <td className={styles.nome_responsavel}>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.type}</td>
              <td className={styles.aguardando}>
                <Circle
                  className={styles.icon2}
                  style={{ color: item.statusColor }}
                />{" "}
                <span>{item.status}</span>
              </td>
              <td>
                <Ellipsis />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
