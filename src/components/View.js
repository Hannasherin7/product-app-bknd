import React, { useState } from 'react'
import { Nav } from './Nav'

export const View = () => {
    const [data,changeData]=useState([
        {
            "pname":"qwwe",
            "pid":123,
            "pbrand":"sdfg",
            "price":12345
        }
    ])
  return (
    <div>
         <h1><center>View All EMPLOYEE Details</center></h1>
       <Nav></Nav>
        <div class="container">
       <div class="row g-3">
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <table class="table" border="2" >
                   <thead>
                     <tr>
                       <th scope="col">PRODUCT name</th>
                       <th scope="col">PRODUCT id</th>
                       <th scope="col">PRODUCT brand</th>
                       <th scope="col">price</th>
                     </tr>
                   </thead>
                   <tbody>
                   {data.map(
                       (value,index)=>
                           {
                               return <tr>
                                 <td>{value.pname}</td>
                                 <td>{value.pid}</td>
                                 <td>{value.pbrand}</td>
                                 <td>{value.price}</td>
                               </tr>
                              
                           }
                   )}
                    </tbody>
                 </table>
           </div>
       </div>
   </div>
    </div>
  )
}
