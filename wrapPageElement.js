import React from 'react';
import AppProvider from './src/hooks';
import { BaseLayout } from './src/layouts/BaseLayout';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <AppProvider>
    <BaseLayout {...props}>{element}</BaseLayout>
  </AppProvider>
);

export default wrapPageElement;
