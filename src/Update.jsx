import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {

  const [id, setid] = useState(0)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setid(localStorage.getItem("id"))
    setname(localStorage.getItem("name"))
    setemail(localStorage.getItem("email"))

  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app/${id}`, {
      name: name,
      email: email
    }).then(() => {
      navigate('/read')
    })
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 space-y-3 font-Montserrate'>
        <h2 className='text-xl font-semibold'>Create Opration</h2>
        <div className='flex  space-x-3'>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='border-2 rounded-xl border-slate-800 p-2 font-Montserrate placeholder-black' placeholder='your name' />
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className='border-2 rounded-xl border-slate-800 p-2 font-Montserrate placeholder-black' placeholder='your email' />
          <button className='p-2 bg-green-900 text-white font-semibold px-6 rounded-xl  border-2 border-black' onClick={handleUpdate}>Update</button>

        </div>
      </div>
    </>
  )
}

export default Update
