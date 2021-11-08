import React from 'react'
export interface People {
    people:{
        name: string,
        image: string,
        address: string,
        age: number,
        note?: string
    }[]
}
export const List=({ people }:People)=> {
    console.log('',people)
    return (
        <li>
            {/*<img src={people.image} />*/}
            {/*<span>{people.name}</span>*/}
            {/*<span>{people.name}</span>*/}
        </li>
    )
}
