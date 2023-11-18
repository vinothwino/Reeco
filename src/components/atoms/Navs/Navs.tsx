import * as Styled from './Navs.styled';

type Props = {
    children: any
}

const Navs = (props: Props) => {
    const { children } = props;

    return (
        <Styled.Navs>{children}</Styled.Navs>
    )
}

export default Navs