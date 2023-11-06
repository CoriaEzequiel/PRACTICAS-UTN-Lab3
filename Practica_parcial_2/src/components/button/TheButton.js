import React from 'react'

const button = ({ children, setDaysHandler, days }) => {

    const onClickSetDays = (event) => {
        event.preventDefault()
        children === "+" ? setDaysHandler(days+1) : setDaysHandler(days-1)
    }

    return (
        <button onClick={onClickSetDays}>{children}</button>
    )
}

export default button