import React from 'react'
import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';
import Logo from '../components/Logo';

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
`
const Header = () => {
    return (
        <Section>
            <CoverVideo />
            <Logo />
        </Section>
    );
}
export default Header;