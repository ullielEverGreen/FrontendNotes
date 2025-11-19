import React, { useRef, useState, useMemo } from 'react'
import './style.css'

const Table = () => {
  const columns = [
    { id: 'name', name: 'name', sortable: false },
    { id: 'age', name: 'age', sortable: true },
    { id: 'sex', name: 'sex', sortable: false }
  ]

  const info = [
    { name: 'ully', age: 28, sex: 'female' },
    { name: 'luna', age: 20, sex: 'female' },
    { name: 'tangyuan', age: 27, sex: 'male' },
  ]

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'normal' // normal up down
  })

  const srotedData = useMemo(() => {
    const copyInfo = [...info]
    
    if (sortConfig.direction === 'normal') {
      return copyInfo
    }

    if (sortConfig.direction === 'up') {
      return copyInfo.sort((a, b) => a[sortConfig.key] - b[sortConfig.key])
    } else {
      return copyInfo.sort((a, b) => b[sortConfig.key] - a[sortConfig.key])
    }
  }, [sortConfig, info])

  const getSortIcon = () => {
    return {
      normal: '-',
      up: '↑',
      down: '↓'
    }[sortConfig.direction]
  }

  const handleSortClick = (c) => {
    if (!c.sortable) return

    setSortConfig(prev => {
      const nextDirection = {
        normal: 'up',
        up: 'down',
        down: 'normal'
      }[prev.direction]

      return {
        key: c.name,
        direction: nextDirection
      }
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              columns.map(c => {
                return (
                  <td onClick={() => handleSortClick(c)}>
                    {c.sortable ? c.name + getSortIcon() : c.name}
                  </td>
                )
              })  
            }
          </tr>
        </thead>

        <tbody>
          {
            srotedData.map(i => {
              return (
                <tr>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.sex}</td>
                </tr>
              )
            })
          }
        </tbody>
      
      </table>
    
    </div>
  )
}

export default Table