import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { AppLogo } from 'components/AppLogo';
import {
  Sidebar,
  Logo,
  Title,
  ItemWrap,
  ItemLink,
  ItemIcon,
  ItemText,
} from './styled';

RSidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.any,
      route: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
};

function RSidebar({ links, isOpened, onClose = () => {} }) {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    if (isOpened && prevLocation.current !== location.pathname) {
      onClose();
      prevLocation.current = location.pathname;
    }
  }, [location.pathname]);

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <ItemWrap key={link.route}>
          <ItemLink to={link.route}>
            <ItemIcon>{link.icon}</ItemIcon>
            <ItemText>{link.title}</ItemText>
          </ItemLink>
        </ItemWrap>
      );
    });
  };

  return (
    <Sidebar isOpened={isOpened}>
      <Logo>
        <AppLogo />
      </Logo>
      <Title>Menu</Title>
      {renderLinks()}
    </Sidebar>
  );
}

export default RSidebar;
