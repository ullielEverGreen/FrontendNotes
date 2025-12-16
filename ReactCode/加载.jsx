import React, { useRef, useState, useEffect } from 'react'
import './style.css'

const LoadInfo = () => {
  const [count, setCount] = useState(1)
  const [initialData, setInitialData] = useState([])
  const [dataList, setDataList] = useState([])

  useEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    setInitialData(prev => [...prev, ...data])
  }, [])

  const handleLoad = async () => {
    const newList = initialData.slice(5*(count - 1), 5*count)
    setDataList(prev => {
      return [...prev, ...newList]
    })
    setCount(prev => prev+1)
  }
  
  return (
    <div className="wrapper">
      <div className="list">
        {
          dataList.map(i => {
            return (
            <div>{i.id} - { i.name } - { i.email }</div>
            )
          })
        }
        { 
          (dataList.length < initialData.length) && (
            <span>...仍有待加载数据</span>
          ) 
        } 
      </div>

      {
        (dataList.length < initialData.length) && (
          <div>
            <button onClick={ handleLoad }>点击加载</button>
          </div>
        )
      }
    </div>
  )
}

export default LoadInfo