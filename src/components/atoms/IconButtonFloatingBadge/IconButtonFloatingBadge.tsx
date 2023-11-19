import * as Styled from './IconButtonFloatingBadge.styled'

type Props = {
    iconName: string,
    badgeLabel: string,
    iconColor?: string
}

const IconButtonFloatingBadge = (props: Props) => {
    const { iconName, iconColor, badgeLabel } = props;

    return (
        <Styled.IconButtonOverriden iconName={iconName} color={iconColor}>
            <Styled.BadgeOverriden label={badgeLabel} />
        </Styled.IconButtonOverriden>
    )
}

export default IconButtonFloatingBadge