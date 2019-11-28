 export const authenticateUser =(token)=>(
{
    type:"signUp",
    payload:{users:token.user}
}
)

export const autoUser=(token)=>{ 
    return{
    type:"auto",
    payload:{token:token.token,users:token.user}
}}



const authRequest =(data,url)=>{
    console.log(data);
    return fetch(url, {
        method: "post",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
      }).then(res=>{
          if(!res.ok){
            if (res.status >= 400 && res.status < 500) {
                return res.json().then(data => {
                  let err = {authErrorMessage: data.message};
                  alert(JSON.stringify(err))
                  throw err;
                })
              } else {
                let err = {authErrorMessage: "Please try again later.  Server not responding."};
                throw err;
              }
          }
          return res.json();
      })
}


const authRequestsignup =(data,url)=>{
    console.log(data);
    return fetch(url, {
        method: "post",
        body: data
      }).then(res=>{
          if(!res.ok){
              alert("something went wrong Try again")
            if (res.status >= 400 && res.status < 500) {
                return res.json().then(data => {
                  let err = {authErrorMessage: data.message};
                  throw err;
                })
              } else {
                let err = {authErrorMessage: "Please try again later.  Server not responding."};
                throw err;
              }
          }
          return res.json();
      })
}




export const signup =(data)=> (
    dispatch =>{
        authRequestsignup(data,'/api/auth/signup')
             .then(currentuser=>{
                console.log(currentuser) 
                dispatch(authenticateUser({token:currentuser.token,user:currentuser}))})
    }
)

export const signin =(data)=>(
    dispatch =>{
        authRequest(data,'/api/auth/signin')
        .then(currentuser=>{
            console.log(currentuser) 
            dispatch(authenticateUser({token:currentuser.token,user:currentuser}))})
        
    }
)
const passwordreset =(data,url)=>{
    return fetch(url,{
        method:"post",
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(data)
    }).then(res=>{
        if(!res.ok){
            alert("something goes wrong ")
            return res.json().then(data => {
                let err = {authErrorMessage: data.message};
                throw err;
              })
        }
        else{
            return res.json()
        }
    })
}

const emailSent = ()=>({
    type:"email"
})

export const resetpassword =(data)=>(
    dispatch =>{
        passwordreset(data,'/api/auth/passwordreset')
        .then(currentuser=>{
            console.log(currentuser)
            dispatch(emailSent())
        })
    }
)
const passwordchange =()=>({
    type:"passwordchange"
})

const changepassword1 =(data,url)=>{
    return fetch(url,{
        method:"post",
        headers:new Headers({
            'Content-Type':'application/json'
        }),
        body:JSON.stringify(data)
    }).then(res=>{
        if(!res.ok){
            alert("something goes wrong");
            return res.json().then(data => {
                let err = {authErrorMessage: data.message};
                throw err;
              })
            
        }
        else{
            return res.json()
        }
    })
}
export const changepassword =(data)=>(
    dispatch=>{
        changepassword1(data,"/api/auth/finalreset")
        .then(res=>{
            console.log(res);
            dispatch(passwordchange())
        })
    }
)



const messageRequest=(url)=>{ 
    return fetch(`/api/messages`)
            .then(data=>data.json())
}


const messagesend =(messages)=>(
    {
        type:"message",
        payload:messages
    }
    )


export const message = ()=>(
    dispatch=>{
        messageRequest('/api/message')
            .then(res=> { return dispatch(messagesend(res))})
    }
)







const addmessage = (message)=>({
    type:'addmessage',
    payload:'message'
})




const messagepostRequest=(text,url)=>{
    let token="";
    if(localStorage.getItem('user-for-tweetApp')){
         token = JSON.parse(localStorage.getItem('user-for-tweetApp')).token;
    }
    return fetch(url, {
      method: "post",
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      }),
      body: text
    })
      .then(resp => {
        
        if (!resp.ok) {
            alert("Please Login Before Posting the message");
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {errorMessage: data.message};
              throw err;
            })
          } else {
            let err = {errorMessage: "Please try again later.  Server not responding."};
            throw err;
          }
        }
        return resp.json();
      })
}



export const postnewmessage = (data,userId)=>(
    dispatch=>{
        messagepostRequest(data,`/api/users/${userId.userId}/messages`)
        .then(res=> { return dispatch(addmessage(res))})
    }
)


export const Logout =()=>(
    dispatch=>{
        return dispatch({
            type:'logout'
        })
    }
)

const getMessage = (res) =>( {
    type:"GET_MESSAGE",
    payload: res,
})
export const getParticularMessage = (id) => (
    dispatch=>{
        getParticularMessageRequest(`http://localhost:8081/api/messages/${id}/messages`).then(res=>{ console.log("this is from action",JSON.stringify(res)); return dispatch(getMessage(res))})
    }
)

const getParticularMessageRequest = (url) => {
    console.log(url)
    let token="";
    if(localStorage.getItem('user-for-tweetApp')){
         token = JSON.parse(localStorage.getItem('user-for-tweetApp')).token;
    }
    return fetch(url, {
      method: "get",
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      }),
    }).then(res=>(res.json()))
}