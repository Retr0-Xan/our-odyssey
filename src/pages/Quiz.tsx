import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Star, Trophy, RotateCcw } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What was the first movie we watched together?",
      options: [
        "The Notebook",
        "Titanic", 
        "La La Land",
        "Pride and Prejudice"
      ],
      correct: 2,
      explanation: "La La Land - we both cried during the ending and you said it reminded you of us!"
    },
    {
      id: 2,
      question: "What's my biggest fear that I told you about?",
      options: [
        "Heights",
        "Spiders",
        "Losing you",
        "Public speaking"
      ],
      correct: 0,
      explanation: "Heights - but you helped me overcome it during our mountain hike!"
    },
    {
      id: 3,
      question: "What's the pet name I call you when no one else is around?",
      options: [
        "Sweetheart",
        "Beautiful",
        "My sunshine",
        "Angel"
      ],
      correct: 2,
      explanation: "My sunshine - because you brighten every single day of my life!"
    },
    {
      id: 4,
      question: "What's our favorite late-night snack to share?",
      options: [
        "Ice cream",
        "Pizza",
        "Popcorn",
        "Chocolate"
      ],
      correct: 0,
      explanation: "Ice cream - specifically that mint chocolate chip we always fight over!"
    },
    {
      id: 5,
      question: "What did I say was the moment I knew I loved you?",
      options: [
        "Our first kiss",
        "When you met my family",
        "When you took care of me when I was sick",
        "Our first 'I love you'"
      ],
      correct: 2,
      explanation: "When you took care of me when I was sick - you stayed up all night making sure I was okay!"
    },
    {
      id: 6,
      question: "What's the song I always hum when I'm happy?",
      options: [
        "Perfect by Ed Sheeran",
        "Can't Help Myself by Four Tops",
        "All of Me by John Legend",
        "Thinking Out Loud by Ed Sheeran"
      ],
      correct: 1,
      explanation: "Can't Help Myself - it's impossible not to dance when that song comes on!"
    },
    {
      id: 7,
      question: "What's my dream destination to visit with you?",
      options: [
        "Paris, France",
        "Santorini, Greece",
        "Tokyo, Japan",
        "Tuscany, Italy"
      ],
      correct: 1,
      explanation: "Santorini, Greece - those sunset photos we always look at together!"
    },
    {
      id: 8,
      question: "What's the silly habit of mine that you secretly love?",
      options: [
        "Singing in the shower",
        "Dancing while cooking",
        "Talking to plants",
        "Making weird faces in mirrors"
      ],
      correct: 1,
      explanation: "Dancing while cooking - you always join in and we turn the kitchen into our dance floor!"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Perfect! You know me better than I know myself! 💕";
    if (percentage >= 70) return "Amazing! You really pay attention to the little things! 😍";
    if (percentage >= 50) return "Not bad! But we need more deep conversations! 😊";
    return "Looks like we have some catching up to do! 😅";
  };

  if (quizCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-32 pb-16 flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="elegant-card rounded-3xl p-16 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <Trophy className="text-yellow-600" size={80} />
            </motion.div>
            
            <h2 className="text-5xl serif text-gray-800 mb-6">Quiz Complete!</h2>
            
            <div className="mb-8">
              <div className="text-6xl font-light serif text-gray-800 mb-4">
                {score}/{questions.length}
              </div>
              <div className="text-2xl text-gray-600 mb-6">
                {Math.round((score / questions.length) * 100)}% Correct
              </div>
            </div>
            
            <p className="text-2xl script text-gray-700 leading-relaxed mb-12">
              {getScoreMessage()}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-none font-medium tracking-wider"
              >
                <RotateCcw size={20} />
                <span>TRY AGAIN</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-4 bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-300 rounded-none font-medium tracking-wider"
              >
                BACK TO HOME
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-16"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-light serif text-gray-800 mb-6">
            How Well Do You Know Me?
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Test your knowledge of our relationship with this fun quiz about me, us, and our memories together.
          </p>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-gray-600">Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="elegant-card rounded-3xl p-12"
          >
            {/* Question Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                <Brain className="text-white" size={28} />
              </div>
              <h2 className="text-3xl serif text-gray-800">
                {questions[currentQuestion].question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  className={`w-full p-6 text-left rounded-2xl transition-all duration-300 quiz-option ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? 'correct'
                        : selectedAnswer === index
                        ? 'incorrect'
                        : 'opacity-50'
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 ${
                      showResult && index === questions[currentQuestion].correct
                        ? 'bg-green-500 border-green-500 text-white'
                        : showResult && selectedAnswer === index && index !== questions[currentQuestion].correct
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'border-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg text-gray-800">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Result Explanation */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-gray-200 pt-8"
                >
                  <div className="flex items-start space-x-4">
                    <Heart className="text-rose-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-xl serif text-gray-800 mb-2">
                        {selectedAnswer === questions[currentQuestion].correct ? "Correct!" : "Not quite..."}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {questions[currentQuestion].explanation}
                      </p>
                      <button
                        onClick={handleNextQuestion}
                        className="px-8 py-3 bg-gray-800 text-white hover:bg-gray-900 transition-colors rounded-none font-medium tracking-wider"
                      >
                        {currentQuestion < questions.length - 1 ? 'NEXT QUESTION' : 'SEE RESULTS'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Quiz;