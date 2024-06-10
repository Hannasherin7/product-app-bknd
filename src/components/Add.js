import React, { useState } from 'react'
import { Nav } from './Nav'

export const Add = () => {
    const [data,setData]=useState(
        {
          "pname":"",
          "pid":"",
          "pbrand":"",
          "price":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
      }
  return (
    <div>
        <h1><center>ADD PRODUCT</center></h1>
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRODUCT Name</label>
                        <input type="text" className="form-control"name='pname' value={data.pname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PRODUCT id</label>
                    <input type="text" className="form-control"name='pid' value={data.pid}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PRODUCT BRAND</label>
                    <input type="text" className="form-control" name='pbrand' value={data.pbrand}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PRICE</label>
                    <input type="text" className="form-control" name='price'value={data.price}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-success">ADD</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
