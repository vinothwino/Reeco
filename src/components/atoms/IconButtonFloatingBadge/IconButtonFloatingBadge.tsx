import * as Styled from './IconButtonFloatingBadge.styled'

type Props = {
    iconName: string,
    badgeLabel: string
}

const IconButtonFloatingBadge = (props: Props) => {
    const { iconName, badgeLabel } = props;

    return (
        <Styled.IconButtonOverriden iconName={iconName}>
            <Styled.BadgeOverriden label={badgeLabel} />
        </Styled.IconButtonOverriden>
    )
}

export default IconButtonFloatingBadge