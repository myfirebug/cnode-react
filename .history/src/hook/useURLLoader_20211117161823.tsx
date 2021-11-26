import React, {
    useState,
    useEffect
} from 'react'
import Ajax from '../service'
import { Toast } from '@src/packages'


const useURLLoader = (requestName: string, params: any, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (Ajax[requestName]) {
    
        } else {
            Toast({
                type: "html",
                content: `${requestName}在../service/index.tsx中未找到`
            })
        }
    }, deps)
    
}

export default useURLLoader