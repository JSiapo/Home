import React from 'react';
import { Container } from 'semantic-ui-react';

const BasicLayout = ({ children }) => {
  return (
    <Container fluid className='basic-layout'>
      <div className='content'>{children}</div>
    </Container>
  );
};

export default BasicLayout;
