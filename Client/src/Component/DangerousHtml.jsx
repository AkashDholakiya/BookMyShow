import React from 'react'

const DangerousHtml = ({htmlData}) => {
  return (
    <div style={{letterSpacing:"0.09rem"}} dangerouslySetInnerHTML={{__html : htmlData}} />
  )
}

export default DangerousHtml
