import { useState, useEffect } from "react";

function WordOmitter({ omitWords }) {
  const [inputText, setInputText] = useState("");
  const [isOmitMode, setIsOmitMode] = useState(true);
  const [outputText, setOutputText] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (inputText.trim() === "") {
      setOutputText("");
      return;
    }

    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      if (isOmitMode) {
        const words = inputText.split(" ");
        const filteredWords = words.filter(word => {
          const cleanWord = word.toLowerCase().replace(/[^\w]/g, "");
          return !omitWords.includes(cleanWord);
        });
        setOutputText(filteredWords.join(" "));
      } else {
        setOutputText(inputText);
      }
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);

    return () => clearTimeout(timer);
  }, [inputText, isOmitMode, omitWords]);

  const handleToggle = () => {
    setIsOmitMode(!isOmitMode);
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  const omittedWordsCount = inputText ? 
    inputText.split(" ").filter(word => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, "");
      return omitWords.includes(cleanWord);
    }).length : 0;

  const totalWords = inputText ? inputText.split(" ").filter(w => w.trim()).length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
            Word Omitter
          </h1>
          <p className="text-lg text-gray-600 font-light mb-6">
            Filter words in real-time with elegant simplicity
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 mx-auto"></div>
        </div>

        {/* Main Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Controls Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleToggle}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isOmitMode
                    ? "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md"
                    : "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 hover:border-green-300 shadow-sm hover:shadow-md"
                }`}
              >
                {isOmitMode ? "Show All Words" : "Omit Words"}
              </button>
              
              <button
                onClick={handleClear}
                className="px-6 py-3 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-gray-100 hover:border-gray-300 shadow-sm hover:shadow-md"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Input Section */}
          <div className="p-8 border-b border-gray-100">
            <label className="block text-gray-700 text-lg font-medium mb-4">
              Type your sentence:
            </label>
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Start typing to see the magic happen..."
                className="w-full h-32 p-6 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 text-lg resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 focus:bg-white/80"
              />
              <div className="absolute bottom-4 right-4 text-gray-400 text-sm font-medium">
                {inputText.length} characters
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {inputText && (
            <div className="px-8 py-4 bg-gray-50/30 border-b border-gray-100">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-xl border border-gray-200/50">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600 text-sm font-medium">
                    Total: {totalWords} words
                  </span>
                </div>
                
                {isOmitMode && (
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-xl border border-gray-200/50">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm font-medium">
                      Filtered: {omittedWordsCount} words
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-xl border border-gray-200/50">
                  <div className={`w-3 h-3 rounded-full ${isOmitMode ? 'bg-orange-400' : 'bg-green-400'}`}></div>
                  <span className="text-gray-600 text-sm font-medium">
                    Mode: {isOmitMode ? "Filtering" : "Show All"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Output Section */}
          <div className="p-8">
            <label className="block text-gray-700 text-lg font-medium mb-4">
              Filtered output:
            </label>
            <div className={`min-h-32 p-6 bg-gradient-to-br from-gray-50/50 to-blue-50/30 border border-gray-200/50 rounded-2xl transition-all duration-300 ${
              isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              {outputText ? (
                <div className="text-gray-800 text-lg leading-relaxed">
                  {outputText.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="inline-block mr-2 mb-1 transition-all duration-300 hover:text-blue-600 cursor-default"
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-lg italic font-light">
                  {inputText ? "Processing..." : "Your filtered text will appear here..."}
                </p>
              )}
            </div>
          </div>

          {/* Omit Words Display */}
          {omitWords.length > 0 && (
            <div className="p-8 pt-0">
              <h3 className="text-gray-700 font-medium mb-4 text-lg">Words being filtered:</h3>
              <div className="flex flex-wrap gap-3">
                {omitWords.map((word, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm font-medium border border-amber-200/50 transition-all duration-300 hover:bg-amber-100 hover:border-amber-300"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Real-time filtering</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span>Clean & minimalistic</span>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Demo component with sample omit words
export default function Question3() {
  const sampleOmitWords = ["a", "an", "the", "is", "are", "was", "were", "and", "or", "but"];

  return <WordOmitter omitWords={sampleOmitWords} />;
}