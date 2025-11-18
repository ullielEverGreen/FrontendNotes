import React, { useRef, useState } from 'react'

const FileComponent = () => {
  const [files, setFiles] = useState({
    folder: {
      id: 'folder',
      name: '文件夹',
      type: 'folder',
      checked: false,
      children: [
        { id: 'file1', name: '文件1.txt', type: 'file', checked: true },
        { id: 'file2', name: '文件2.txt', type: 'file', checked: true },
        { id: 'file3', name: '文件3.txt', type: 'file', checked: false }
      ]
    }
  })

  const getFolderStatus = () => {
    const len = files.folder.children.length
    const checkedLen = files.folder.children.filter(i => i.checked).length

    if (checkedLen === len) return true
    
    return false
  }

  const handleFolderChange = () => {
    const cur = getFolderStatus()

    const updatedChildren = files.folder.children.map(i => {
      return {
        ...i,
        checked: !cur
      }  
    })
    console.log(updatedChildren)

    setFiles(prev => {
      return {
        folder: {
          ...prev.folder,
          children: updatedChildren
        }
      }
    })
  }

  const handleFileChange = (id) => {
    setFiles(prev => {
      const updatedChildren = prev.folder.children.map(i => 
        i.id === id ? {...i, checked: !i.checked} : i
      )

      return {
        folder: {
          ...prev.folder,
          children: updatedChildren
        }
      }
    })
  }

  return (
    <div>
      <div style={{ marginBottom: '5px' }}>
        <input 
          type='checkbox' 
          checked={getFolderStatus()}
          onChange={handleFolderChange}
        />
        文件夹 <span>选中的文件 {files.folder.children.filter(i => i.checked).length} / {files.folder.children.length}</span>
      </div>
      {
        files.folder.children.map(i => (
          <div style={{ marginLeft: '8px' }}>
            <input type='checkbox' 
              checked={i.checked} 
              onChange={() => handleFileChange(i.id)}
            />
            { i.name }
          </div>
        ))
      }
    </div>
  )
}


export default FileComponent