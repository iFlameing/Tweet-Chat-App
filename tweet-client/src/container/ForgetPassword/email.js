import React from 'react'

const ResetForm =(props)=>{
    return(
        <div>
            <div>
                <form>
                    <div>
                        <label>Email</label>
                        <input type="email"  onChange={props.change} placeholder="Enter your registered Email"/> 
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetForm;