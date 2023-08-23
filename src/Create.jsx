import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const header = { "Access-Control-Allow-Origine": "*" }
    const history = useNavigate()

    const submithandle = (e) => {
        e.preventDefault()
        // alert('clicked....')
        axios.post('https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app', {
            name: name,
            email: email,
            header,

        }).then(() => {
            setName('')
            setEmail('')
            history('/read')
        })


    }
    return (
        <>
            <div className='flex flex-col justify-center items-center p-5 space-y-3 font-Montserrate'>
                <h2 className='text-xl font-semibold'>Create Opration</h2>
                <div className='flex  space-x-3'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 rounded-xl border-slate-800 p-2 font-Montserrate placeholder-black' placeholder='your name' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 rounded-xl border-slate-800 p-2 font-Montserrate placeholder-black' placeholder='your email' />
                    <button className='p-2 bg-green-900 text-white font-semibold px-6 rounded-xl  border-2 border-black' onClick={submithandle}>Submit</button>

                </div>
            </div>

        </>

    )
}

export default Create;
