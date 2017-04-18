import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: 'Sarah S',
          }}
        />
    </Wrapper>
  );
}

export default Footer;
