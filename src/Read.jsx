import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Read = () => {


  const history = useNavigate()
  // Handle Delete 
  const DeletHandle = (id) => {
    axios.delete(`https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app/${id}`).then(() => {
      getData()
    })
  }

  const [data, setData] = useState([])
  const getData = () => {
    axios.get('https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app').then((res) => {
      setData(res.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])


  const setLocalstorage = (id, name, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    history('/update')
  }

  return (
    <>

      <div className='w-full flex justify-center items-center py-20 flex-col'>
        <div className='py-10'>
          <Link to='/' >
            <button className='py-2 px-8 bg-yellow-400 font-semibold'>Create Data</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th className='px-10 font-bold text-lg py-2 border-b-2 border-black'>S.No.</th>
              <th className='px-10 font-bold text-lg py-2 border-b-2 border-black'>Name</th>
              <th className='px-10 font-bold text-lg py-2 border-b-2 border-black'>Email</th>
              <th className='px-10 font-bold text-lg py-2 border-b-2 border-black'>Edit </th>
              <th className='px-10 font-bold text-lg py-2 border-b-2 border-black'>Delete</th>
            </tr>
          </thead>
          {
            data.map((mydata) => {
              return (
                <tbody>
                  <tr key={mydata.id} className='text-center'>
                    <td className='p-2 text-black font-bold  border-b-2 border-black'>{mydata.id}</td>
                    <td className='p-2 font-bold border-b-2 border-black'>{mydata.name}</td>
                    <td className='p-2 font-bold border-b-2 border-black'>{mydata.email}</td>
                    <td className='p-2 font-bold border-b-2 border-black'><button onClick={() => setLocalstorage(mydata.id, mydata.name, mydata.email)} className='bg-green-500 text-white px-5 py-1 rounded-lg'>Edit</button></td>
                    <td className='p-2 font-bold border-b-2 border-black'><button onClick={() => DeletHandle(mydata.id)} className='bg-red-500 text-white px-5 py-1 rounded-lg'>Delete</button></td>
                  </tr>
                </tbody>
              )
            })
          }

        </table>
      </div>
    </>
  )
}

export default Read
