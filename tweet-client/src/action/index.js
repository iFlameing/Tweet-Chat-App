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
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      body: JSON.stringify({text})
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



export const postnewmessage = (data)=>(
    dispatch=>{
        messagepostRequest(data.text,`/api/users/${data.userId}/messages`)
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