# Create Petrel App

This project was created according to Petrel's guidelines that are maintained by frontend team.

## User Interface and Styling

Ant design was selected as default UI library for all projects that doesn't require custom interface implemented.
You can find all information related to ant design on the [official website](https://ant.design/).

To provide additional tooling for the easy styling Tailwind was selected instead of Css-In-JS (here is [the reason why](https://tailwindcss.com/docs/utility-first)). Find more information and documentation on the [official website](https://tailwindcss.com/).

## TODO:

- [x] Set up the repository
- [x] Add craco and tailwind
- [ ] - Integrate tailwind with ant.design colors
- [ ] - https://tailwindcss.com/docs/utility-first
- [x] Set up environments and configuration
- [x] Install ant design
- [x] Typescript aliases
- [ ] Set up eslint for typescript and husky (moved to issue #1)
- [ ] - https://github.com/nodesecurity/eslint-plugin-security
- [ ] - `npm audit`
- [ ] - Git commit convention linting (https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
- [ ] Set up layout for admin panel
- [ ] - Menu component
- [ ] - Breadcrumb context
- [ ] - React helmet
- [ ] Set up layout for guest and login pages
- [ ] Determine state management style
- [ ] Choose form management lib (formik, react-hook-form, ant.design forms)
- [ ] Choose date management lib (date-fns vs moment vs dayjs)
- [ ] Add error page examples
- [ ] Axios and gateway layer examples
- [ ] i18n
- [ ] Make an instruction for quick setup
- [ ] Make a well documented module example (auth, settings?)
- [ ] Set up module routing (https://t.me/feature_slices/11)
- [ ] Standardize API and BA requirements
- [ ] Intergate Drawers with navigation & routing
- [ ] Module generation CLI commands
- [ ] - TSDoc
- [ ] Generate code based on forms description
- [ ] Display the content of README.md at Home Page in dev-only mode
- [ ] Make error template for client view

## Components

### `PageMeta`

The `PageMeta` allows developers to manipulate following parts of the interface through the context:

- `openMenuKeys`: control `SideBarNavigation` component's open sub-menus
- `selectedMenuKeys`: `SideBarNavigation` component's active items
- `breadcrumbs`: Pass array of `BreadcrumbItemType` objects to form Breadcrumbs in the layout UI
- `title`: Manipulate `<title>` of the page using `react-helmet`

Each page should contain exactly one instance of the `PageMeta` component to ensure that the `SideMenu` would be active on page reload or direct URL visit and breadcrumbs are displayed correctly. Having the title on the page is also a crucial part of the user experience.

#### Example usage

```tsx
import { PageMeta } from '@context/PageMeta';

function SomePage() {
  return (
    <>
      <PageMeta
        title="Dashboards"
        openMenuKeys={['reports']} // The submenu that should be open on this page
        selectedMenuKeys={['dashboards']} // The menu item that should be active on this page
        breadcrumbs={[
          // Each `BreadcrumbItemType` consists of `title` string (required)
          { title: 'Reports' },
          // and `link` string, which is optional and would render as a plain text in the breadcrumbs
          { title: 'Dashboards', link: '/reports/dashboards' },
        ]}
      />
      {/* Rest of the page */}
    </>
  );
}
```

#### `AppFooter`

Section of content at the very bottom of page. Footer contains information that improves a website's overall usability such as copyright notice, link to a privacy policy, logo, contact information, social media icons.

#### `AppSidebar`

Side navigation provides the multi-level structure of the website.

#### `Header`

## Found a bug? Want to contribute?

Here is a greate example of a report of the problem you are trying to solve and solution you are about to propose from GitLab development team.
https://gitlab.com/gitlab-org/gitlab/-/issues/292977

It would be great if your contribution is well documented and has an approval from another contributors of this project.
