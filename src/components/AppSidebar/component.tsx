import { PageMetaContext } from '@/context/PageMetaContext';
import { Menu, Layout } from 'antd';
import { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppSidebarProps } from './props';

export const AppSidebar: FC<AppSidebarProps> = ({ navItems }) => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const {
    selectedMenuKeys,
    setSelectedMenuKeys,
    openMenuKeys,
    setOpenMenuKeys,
  } = useContext(PageMetaContext);

  return (
    <Sider
      width={250}
      collapsible
      collapsed={isCollapsed}
      onCollapse={handleCollapseClick}
    >
      <div>
        <Link
          to="/"
          className={`flex items-center px-1.5 ${
            isCollapsed ? 'justify-center' : 'justify-start'
          }`}
          style={{ height: '60px' }}
        >
          <img
            className="logo h-12"
            src="/images/logo-header.png"
            alt={process.env.REACT_APP_NAME}
          />
          {!isCollapsed && (
            <span className="text-white text-xl">
              {process.env.REACT_APP_NAME}
            </span>
          )}
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedMenuKeys}
        onSelect={(info) => setSelectedMenuKeys(info.selectedKeys)}
        openKeys={openMenuKeys}
        onOpenChange={(openKeys) => setOpenMenuKeys(openKeys)}
      >
        {navItems.map(
          (navItem) =>
            navItem.isNavItem &&
            (navItem.items ? (
              <SubMenu
                key={navItem.key}
                title={navItem.text ?? ''}
                icon={navItem.icon}
              >
                {navItem.items.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link to={item.path ?? '/wrongrouteitem'}>
                      {item.text ?? ''}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={navItem.key} icon={navItem.icon}>
                <Link to={navItem.path ?? '/wrongrouteitem'}>
                  {navItem.text ?? ''}
                </Link>
              </Menu.Item>
            ))
        )}
      </Menu>
    </Sider>
  );
};
