import { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

function Add ({employees,setEmployees,setIsAdding}) {
  const [firstname,setFirstName]=useState('')
  const [lastname,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [salary,setSalary]=useState('')
  const [date,setDate]=useState('')
  const textInput=useRef(null)

  useEffect(()=>{
    textInput.current.focus()
  },[])

  const handleAdd =e=>{
    e.preventDefault()
    if(!firstname||!lastname||!email||!salary||!date){
      return Swal.fire({
        icon: 'error',
        title:'Error',
        text:'All fields are required',
        showConfirmButton:true

      });
    }
    const id=employees.length +1
    const newEmployee={
      id,
      firstname,
      lastname,
      email,
      salary,
      date
    }
    employees.push(newEmployee)
    setEmployees(employees)
    setIsAdding(false);

    Swal.fire({
      icon:'success',
      title:'Added!',
      text:`${firstname} ${lastname} data has been added`,
      showConfirmButton:false,
      timer:1500
    })
  }

  return (
    <div className='small-container'>
<form onSubmit={handleAdd}>
<h1>Add Employee</h1>
<label htmlFor="FisrtName">First Name</label>
  <input type="text" id="firstName" name="firstName" ref={textInput} value={firstname} onChange={e=>setFirstName(e.target.value)}/>
  <label htmlFor="LastName">Last Name</label>
  <input type="text" id="lastName" name="lastName" value={lastname}  onChange={e=>setLastName(e.target.value)}/>
  <label htmlFor="email">Email</label>
  <input type="email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
  <label htmlFor="Salary">Salary</label>
  <input type="number" id="salary" name="salary" value={salary} onChange={e=>setSalary(e.target.value)} />
  <label htmlFor="Date">Date</label>
  <input type="date" id="date" name="date" value={date} onChange={e=>setDate(e.target.value)} />
  <div style={{marginTop:'30px'}}>

  <input type="submit" value="Add"/>
  <input style={{marginLeft:'12px'}} className="muted-button" type="button"onClick={()=>setIsAdding(false)} value="Cancel"/>
  </div>
</form>
    </div>
    )
    }
  


export default Add