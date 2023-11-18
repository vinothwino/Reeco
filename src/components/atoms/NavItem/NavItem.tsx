import * as Styled from './NavItem.styled';

type Props = {
    children: any,
    className?: string,
    href?: string
}

const NavItem = (props: Props) => {
    const { children, className, href } = props;

    return (
        <Styled.NavItem className={className}>
            <Styled.NavLink href={href}>
                {children}
            </Styled.NavLink>
        </Styled.NavItem >
    )
}

NavItem.defaultProps = {
    className: '',
    href: '#'
}

export default NavItem