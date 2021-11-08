import React from 'react'
import { People} from './List'

const Lists:React.FC<People> = ({people})=> {

    return (
        <ul>
            {people.length > 0 && people.map((p)=>{
                return(
                    <li style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <img height={100} width={100} src={p.image} />
                        <span>{p.name}</span>
                        <span>{p.address}</span>
                        <span>{p.note}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Lists
