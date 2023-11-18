import * as Styled from './NavBrandImage.styled';

type Props = {
    src: string,
    alt?: string,
    width?: string,
    height?: string,
}

const NavBrandImage = (props: Props) => {

    return (
        <Styled.Image {...props} />
    )
}

export default NavBrandImage;