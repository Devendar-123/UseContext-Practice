import React, { useContext } from 'react'
import { data } from './MainComponent'
import SubComponent2 from './SubComponent2';
const SubComponent1 = () => {
    const {detail} = useContext(data);
  return (
    <div>
      <table align='center'>
        <caption>*Favourites and Names:*</caption>
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
                {detail.map((data,id)=>(
                    <tr key={id}>
                        <td id='td1'>{data.name}</td>
                        <td id='td2'>{data.email}</td>
                        <td id='td3'>{data.animalName}</td>
                        <td id='td4'>{data.flowerName}</td>
                        <td id='td5'>{data.placeName}</td>
                        <td id='td6'>{data.birdName}</td>
                    </tr>
                ))}
            </tbody>
      </table>
      <br />
      <hr />
      <SubComponent2/>
    </div>
  )
}

export default SubComponent1
