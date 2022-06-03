import { createContext, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export type BreadcrumbItemType = {
  title: string;
  link?: string;
};

/**
 * The PageMeta provides developers with tools to configure the state of
 * the navigation menu, breadcrumbs and title.
 */
export type PageMetaType = {
  /**
   * Highlight menu item with active state.
   */
  selectedMenuKeys?: string[];
  /**
   * Open submenu parent to display highlighted child items
   */
  openMenuKeys?: string[];

  /**
   * Set breadcrumbs in the layout of the page
   */
  breadcrumbs?: BreadcrumbItemType[];

  /**
   * Set title of the page
   */
  title?: string;
};

export type PageMetaContextType = PageMetaType & {
  setSelectedMenuKeys: (keys?: string[]) => void;
  setOpenMenuKeys: (keys?: string[]) => void;
  setBreadcrumbs: (breadcrumbs?: BreadcrumbItemType[]) => void;
};

/**
 * This is a Context object for PageMeta.
 * SHOULD NOT BE USED WITHOUT PageMetaContextProvider component
 */
export const PageMetaContext = createContext<PageMetaContextType>({
  selectedMenuKeys: [],
  openMenuKeys: [],
  breadcrumbs: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  setSelectedMenuKeys: () => {
    // init
  },
  setOpenMenuKeys: () => {
    // init
  },
  setBreadcrumbs: () => {
    // init
  },
  /* eslint-enable @typescript-eslint/no-empty-function */
});

/**
 * The provider wraps the context to inject the reducer into
 * the context consumers
 */
export const PageMetaContextProvider: React.FC = ({ children }) => {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState<
    string[] | undefined
  >([]);
  const [openMenuKeys, setOpenMenuKeys] = useState<string[] | undefined>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<
    BreadcrumbItemType[] | undefined
  >([]);

  return (
    <PageMetaContext.Provider
      value={{
        selectedMenuKeys,
        setSelectedMenuKeys,
        openMenuKeys,
        setOpenMenuKeys,
        breadcrumbs,
        setBreadcrumbs,
      }}
    >
      {children}
    </PageMetaContext.Provider>
  );
};

/**
 * Use this component to define the PageMeta in the PageMetaContext in declarative way
 * @param props
 * @returns null. not rendered in the component
 */
export const PageMeta: React.FC<PageMetaType> = ({
  selectedMenuKeys,
  openMenuKeys,
  breadcrumbs,
  title,
}) => {
  const pageMetaContext = useContext(PageMetaContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    pageMetaContext.setOpenMenuKeys(openMenuKeys);
  }, [openMenuKeys]);

  useEffect(() => {
    pageMetaContext.setSelectedMenuKeys(selectedMenuKeys);
  }, [selectedMenuKeys]);

  useEffect(() => {
    pageMetaContext.setBreadcrumbs(breadcrumbs);
  }, [breadcrumbs]);
  /* eslint-disable react-hooks/exhaustive-deps */

  return (
    <Helmet>
      <title>CPA{title ? ` — ${title}` : ""}</title>
    </Helmet>
  );
};
