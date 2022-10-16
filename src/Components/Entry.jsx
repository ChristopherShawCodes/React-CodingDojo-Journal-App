import React from 'react'


const Entry = ({entry}) => {
  return (
    <div id="entry" className="card">
    <h5 className='card-title'>Journal Entry</h5>
    <p className='card-body'>{entry}</p>
    </div>
  )
}

export default Entry