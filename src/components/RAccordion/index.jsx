import PropTypes from 'prop-types';

import { useToggle } from 'hooks/useToggle';
import { Container, Header, ChevronIcon, Body } from './styled';

RAccordion.propTypes = {
  mainTitle: PropTypes.string,
  maxHeight: PropTypes.string,
  children: PropTypes.any,
};

export function RAccordion({ mainTitle, maxHeight, children }) {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <Container>
      <Header>
        {mainTitle}
        <ChevronIcon
          open={isOpen}
          onClick={setIsOpen}
        />
      </Header>
      <Body
        maxHeight={maxHeight || '200px'}
        marginTop="28px"
        hide={!isOpen}
      >
        {children}
      </Body>
    </Container>
  );
}
