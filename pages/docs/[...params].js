

import { useRouter } from 'next/router'
function params() {
    const router = useRouter()

    const { params =[] } = router.query

    console.log(params)

    if(params.length === 2) {
        return (
           <h1>viewing docs for feature {params[0]} and concept {params[1]} </h1>
   ) 
  }else if (params.length ===1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  }


  return 
    <h1>Docs home page</h1>
  
}

export default params
