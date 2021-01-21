import React from 'react';
import Header from '../../common/header';
import { Container } from 'semantic-ui-react';

export default ({ children }) => (
    <Container>
        <Header />
        {children}
    </Container>
);
