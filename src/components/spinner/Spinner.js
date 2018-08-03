import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Spinner.scss';

function Spinner(props) {
  const { width, className } = props;
  const classNames = classnames('spinner', className);
  return (
    <svg
      className={classNames}
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="path"
        fill="none"
        stroke={props.color}
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
}

Spinner.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
};

Spinner.defaultProps = {
  width: 65
};

export default Spinner;
