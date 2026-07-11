import React from 'react'

const InsertCourse = () => {
  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h2 className="text-center">Insert Course</h2>

             <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            
                    <label htmlFor="" className="form-label">Course Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Duration:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Fee:</label>
                    <input type="number" className="form-control" />
                </div>
                
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Mode:</label>
                     <select className="form-control">
                                <option value="">Online</option>
                                <option value="">Offline</option>
                                <option value="">Hybrid</option>
                                
                            </select>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Trainer:</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <button className="btn btn-success">Submit</button>

                </div>
             </div>
            </div>
        </div>
    </div>    

    </div>
  )
}

export default InsertCourse