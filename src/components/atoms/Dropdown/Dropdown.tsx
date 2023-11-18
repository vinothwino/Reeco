import React from 'react'
import * as Styled from './Dropdown.styled';

type Props = {
    className?: string,
    label: string,
}

const Dropdown = (props: Props) => {
    const { label, className } = props;

    return (
        <Styled.Dropdown className={className}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.FontIconOverriden iconName='angle-down' role="button" ariaLabel={"dropdown-caret"} />
        </Styled.Dropdown>
    )
}

export default Dropdown