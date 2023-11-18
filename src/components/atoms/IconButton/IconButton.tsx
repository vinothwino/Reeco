import FontIcon from '../FontIcon';
import * as Styled from './IconButton.styled';

type Props = {
    iconName: string,
    children: any,
    className?: string
}

const IconButton = (props: Props) => {
    const { className, iconName, children } = props;

    return (
        <Styled.IconButton className={className}>
            <FontIcon iconName={iconName} />
            {children}
        </Styled.IconButton>
    )
}

export default IconButton