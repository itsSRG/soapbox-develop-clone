import React from 'react';

import { Layout } from 'soapbox/components/ui';
import BundleContainer from 'soapbox/features/ui/containers/bundle-container';
import {
  LatestAccountsPanel,
} from 'soapbox/features/ui/util/async-components';

import LinkFooter from '../features/ui/components/link-footer';

interface IAdminPage {
  children: React.ReactNode
}

const AdminPage: React.FC<IAdminPage> = ({ children }) => {
  return (
    <>
      <Layout.Main>
        {children}
      </Layout.Main>

      <Layout.Aside>
        <BundleContainer fetchComponent={LatestAccountsPanel}>
          {Component => <Component limit={5} />}
        </BundleContainer>

        <LinkFooter />
      </Layout.Aside>
    </>
  );
};

export default AdminPage;
