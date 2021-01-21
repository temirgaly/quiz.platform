import React from 'react';

import { Container, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export default () => {
    const ActiveItem = useLocation().pathname;

    return (
        <Menu fixed='top' inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name='home' active={ActiveItem === '/'} />
                </Link>
                <Link to='/about'>
                    <Menu.Item name='about' active={ActiveItem === '/about'} />
                </Link>
            </Container>
        </Menu>
    );
}