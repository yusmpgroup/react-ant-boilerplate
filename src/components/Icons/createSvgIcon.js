import React from 'react';
import Icon from '@ant-design/icons/es';

const createSvgIcon = (svg) => (props) => <Icon component={svg} {...props} />;

export default createSvgIcon;
