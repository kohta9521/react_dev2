import React from 'react';
import MediaQuery from 'react-responsive'; 
import styled from 'styled-components'

export const Header = () => {
    return (
        <div className="App">
            <MediaQuery query="(max-width: 767px)">
                <MainContainerPhone>
                  <h1>PHONE Header</h1>              
                </MainContainerPhone>
            </MediaQuery>

            <MediaQuery query="(min-width: 768px)">
                <MainContainerPC>
                  <h1>PC Header</h1>        
                </MainContainerPC>
            </MediaQuery>
        </div>
    )
}

const MainContainerPhone = styled.div`
    width: 100%;
    > img {
        width: 100%;
    }
`;

const MainContainerPC = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    > img {
        width: 100%;
    }
`;