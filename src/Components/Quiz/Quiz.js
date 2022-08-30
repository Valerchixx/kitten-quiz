import React from 'react';
import {useState} from 'react';
import styles from './scss/quiz.module.scss';
import Option from '../Option/Option';
import ShowScore from '../ShowScore/ShowScore';
import Modal from '../Modal/Modal';

const Quiz = () => {
	const questionsArray = [
		{question: 'Which is our pass?', answers: [
			{option: 'Mantany_56', isCorrect: true, id: 89},
			{option: 'mantany', isCorrect: false, id: 34},
			{option: 'Mantany 56', isCorrect: false, id: 26},
			{option: 'mantany_56', isCorrect: false, id: 74},
		]},
		{question: 'Which ice cream our fav?', answers: [
			{option: 'raspberry', isCorrect: false, id: 53},
			{option: 'chockolate & myrtille', isCorrect: true, id: 48},
			{option: 'vanille', isCorrect: false, id: 27},
			{option: 'myrtille', isCorrect: false, id: 88},
		]},
		{question: 'My fav word?', answers: [
			{option: 'так так', isCorrect: true, id: 0},
			{option: 'mantany', isCorrect: false, id: 1},
			{option: 'grrrr', isCorrect: false, id: 56},
			{option: 'mrrr', isCorrect: false, id: 41},
		]},
		{question: 'Our future kitten?', answers: [
			{option: 'gray', isCorrect: false, id: 22},
			{option: 'white', isCorrect: false, id: 40},
			{option: 'white-gray multicolor', isCorrect: true, id: 5},
			{option: 'white-black multicolor', isCorrect: false, id: 7},
		]},
		{question: 'Таке життя...', answers: [
			{option: 'воно бентежне', isCorrect: true, id: 87},
			{option: 'а ми інашкші', isCorrect: false, id: 23},
			{option: 'воно бентежне, а ми не аккуратні', isCorrect: false, id: 79},
			{option: '?????', isCorrect: false, id: 98},
		]},
		{question: 'Everything...', answers: [
			{option: 'will be oke je t\'aime kitten too much)', isCorrect: true, id: 66},
			{option: 'im sad kitten to answer', isCorrect: false, id: 49},
			{option: 'could be wonderful ♡', isCorrect: true, id: 86},
			{option: 'will work out but now im in cloud(', isCorrect: false, id: 8},
		]},
	];
	const [score, setScore] = useState(0);
	const [currQuestion, setCurrQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [active, setActive] = useState(false);

	const handleNext = isCorrect => {
		if (isCorrect) {
			setScore(score => score + 1);
		}

		const nextQuestion = currQuestion + 1;
		if (nextQuestion < questionsArray.length) {
			setCurrQuestion(curr => curr + 1);
		} else {
			setShowScore(true);
		}

		if (nextQuestion === 6 && !isCorrect) {
			setActive(active => !active);
		}
	};

	return (
		<div className={styles.quiz}>
			{showScore ? <ShowScore score={score} />
				: <div>
					<div className={styles.currQuestion}>
						<p>{`${currQuestion + 1}/6`}</p>
					</div>
					<div className={styles.title}>
						<p>{questionsArray[currQuestion].question}</p>
					</div>
					<div className={styles.quizInner}>
						{questionsArray[currQuestion].answers.map((item, _i) => <Option handle={() => handleNext(item.isCorrect)} key={item.id} text={item.option} />)}
					</div>
					<div className={styles.bottom}></div>
				</div>
			}
			<Modal active={active} setActive={setActive} />
		</div>

	);
};

export default Quiz;
