import { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

function Edit ({employees,setEmployees,setIsEditing,selectEmployee}) {
  const id=selectEmployee.id
  const [firstname,setFirstName]=useState(selectEmployee.firstname)
  const [lastname,setLastName]=useState(selectEmployee.lastname)
  const [email,setEmail]=useState(selectEmployee.email)
  const [salary,setSalary]=useState(selectEmployee.salary)
  const [date,setDate]=useState(selectEmployee.date)
  const textInput=useRef(null)

  useEffect(()=>{
    textInput.current.focus()
  },[])

  const handleUpdate =e=>{
    e.preventDefault()
    if(!firstname||!lastname||!email||!salary||!date){
      return Swal.fire({
        icon: 'error',
        title:'Error',
        text:'All fields are required',
        showConfirmButton:true

      });
    }
    //const id=employees.length +1
    const employee={
      id,
      firstname,
      lastname,
      email,
      salary,
      date
    }
    for (let i=0;i<employees.length;i++){

      if(employees[i].id===id){
      employees.splice(i,1,employee);
      break;
    }
  }
  setEmployees(employees)
  setIsEditing(false)
    Swal.fire({
      icon:'success',
      title:'updated!',
      text:`${employee.firstname} ${employee.lastname} data has been added`,
      showConfirmButton:false,
      timer:1500
    })
  }

  return (
    <div className='small-container'>
<form onSubmit={handleUpdate}>
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

  <input type="submit" value="Update"/>
  <input style={{marginLeft:'12px'}} className="muted-button" type="button"onClick={()=>setIsEditing(false)} value="Cancel"/>
  </div>
</form>
    </div>
    )
    }
  export default Edit
