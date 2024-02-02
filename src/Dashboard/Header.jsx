import React from 'react'

function Header({ setIsAdding }) {
  return (
    <header>
<h1>Employee management system</h1>
<div style={{marginTop:'30px',marginBottom:'33px'}}>
    <button className='round-button' onClick={()=>setIsAdding(true)}>Add button</button>
</div>
    </header>
  )
}

export default Header