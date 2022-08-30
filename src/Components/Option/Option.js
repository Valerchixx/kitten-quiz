import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/option.module.scss';

const Option = ({text, handle}) => (
	<button className={styles.option} onClick={handle}>{text}</button>
);
Option.propTypes = {
	text: PropTypes.string.isRequired,
	handle: PropTypes.func.isRequired,
};
export default Option;
