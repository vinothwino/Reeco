import styled from 'styled-components';

import IconButton from '../IconButton/IconButton'
import Badge from '../Badge/Badge'

const IconButtonOverriden = styled(IconButton)`
  position: relative
`;

const BadgeOverriden = styled(Badge)`
  position: absolute;
  left: 4px;
  top: 4px;
  transform: translate(-50%, -50%);
`;

export { IconButtonOverriden, BadgeOverriden }
