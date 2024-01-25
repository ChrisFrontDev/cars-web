import { PersonAddAlt } from '@mui/icons-material';
import { Box, Button, Paper, Stack } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import MyBreadcrumbs from '../components/ui/breadcrumb';
import PageTitle from '../components/ui/page-title';

interface IBasePageLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  labelTitle: string;
}

const BasePageLayout = ({ children, pageTitle, labelTitle }: IBasePageLayoutProps) => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={1} mb={2}>
        <Box sx={{ flexGrow: 1 }}>
          <PageTitle title={pageTitle} />
          <MyBreadcrumbs path={[{ label: 'Cars', to: '/cars' }, { label: labelTitle }]} />
        </Box>
        <Box>
          <Button component={RouterLink} to="/users/new" variant="contained" startIcon={<PersonAddAlt />}>
            New Car
          </Button>
        </Box>
      </Stack>
      <Paper>{children}</Paper>
    </>
  );
};
export default BasePageLayout;
