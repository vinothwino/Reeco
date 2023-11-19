export type Props = {
    iconName: string,
    iconPrefix?: string,
    className?: string,
    role?: string,
    ariaLabel?: string
}

const FontIcon = (props: Props) => {
    const { className, ariaLabel, iconPrefix, iconName, role } = props;

    return (
        <i className={`${iconPrefix}${iconName} ${className}`} role={role} aria-label={ariaLabel}></i>
    )
}

FontIcon.defaultProps = {
    iconPrefix: 'icon-'
}

export default FontIcon