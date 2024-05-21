import React from 'react';
import PropTypes from 'prop-types';
// import './CourseList.css';

const CourseListRow = ({
  isHeader,
  textFirstCell,
  textSecondCell,
  classname,
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
          <th colSpan={2} style={headerStyle} classname={classname}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerStyle} classname={classname}>
              {textFirstCell}
            </th>
            <th style={headerStyle} classname={classname}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td classname={classname}>{textFirstCell}</td>
          <td classname={classname}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  classname: '',
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  classname: PropTypes.string,
};

export default CourseListRow;
