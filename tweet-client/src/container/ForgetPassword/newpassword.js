import React from "react"

const NewPassword = (props)=>{
    return(
        <div>
            <div>
                <form>
                    <div>
                        <input type="password" placeholder="NewPassword"/>
                    </div>
                    <div>
                        <input type="text" placeholder="ConfirmNewPassword"/>
                    </div>
                    <div>
                        <input type="submit" value="ChangePassword"/>
                    </div>
                </form>
            </div>
        </div>
    )
}