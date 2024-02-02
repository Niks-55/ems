import {useState}from 'react'
import Swal from 'sweetalert2'
import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'
import { employeeData } from '../Data'


function Dashboard() {
    const [employees,setEmployees]=useState(employeeData);
   const [selectEmployee,setSelectEmployee]=useState(null);
    const[isAdding,setIsAdding]=useState(false);
    const [isEditing,setIsEditing]=useState(false);
    function handleDelete(id){
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure',
            className: 'button-spacing',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            
            customClass:{
                confirmButton: 'confirm-button-class',
                cancelButton: 'cancel-button-class'
            }
            
        }).then(result=>{
            if(result.value){
                const [employee]=employees.filter(employee=>employee.id===id)
                Swal.fire({
                    icon:'success',
                    title:`${employee.name} is deleted`,
                    text:`${employee.firstname} ${employee.lastname} data has been deleted`,
                    showConfirmButton:false,
                    timer:1500,
                })
                setEmployees(employees.filter(employee=>employee.id!== id))
            }
        })
    }
    function handleEdit(id){
        const [employee]=employees.filter(employee=>employee.id===id);
        setSelectEmployee(employee)
        setIsEditing(true)
    }


  return (
    <div className='container'>
        {!isAdding && !isEditing && (
            <>
                <Header setIsAdding={ setIsAdding}/>
                <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
        )}
        {isAdding &&(
            <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
            />
        )}
        {isEditing &&(
            <Edit
             employees={employees}
             selectEmployee={selectEmployee}
             setEmployees={setEmployees}
             setIsEditing={setIsEditing}
             />
        )}
    </div>
  )
}

export default Dashboard