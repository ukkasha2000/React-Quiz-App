import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the currency of Pakistan?',
			answerOptions: [
				{ answerText: 'Rupee', isCorrect: true },
				{ answerText: 'Dollar', isCorrect: false },
				{ answerText: 'Euro', isCorrect: false },
				{ answerText: 'Taka', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the president of Pakistan?',
			answerOptions: [
				{ answerText: 'Imran Khan', isCorrect: true },
				{ answerText: 'Asif Zardari', isCorrect: false },
				{ answerText: 'Nawaz Shareef', isCorrect: false },
				{ answerText: 'Shahbaz Shareef', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the second highest mountain in thhe world?',
			answerOptions: [
				{ answerText: 'Mount Everest', isCorrect: false },
				{ answerText: 'Nanga Parbat', isCorrect: false },
				{ answerText: 'K-2', isCorrect: true },
				{ answerText: 'Karakoram', isCorrect: false },
			],
		},
		{
			questionText: 'Where is trhe river Indus located?',
			answerOptions: [
				{ answerText: 'Pakistan', isCorrect: true },
				{ answerText: 'America', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<>
			<h2 className='mainHeading'>Quiz App</h2>
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
				) : (
					<>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div>
							<div className='question-section'>

								<div className='question-text'>Q{currentQuestion + 1 + ")"} {questions[currentQuestion].questionText}</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption) => (
									<button className='optionBtn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								))}
							</div>
						</div>

					</>
				)}
			</div>
		</>
	);
}
