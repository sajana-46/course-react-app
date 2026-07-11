import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import NavigationBar from './NavigationBar'


const ViewCourse = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.get("https://host-demo-app.onrender.com/api/courses").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <NavigationBar/>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All Course</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Created_at</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Id</th>
              <th>Mode</th>
              <th>Trainer</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.course_name}</td>
                        <td>{value.created_at}</td>
                        <td>{value.duration}</td>
                        <td>{value.fee}</td>
                        <td>{value.id}</td>
                        <td>{value.mode}</td>
                        <td>{value.trainer}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default ViewCourse