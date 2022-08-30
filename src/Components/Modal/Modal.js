import React from 'react';
import PropTypes from 'prop-types';
import styles from './sccs/modal.module.scss';
import kitten from '../../images/kitten.gif';

const Modal = ({active, setActive}) => (
	<div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
		<div className={active ? `${styles.modalContent} ${styles.active}` : styles.modalContent} onClick={e => e.stopPropagation()}>
			<div className={styles.title}>
				<p>If you are sad kitten try to recall that:)</p>
			</div>
			<div className={styles.gif}>
				<img src={kitten} alt='' />
			</div>
			<p className={styles.descr}>P.s it is you)</p>
		</div>
	</div>
);

Modal.propTypes = {
	active: PropTypes.bool.isRequired,
	setActive: PropTypes.func.isRequired,
};
export default Modal;
