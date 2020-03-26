import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, BackContet } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <BackContet>
        <Content>{children}</Content>
      </BackContet>
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropTypes.element.isRequired,
};
