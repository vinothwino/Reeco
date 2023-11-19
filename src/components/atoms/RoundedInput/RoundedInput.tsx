import React, { SyntheticEvent } from 'react'
import * as Styled from './RoundedInput.styled';
import { FontIconProps } from '../FontIcon';

type Props = {
    className?: string,
    handleChange: React.ChangeEventHandler,
    name: string,
    type?: string,
    value: string | number,
    placeholder?: string,
    iconProps?: FontIconProps
}

const RoundedInput = (props: Props) => {
    const {
        className,
        type,
        handleChange,
        name,
        value,
        placeholder,
        iconProps
    } = props;

    return (
        <Styled.InputWrapper className={className}>
            <Styled.Input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <Styled.InputIcon {...iconProps} />
        </Styled.InputWrapper>
    )
}

RoundedInput.defaultProps = {
    type: 'text'
}

export default RoundedInput