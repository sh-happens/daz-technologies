import { PageMeta } from '@/context/PageMetaContext';
import { Typography } from 'antd';

const {Title} = Typography

const Dashboard = () => {
  return (
    <>
      <PageMeta
        title="Dashboards"
        openMenuKeys={['reports']}
        selectedMenuKeys={['dashboards']}
        breadcrumbs={[
          { title: 'Reports' },
          { title: 'Dashboards', link: '/reports/dashboards' },
        ]}
      />
      <Title>Dashboards</Title>
    </>
  );
};

export default Dashboard;
