import React from 'react';
import MediaQuery from 'react-responsive'; 
import styled from 'styled-components'

export const Header = () => {
    return (
        <div className="App">
            <MediaQuery query="(max-width: 767px)">
                <MainContainerPhone>
                  <div className="header">
                    <div className="logo">
                      <h2 className='logo-item'>LOGO</h2>
                    </div>
                    <div className="menu">
                      <ul className='menu-list'>
                        <li className='menu-item'><a href="">HOME</a></li>
                        <li className='menu-item'><a href="">ABOUT</a></li>
                        <li className='menu-item'><a href="">SERVICE</a></li>
                        <li className='menu-item'><a href="">MEMBER</a></li>
                        <li className='menu-item'><a href="">FAQ</a></li>
                        <li className='menu-item'><a href="">CONTACT</a></li>
                      </ul>
                    </div>
                  </div>
                </MainContainerPhone>
            </MediaQuery>

            <MediaQuery query="(min-width: 768px)">
                <MainContainerPC>
                <div className="header">
                    <div className="logo">
                      <h2 className='logo-item'>LOGO</h2>
                    </div>
                    <div className="menu">
                      <ul className='menu-list'>
                        <li className='menu-item'><a href="">HOME</a></li>
                        <li className='menu-item'><a href="">ABOUT</a></li>
                        <li className='menu-item'><a href="">SERVICE</a></li>
                        <li className='menu-item'><a href="">MEMBER</a></li>
                        <li className='menu-item'><a href="">FAQ</a></li>
                        <li className='menu-item'><a href="">CONTACT</a></li>
                      </ul>
                    </div>
                  </div>     
                </MainContainerPC>
            </MediaQuery>
        </div>
    )
}

const MainContainerPhone = styled.div`
    width: 100%;
    height: 100px;
`;

const MainContainerPC = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    height: 100px;
`;