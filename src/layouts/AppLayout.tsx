import { Breadcrumb, Layout } from "antd";
// import { UserOutlined, LineChartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
// import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { Link, Outlet } from "react-router-dom";
import { PageMetaContext } from "@/context/PageMetaContext";

const { Content } = Layout;

// const sidebarNavItems = [
//   {
//     text: "Reports",
//     id: "Reports",
//     key: "reports",
//     icon: <LineChartOutlined />,
//     isNavItem: true,
//     items: [
//       {
//         text: "Dashboards",
//         key: "dashboards",
//         path: "/reports/dashboards",
//       },
//       {
//         text: "Bill",
//         key: "Bill",
//         path: "/reports/bill",
//       },
//       {
//         text: "Alex",
//         key: "Alex",
//         path: "/reports/alex",
//       },
//     ],
//   },
//   {
//     text: "Option 2",
//     key: "Option2",
//     icon: <UserOutlined />,
//     isNavItem: true,
//     path: "/",
//   },
//   {
//     text: "Option 3",
//     key: "Option3",
//     isNavItem: true,
//     icon: <UserOutlined />,
//     path: "/",
//   },
// ];
const BreadcrumbItem = Breadcrumb.Item;
const AppLayout: React.FC = ({ children }) => {
  const pageMetaContext = useContext(PageMetaContext);
  return (
    <div className="h-full ">
      {/* <AppSidebar navItems={sidebarNavItems} /> */}
      <div>
        <AppHeader isUserLoggedIn />
        <div className="p-6 space-y-6">
          <Content style={{ minHeight: 280 }}>
            <Breadcrumb>
              {pageMetaContext.breadcrumbs?.map((breadcrumb, index) => (
                <BreadcrumbItem key={index}>
                  {breadcrumb.link ? (
                    <Link to={breadcrumb.link}>{breadcrumb.title}</Link>
                  ) : (
                    breadcrumb.title
                  )}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
            <Outlet />
          </Content>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AppLayout;
