import FontIcon from '../FontIcon';
import * as Styled from './IconButton.styled';

type Props = {
    iconName: string,
    children?: any,
    className?: string,
    color?: string,
    ariaLabel?: string,
    handleClick?: () => void
}

const IconButton = (props: Props) => {
    const { className, ariaLabel, handleClick, color, iconName, children } = props;

    return (
        <Styled.IconButton className={`${className} color-${color}`} aria-label={ariaLabel} onClick={handleClick}>
            <FontIcon iconName={iconName} />
            {children}
        </Styled.IconButton>
    )
}

IconButton.defaultProps = {
    color: 'primary'
}

export default IconButton