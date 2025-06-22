import { useState } from "react";

function Slides({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlideIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      handleTransition(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      handleTransition(currentSlideIndex - 1);
    }
  };

  const handleRestart = () => {
    if (currentSlideIndex > 0) {
      handleTransition(0);
    }
  };

  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === slides.length - 1;
  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
            Basic Slideshow
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 mx-auto"></div>
        </div>

        {/* Main Slideshow Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Progress Bar */}
          <div className="h-1 bg-gray-100 relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            ></div>
          </div>

          {/* Slide Content */}
          <div className="p-12 min-h-96 flex flex-col justify-center">
            <div className={`transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              
              {/* Slide Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                  Slide {currentSlideIndex + 1} of {slides.length}
                </span>
                <div className="flex space-x-1">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlideIndex 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-light text-gray-800 mb-6 leading-tight">
                {currentSlide.title}
              </h2>

              {/* Text Content */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                {currentSlide.text}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="px-12 pb-8">
            <div className="flex items-center justify-between">
              
              {/* Left Controls */}
              <div className="flex space-x-3">
                <button
                  onClick={handlePrev}
                  disabled={isFirstSlide}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isFirstSlide
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-gray-50 transform hover:-translate-y-0.5'
                  }`}
                >
                  ← Previous
                </button>
                
                <button
                  onClick={handleRestart}
                  disabled={isFirstSlide}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isFirstSlide
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transform hover:-translate-y-0.5'
                  }`}
                >
                  ↻ Restart
                </button>
              </div>

              {/* Right Controls */}
              <button
                onClick={handleNext}
                disabled={isLastSlide}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isLastSlide
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-0.5'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Current: {currentSlide.title}</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span>Progress: {Math.round(((currentSlideIndex + 1) / slides.length) * 100)}%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component with sample slides
export default function Question4() {
  const deepLearningSlides = [
    {
      title: "Introduction to Deep Learning",
      text: "Deep learning is a subset of machine learning that uses artificial neural networks to model complex patterns in data. It powers technologies like self-driving cars, voice assistants, and image recognition."
    },
    {
      title: "Neural Networks Explained",
      text: "Neural networks are inspired by the human brain. They consist of layers of interconnected 'neurons' that process input data and learn through training to make predictions or classifications."
    },
    {
      title: "Training with Backpropagation",
      text: "Backpropagation is a key algorithm that adjusts the weights of a neural network by calculating the gradient of the loss function. This helps minimize prediction errors over time."
    },
    {
      title: "Deep Architectures",
      text: "Deep learning models often have many hidden layers, enabling them to learn increasingly abstract features. Examples include CNNs for images and RNNs for sequences."
    },
    {
      title: "Convolutional Neural Networks (CNNs)",
      text: "CNNs are designed for visual tasks. They use convolutional layers to extract spatial features from images and are widely used in medical imaging, facial recognition, and autonomous driving."
    },
    {
      title: "Recurrent Neural Networks (RNNs)",
      text: "RNNs handle sequential data like text or time-series. They retain memory of previous inputs, making them powerful for language modeling and speech recognition."
    },
    {
      title: "Challenges & Considerations",
      text: "Training deep models requires large datasets, high computational power, and careful tuning to avoid overfitting. Techniques like dropout, batch normalization, and transfer learning help mitigate these issues."
    },
    {
      title: "Future of Deep Learning",
      text: "From generative AI to real-time translation and drug discovery, deep learning continues to evolve. With advancements in hardware and algorithms, its future impact is boundless."
    }
  ];

  return <Slides slides={deepLearningSlides} />;
}