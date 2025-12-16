import React, { useRef, useState } from 'react'
import './style.css'

const TaskQueue = () => {
  const [tasks, setTasks] = useState([])

  const [completedTasks, setCompletedTasks] = useState([])

  // 添加任务
  const handleTaskAdd = () => {
    const duration = Math.floor((Math.random() * 3) + 1) * 1000
    const task = { id: Date.now(), name: '任务' + Number(tasks.length + completedTasks.length + 1), duration, progress: 0 }

    setTasks(prev => [...prev, task])
  }

  // 执行单个任务
  const handleTaskExecute = () => {
    return new Promise((resolve) => {
      if (!tasks.length) return
      const curTask = tasks[0]
      let progress = 0
      const timer = setInterval(() => {
        progress += 1

        // 更新progress
        setTasks((prev) => {
         return prev.map(i => {
              return {
                ...i,
                progress: i.id === curTask.id ? progress : i.progress
              }
          })
        })

        // 停止
        if (progress >= 100) {
          clearInterval(timer)

          setTasks((prev) => {
            return prev.map(i => {
              return {
                ...i,
                progress: i.id === curTask.id ? 100 : i.progress
              }
            })
          })

          // 移至已完成任务
          setTimeout(() => {
            setTasks(prev => {
              return prev.filter(i => i.id !== curTask.id)
            })
            setCompletedTasks(prev => {
              return [...prev, curTask]
            })
            resolve()
          }, 300)
        }
        
      }, curTask.duration / 100)
    })
  }

  // 执行全部任务
  const handleAllTasks = async () => {
    const executeTask = (task) => {
      return new Promise((resolve) => {
        if (!tasks.length) return
        const curTask = task
        let progress = 0
        const timer = setInterval(() => {
          progress += 1
          // 更新progress
          setTasks((prev) => {
           return prev.map(i => {
                return {
                  ...i, progress: i.id === curTask.id ? progress : i.progress
                }
            })
          })
          // 停止
          if (progress >= 100) {
            clearInterval(timer)
            setTasks((prev) => {
              return prev.map(i => {
                return {
                  ...i,
                  progress: i.id === curTask.id ? 100 : i.progress
                }
              })
            })
            // 移至已完成任务
            setTimeout(() => {
              setTasks(prev => {
                return prev.filter(i => i.id !== curTask.id)
              })
              setCompletedTasks(prev => {
                return [...prev, curTask]
              })

              resolve()
            }, 300)
          }
        }, curTask.duration / 100)
      })
    }
    for (let item of tasks) {
      await executeTask(item)
    }
  }

  return (
    <div className="wrapper">
      <div className="btns">
        <button onClick={handleTaskAdd}>添加任务</button>
        <button onClick={handleTaskExecute}>执行单个任务</button>
        <button onClick={handleAllTasks}>执行全部任务</button>
      </div>

      <div className="task-queue-wrapper">
        <h3>任务队列</h3>
          { 
            tasks.map(i => {
              return (
                <div className="task-queue">
                  <div className="content">
                    <span>{ i.name }</span>
                    <span>{ i.duration / 1000 }s</span>
                    <span>{ i.progress }%</span>
                  </div>
                  <div className="progress-bar" 
                    style={{ width: `${i.progress}%` }}  
                  />
                </div>
              )
            })
          }
      </div>

      <div className="completed-tasks-wrapper">
        <h3>已完成任务</h3>
        {
          completedTasks.map(i => {
            return (
              <div className="completed-tasks">{ i.name } ✅</div>
            )
          })
        }
      </div>
    </div>
  )
}


export default TaskQueue