import PropTypes from 'prop-types';

import { Tabs, Tab } from './styled';

RTabs.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
  activeTab: PropTypes.string,
  minWidth: PropTypes.string,
  fullWidth: PropTypes.bool,
  withBorder: PropTypes.bool,
  setTab: PropTypes.func,
};

export function RTabs({
  options,
  activeTab,
  minWidth,
  fullWidth = false,
  withBorder = true,
  setTab = () => {},
}) {
  const renderTabs = () => {
    return options.map((tab) => {
      return (
        <Tab
          key={tab.slug}
          as="button"
          type="button"
          active={tab.slug === activeTab}
          onClick={() => setTab(tab.slug)}
          fullWidth={fullWidth}
          minWidth={minWidth}
          withBorder={withBorder}
        >
          {tab.title}
        </Tab>
      );
    });
  };

  return <Tabs fullWidth={fullWidth}>{renderTabs()}</Tabs>;
}
