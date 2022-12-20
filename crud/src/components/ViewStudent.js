import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import './ViewStudent.css'


const ViewStudent = () => {

    const [student, SetStudent] = useState([])

    useEffect(() => {
        loadStudent();
    }, [])

    const loadStudent = async () => {
        const result = await axios.get('http://localhost:8080/endpoint/');
        SetStudent(result.data)
    }
    const deleteuser=async(id)=>{
        const result = await axios.delete('http://localhost:8080/endpoint/del-student/'+id)
        .then((result)=>{
            loadStudent();
        }).catch(()=>{
            alert('Could not deleted ')
        })
    }

    return (

        <div className='container forms'>
            <div className='row'>
                <div className='col-md-12 text-center'><h2> List Student</h2></div>
            </div>
            <table className="table">
                <thead>
                    <th>Sr.no</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {student.map((student, index) => (


                        <tr>
                            <td>{index+1}</td>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.email}</td>
                            <td ><Link to={`edit-student/${student._id}`}><i class="fa-solid fa-pen-to-square" ></i></Link></td>
                            <td> <Link to='' onClick={()=>deleteuser(student._id)}> <i class="fa-solid fa-trash-arrow-up  " style={{color:"red",fontSize:"20px"}}></i></Link></td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
export default ViewStudent