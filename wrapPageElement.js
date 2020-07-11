import React from 'react';
import AppProvider from './src/hooks';
import { Layout } from './src/components/Layout';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <AppProvider>
    <Layout {...props}>{element}</Layout>
  </AppProvider>
);

export default wrapPageElement;
