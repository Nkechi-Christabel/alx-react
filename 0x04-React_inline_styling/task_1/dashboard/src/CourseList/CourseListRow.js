import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({
  isHeader,
  textFirstCell,
  textSecondCell,
  className,
}) => {
  const rowStyle = {
    backgroundColor: '#f5f5f5ab',
  };

  const headerStyle = {
    backgroundColor: '#deb5b545',
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} style={headerStyle} className={className}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerStyle} className={className}>
              {textFirstCell}
            </th>
            <th style={headerStyle} className={className}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td className={className}>{textFirstCell}</td>
          <td className={className}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  className: PropTypes.string,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: '',
};

export default CourseListRow;
