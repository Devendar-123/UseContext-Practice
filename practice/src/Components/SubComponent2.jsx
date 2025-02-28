import React, { useContext } from 'react'
import { data } from './MainComponent'
const SubComponent2 = () => {
    const {detail} = useContext(data);
  return (
    <table align='center'>
        <caption>Favourite items With Images!</caption>
        <thead>
            <tr>
                <th id='th1'>Name</th>
                <th id='th2'>Email</th>
                <th id='th3'>Favourite Animal</th>
                <th id='th4'>Favourite Flower</th>
                <th id='th5'>Favourite Place</th>
                <th id='th6'>Favourite Bird</th>
            </tr>
        </thead>
        <tbody>
            {detail.map((item,id)=>(
                <tr key={id}>
                    <td id='name'>{item.name}</td>
                    <td id='email'>{item.email}</td>
                    <td id='img1'><img src={item.animal} alt="1" /></td>
                    <td id='img2'><img src={item.flower} alt="2" /></td>
                    <td id='img3'><img src={item.place} alt="3" /></td>
                    <td id='img4'><img src={item.bird} alt="3" /></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default SubComponent2
