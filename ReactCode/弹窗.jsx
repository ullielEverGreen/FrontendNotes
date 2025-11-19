import React, { useState } from 'react';

const MyModal = ({isOpen, onClose, content}) => {
  if (!isOpen) return null
  
  const modalWrapper = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  }

  const modalContent = {
    width: '400px',
    height: '270px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  }
  
  return (
    <div style={modalWrapper}>
      <div style={modalContent}>
        <h1>{content}</h1>
        <button 
          style={{marginTop: '30px'}}
          onClick={onClose}
        >
          关闭
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const wrapperStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight:'100vh',
    position: 'relative'
  }

  const btnStyle = {
    padding: '10px 20px'
  }

  const [modalOpen, setModalOpen] = useState(false)

  const handleBtnClick = () => {
    setModalOpen(true)
  }
  
  return (
    <div style={wrapperStyle}>
      <button 
        onClick={handleBtnClick}
        style={btnStyle}
      >
        点击打开弹窗
      </button>

      <MyModal 
        isOpen={modalOpen} onClose={() => setModalOpen(false)} content={'弹窗内容'}
        >
      </MyModal>
    </div>
  )
}

export default App;