import React from 'react'
import * as Styled from './BreadCrumbs.styled';

type Props = {
    className?: string
}

const BreadCrumbs = (props: Props) => {
    const { className } = props;

    return (
        <nav aria-label="bread-crumbs" className={className}>
            <Styled.BreadCrumbs>
                <Styled.BreadCrumbItem>
                    <a href='#'>Orders</a>
                </Styled.BreadCrumbItem>
                <Styled.BreadCrumbItem >
                    <span className='active'>
                        Order 324567ABC
                    </span>
                </Styled.BreadCrumbItem>
            </Styled.BreadCrumbs>
        </nav>
    )
}

export default BreadCrumbs