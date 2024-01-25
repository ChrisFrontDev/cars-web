import { Box, Stack } from '@mui/material';
import React from 'react';

import MyBreadcrumbs from '../components/ui/breadcrumb';
import PageTitle from '../components/ui/page-title';

interface IBasePageLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  path: {
    label: string;
    to?: string;
  }[];
}

const BasePageLayout = ({ children, pageTitle, path }: IBasePageLayoutProps) => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={1}>
        <Box sx={{ flexGrow: 1 }}>
          <PageTitle title={pageTitle} />
          <MyBreadcrumbs path={path} />
        </Box>
      </Stack>
      <Box mt={2}>{children}</Box>
    </>
  );
};
export default BasePageLayout;
