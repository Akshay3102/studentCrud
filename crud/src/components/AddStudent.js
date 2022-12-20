import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
const AddStudent = () => {
  const [student, SetStudent] = useState((
    {
      'first_name': '',
      'last_name': '',
      'email': ''
    }
  ))

  const [message, setMessage] = useState();
  const history=useNavigate()

  const { first_name, last_name, email } = student;

  
  const HandleChange = ((e) => {
    SetStudent({ ...student, [e.target.name]: e.target.value })
  })

  const submitForm = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:8080/endpoint/add-student', student)
      .then((result) => {
        
        // setMessage("Successfully Added");
        alert('Added Successfully')

        history('/')

      }).catch((err) => {
        alert('Something Went Wrong!!!!')
      })

  }
  return (

    <div className='container forms'>
      <form onSubmit={e => submitForm(e)} className="form-control mt-2" style={{}} >
        <div className='row'>
          <div className='col-md-12 text-center'><h2> Add Student</h2></div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'><h2> {message}</h2></div>
        </div>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>First Name</div>
          <div className='col-md-4'><input type="text" name='first_name'
            value={first_name} className='form-control' onChange={e => HandleChange(e)} /></div>
          <div className='col-md-2'></div>
        </div>

        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Last Name</div>
          <div className='col-md-4'><input type="text" name='last_name' value={last_name} className='form-control' onChange={e => HandleChange(e)} /></div>
          <div className='col-md-2'></div>
        </div>

        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Email</div>
          <div className='col-md-4'><input type="text" name='email' className='form-control' value={email} onChange={e => HandleChange(e)} /></div>
          <div className='col-md-2'></div>
        </div>

        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 text-center'><button className='btn btn-warning'>Add Student</button></div>
          <div className='col-md-2'></div>
        </div>
      </form>
    </div>
  )
}
export default AddStudent