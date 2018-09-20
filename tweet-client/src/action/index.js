 export const authenticateUser =(token)=>(
{
    type:"signUp",
    payload:{token:token.token,users:token.user}
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
        authRequest(data,'/api/auth/signup')
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
    console.log(url)
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
    const token = localStorage.getItem('token');

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