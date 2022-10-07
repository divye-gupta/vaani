import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PostReq = () => {
    
    const [auth, setAuth] = useState()

    useEffect(()=>{
        axios
    .post("https://api.symbl.ai/oauth2/token:generate",{
        "type": "application",
        "appId": "6d4d7a64417162706b777a73485747596b733972504a7167433038364b65716b",
        "appSecret": "2d7832617268464a514c484b4268726d5635654665686b53626638354d42426443476a7173674f2d534f35734f64684b33544b45317041656e707951574d7638"
   })
    .then((response) => {
      console.log(response.data);
      setAuth(response.data);

    });
    },[])

    
  return (
    <div>
        <h1>hello api page</h1>
    </div>
  )
}

export default PostReq