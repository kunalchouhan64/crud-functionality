import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todomain = () => {
    const [mydataa, SetMyData] = useState([])
    const [task, AddTask] = useState('')
    const header = { "Access-Control-Allow-Origine": "*" }
    let newDate = new Date()
    let currdatetime = newDate.toLocaleTimeString();



    const getData = async () => {
        try {
            const response = await axios.get('https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app');
            SetMyData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const HandleClick = () => {
        axios.post('https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app', {
            task: task,
            date: currdatetime,
            header
        }).then(() => {
            getData()
            AddTask('')

            alert('Task Added....')
        })
    }

    const handledelete = (idd) => {
        axios.delete(`https://64d9ea66e947d30a260a780d.mockapi.io/crudapp/curd-app/${idd}`).then(() => {
            getData()
            alert('Task Deleted Successfully....')
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='flex justify-center items-center h-screen w-full font-Montserrate flex-col'>
                <div className='flex justify-center items-center space-x-4'>
                    <input className='py-2 px-5 border border-gray-800 rounded-lg placeholder-black' type="text" value={task} onChange={(e) => AddTask(e.target.value)} placeholder='Add Your Task' />
                    <button className='bg-green-600 text-white font-Montserrate py-2 px-7 rounded-lg' onClick={HandleClick}>Add Task</button>

                </div>

                <div className='py-10 flex justify-center items-center font-Montserrate flex-col'>
                    <h2 className='text-3xl py-10'>Your Added Task</h2>
                    <div className='flex justify-start items-center space-x-20 font-semibold font-Montserrate py-6'>

                    </div>
                    <div>
                        <table className='text-center font-semibold text-lg'>
                            <thead>
                                <tr>
                                    <th className='px-5 font-Montserrate font-semibold bg-red-700 text-white rounded-lg py-2 mx2'>S.No:</th>
                                    <th className='px-5 bg-red-700 text-white rounded-lg py-2'>Task</th>
                                    <th className='px-5 bg-red-700 text-white rounded-lg py-2'>Date & Time</th>
                                    <th className='px-5 bg-red-700 text-white rounded-lg py-2'>Delete</th>
                                </tr>
                            </thead>
                            {
                                mydataa.map(ittt => (
                                    <tbody key={ittt.id} className='py-7'>
                                        <tr>
                                            <td className='px-5'>{ittt.id}</td>
                                            <td className='px-5'>{ittt.task}</td>
                                            <td className='px-5'>{ittt.date}</td>

                                            <td className='px-5'> <button onClick={() => handledelete(ittt.id)}>Delet</button> </td>

                                        </tr>
                                    </tbody>
                                ))
                            }

                        </table>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Todomain
