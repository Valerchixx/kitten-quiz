import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/showScore.module.scss';
import img0 from '../../images/img0.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import heart from '../../images/heart.png';

const ShowScore = ({score}) => (
	<div>{score === 0 ? <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p>kwaaaaa you will be bitten for that or retry!!!</p></div>
		<div className={styles.imgWrap}><img src={img0} alt='' /></div>
	</div> : score === 1 ? <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p>hmmmmmm retry retry you can better</p></div>
		<div className={styles.imgWrap}><img src={img1} alt='' /></div>
	</div> : score === 2 ? <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p>oke okee but kitten need to think better</p></div>
		<div className={styles.imgWrap}><img src={img2} alt='' /></div>
	</div> : score === 3 ? <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p>almost almost you know something but yaaaa euh need better</p></div>
		<div className={styles.imgWrap}><img src={img3} alt='' /></div>
	</div> : score === 4 ? <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p>oooo this is my kitten) i love u mrrrrr you know good so good even)</p></div>
		<div className={styles.imgWrap}><img src={img4} alt='' /></div>
		<div className={styles.heartWrap}><img src={heart} alt='' /></div>
	</div> : score === 5 ? <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p> howww you are cutieeee okayyy you pass very well!! mrrrrr too much </p></div>
		<div className={styles.imgWrap} ><img src={img5} alt='' /></div>
		<div className={styles.heartWrap}><img src={heart} alt='' /></div>
	</div> : <div className={styles.wrap}>
		<div className={styles.header}><p>{`Your score is ${score}`}</p></div>
		<div className={styles.descr}><p>waaaaa perfectt you are too good! Я кохаю тебе Тиша:)</p></div>
		<div className={styles.imgWrap}><img src={img6} alt='' /></div>
		<div className={styles.heartWrap}><img src={heart} alt='' /></div>
	</div>
	}</div>
);
ShowScore.propTypes = {
	score: PropTypes.number.isRequired,
};
export default ShowScore;
