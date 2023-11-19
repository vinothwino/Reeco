import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    visibility: hidden;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    transition: all .3s ease;
    opacity:0;
    &.show{
        visibility: visible;
        opacity:1;
    }
`;

const ModalDialog = styled.div`
    position: relative;
    z-index: 1050;
    margin: 10rem auto;
    background-color:white;
    border-radius: 3px;
    padding: 2rem 1.5rem;
    &.size-sm{
        max-width: 500px;
    }

    &.size-md{
        max-width: 700px;
    }
    &.centered{
        margin: 0 auto;
        top:50%;
        transform: translateY(-50%);
    }
`;

const ModalBackdrop = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    background-color: #0000007d;
`;

export { Modal, ModalDialog, ModalBackdrop }