import React, {useEffect, useState} from 'react'
import LottieControl from './LottieControl';
import axios from "axios";

function NotFound() {

    //-------LOTTIE FILES ADD -------------//
    
    //creating this state to store our json
    const [someJson, setJson] = useState(null)
    
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get("https://assets4.lottiefiles.com/private_files/lf30_mnser97e.json" )
            setJson(res.data)
        }

        getData()
    }, [])
    //---------------then change div content in the return section down ------------------------//

    return (
        <div>
          <LottieControl animation={someJson} width={1000} height={600}/>  
        </div>
    )
}

export default NotFound
