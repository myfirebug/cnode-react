import React, {
    useState,
    useEffect
} from 'react'
import Ajax from '../service'


const useURLLoader = (requestName: string, params: any, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
    }, deps)
}

export default useURLLoader