import React, { useRef, useState, useMemo } from 'react'
import './style.css'

const Table = () => {
  const columns = [
    { id: 1, column: 'name', sortable: false },
    { id: 2, column: 'age', sortable: true },
    { id: 3, column: 'gender', sortable: false },
    { id: 4, column: 'salary', sortable: true }
  ]

  const info = [
    { name: 'ully', age: 28, gender: 'female', salary: 100000 },
    { name: 'luna', age: 20, gender: 'female', salary: 50000 },
    { name: 'tangyuan', age: 23, gender: 'male', salary: 3000 }
  ]

  const [sortStatus, setSortStatus] = useState({
    key: null,
    status: 'normal' // normal up down
  })

  const getSortedIcon = (column) => {
    if (!column.sortable) return ''
    
    const { key, status } = sortStatus

    const iconMap = {
      normal: '-',
      up: '↑',
      down: '↓'
    }

    if (key === column.column) {
      return iconMap[status]
    } else {
      return iconMap['normal']
    }
  }

  const handleSorted = (column) => {
    if (!column.sortable) return
    
    const nextMap = {
      normal: 'up',
      up: 'down',
      down: 'normal'
    }

    setSortStatus(prev => {
      if (prev.key !== column.column) {
         return {
           key: column.column,
           status: nextMap['normal']
         } 
      }

      return {
        key: column.column,
        status: nextMap[prev.status]
      }
    })
  }

  const sortedData = useMemo(() => {
    const { key, status } = sortStatus

    const initialInfo = [...info]
    
    if (status === 'normal') {
      return initialInfo
    } else if (status === 'up') {
      return initialInfo.sort((a, b) => a[key] - b[key])
    } else if (status === 'down') {
      return initialInfo.sort((a, b) => b[key] - a[key])
    }
  }, [info])

  return (
    <table>
      <thead>
        <tr>
          {
            columns.map(c => {
              return (
                <td onClick={() => handleSorted(c)}>
                  {c.column}{getSortedIcon(c)}
                </td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          sortedData.map(i => {
            return (
              <tr>
                {
                  columns.map(j => {
                    return (
                      <td>{i[j.column]}</td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}


export default Table