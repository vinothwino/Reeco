import styled from 'styled-components';

const BreadCrumbs = styled.ol`
  list-style: none;
  padding-left:0;
  display: inline-flex;
  align-items:center;
`;

interface BreadCrumbItemProps {
    active?: boolean
}

const BreadCrumbItem = styled.li<BreadCrumbItemProps>`
    & + &&:before {
        content:'\\f105';
        font-family: 'icomoon' !important;
        font-size: 1.3em;
        padding:0 .8rem;
        vertical-align:middle;
        line-height:1;
        color: ${({ theme }) => theme.colors.secondary}
    }
    & > .active{
        text-decoration:underline;
        text-underline-offset:2px;
        color: ${({ theme }) => theme.colors.secondary}
    }
    & {
        font-size: 1rem;
    }
    & > a{
        text-decoration:none;
    }

    &,& > a {
        color: ${({ theme }) => theme.colors.black};
    }
`;

export { BreadCrumbs, BreadCrumbItem }