import React, { useRef, useState } from 'react'

const TaskQueue = () => {
  const [taskQueue, setTaskQueue] = useState([
    // { name: '任务1', duration: 2000, progress: 60 }
  ])
  const [completedTask, setCompletedTask] = useState([])
  

  const addTask = () => {
    setTaskQueue(prev => {
      return [...prev, 
        { 
          name: '任务' + Number(prev.length + completedTask.length + 1), 
          duration: Math.floor((Math.random() * 3 + 1)) * 1000, 
          progress: 0 
        }]
    })
  }

  const executeTask = async (task) => {
    return new Promise((resolve) => {
      let progress = 0
      
      const timer = setInterval(() => {
        progress += 1
        
        setTaskQueue(prev => prev.map(i => {
          return i.name === task.name ? {...i, progress} : i
        }))
  
        if (progress >= 100) {
          clearInterval(timer)
  
          resolve()
        }
        
      }, task.duration / 100)
    })
  }

  const executeAllTask = async () => {
    for (let i = 0; i < taskQueue.length; i++) {
      await executeTask(taskQueue[i])

      setTaskQueue(prev => prev.filter(j => j.name !== taskQueue[i].name))
      setCompletedTask(prev => [
        ...prev, {
          name: taskQueue[i].name,
        }
      ])
    }
  }
  
  return (
    <div>
      <div className='btns'>
        <button onClick={addTask}>添加任务</button>
        <button onClick={executeAllTask}>队列执行</button>
      </div>

      <div className='task-queue-wrapper'>
        <p>任务队列</p>
        {
          taskQueue.map(i => {
            return (
              <div className='task-queue'>
                <div className='content'>
                  <span>{ i.name }</span><span>{ i.duration / 1000 }s</span><span>{ i.progress }%</span>
                </div>
                <div className='progress-bar'
                  style={{ width: (i.progress)*2 + 'px' }}
                />
              </div>
            )
          })
        }
      </div>

      <div className='complete-task-queue-wrapper'>
        <p>已完成的任务</p>
        {
          completedTask.map(i => {
            return (
              <div className='complete-task-queue'>{ i.name } ✔</div>
            )
          })
        }
      </div>
    </div>
  )
}


export default TaskQueue