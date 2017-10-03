// @flow
import React from 'react'

type LinkProps={
    active:Boolean,
    children: Object,
        onClick: Function,
}
const Link = ({ active, children, onClick }:LinkProps) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={(e:Object) => {
                e.preventDefault();
                onClick()
            }}
        >
            {children}
        </a>
    )
}


export default Link