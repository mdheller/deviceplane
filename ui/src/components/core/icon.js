import React from 'react';
import { IconSvgPaths20 } from '@blueprintjs/icons';
import styled from 'styled-components';

import { Box } from './box';
import theme from '../../theme';

const Svg = styled(Box).attrs({ as: 'svg' })`
  flex-shrink: 0;
`;

const Icon = ({ color, icon, alt, size = 16, ...props }) => {
  const paths = IconSvgPaths20;

  let fillColor = theme.colors[color];

  if (Number.isInteger(size)) {
    size = `${size}px`;
  }

  if (color.indexOf('.') !== -1) {
    const [a, b] = color.split('.');
    fillColor = theme.colors[a][b];
  }

  return (
    <Svg
      alt={alt}
      fill={fillColor}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      {...props}
    >
      {paths[icon].map((d, i) => (
        <path key={i} d={d} fillRule="evenodd" />
      ))}
    </Svg>
  );
};

export default Icon;
