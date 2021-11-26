import React, {
    FC,
    useState
} from 'react'
import { ActionSheet } from '@src/packages'


const Theme:FC = () => {
    const [visible, setVisible] = useState(false)
    const [datas] = useState([])
    return (
        <ActionSheet visible={visible} datas={datas} />
    )
}

export default Theme