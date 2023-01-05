import styled from 'styled-components';

const SpinLoaderStyled = styled.div`
    @keyframes rotateSpinLoading{
        0%{
            transform: rotate(0deg);
        }100%{
            transform: rotate(360deg);
        }
    }
    height: ${props => props.size};
    width: ${props => props.size};
    .loader{
        animation: rotateSpinLoading 0.5s linear infinite;
        border: 2px solid rgba(0,0,0,0);
        border-radius: 50%;
        border-bottom-color: ${({ theme }) => theme.loader.red};
        border-top-color: ${({ theme }) => theme.loader.blue};
        height: 100%;
        width: 100%;
    }
`

export function SpinLoader({ size }){
    return(
        <SpinLoaderStyled size={size}>
            <div className='loader' />
        </SpinLoaderStyled>
    )
}