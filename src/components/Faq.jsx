import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import f1 from '/f1.svg';

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState('adaptive');

  const faqItems = [
    {
      id: 'adaptive',
      question: 'What is adaptive learning?',
      answer: 'Adaptive learning is a personalized educational approach that adjusts to your learning pace and style. Our platform uses AI to customize content and exercises based on your progress and understanding.'
    },
    {
      id: 'virtual',
      question: 'How do virtual classes work?',
      answer: 'Virtual classrooms provide an interactive online learning environment where you can attend live sessions, collaborate with peers, access recorded lectures, submit assignments, and receive feedback from instructors in real-time.'
    },
    {
      id: 'devices',
      question: 'What devices support your platform?',
      answer: 'Our platform is accessible on desktop computers (Windows, Mac, Linux), tablets, and smartphones (iOS and Android). We offer native apps and a responsive web interface to ensure a seamless experience across all devices.'
    },
    {
      id: 'progress',
      question: 'How do you track learning process?',
      answer: 'We use comprehensive analytics to monitor your engagement, completion rates, assessment scores, and learning patterns. You can view personalized dashboards with visual progress indicators and receive regular performance reports.'
    },
    {
      id: 'resources',
      question: 'What learning resources are available?',
      answer: 'Our platform offers a diverse range of resources including interactive lessons, video tutorials, practice exercises, downloadable study materials, discussion forums, peer collaboration tools, and a searchable knowledge base.'
    },
    {
      id: 'quality',
      question: 'How do you ensure content quality?',
      answer: 'All content undergoes rigorous review by subject matter experts, instructional designers, and quality assurance specialists. We regularly update materials based on user feedback, learning outcomes, and the latest educational research.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 bg-white rounded-lg">
      <div className="flex flex-row items-center mb-8 relative">
        <div className="bg-white px-6 py-3 rounded-full border-2 border-purple-500 shadow-md z-10 mr-4">
          <h2 className="text-xl md:text-2xl font-medium tracking-wider font-['Objectivity']">Frequently asked <span className="text-[#9747FF] font-bold font-['Objectivity']">Questions</span></h2>
        </div>
        <div className="flex-shrink-0">
          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
            <img 
              src={f1} 
              alt="Question mark illustration" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2 bg-[#F5EEFF] rounded-lg p-4 shadow-xl">
        {faqItems.map((item) => (
          <div 
            key={item.id}
            className="border-b border-purple-100 last:border-b-0"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
            >
              <h3 className="text-base md:text-lg font-bold text-black font-['Objectivity']">{item.question}</h3>
              <span className="text-[#9747FF]">
                {openItem === item.id ? 
                  <ChevronUp className="w-5 h-5" /> : 
                  <ChevronDown className="w-5 h-5" />
                }
              </span>
            </button>
            
            {openItem === item.id && (
              <div className="pb-3 text-[#667085]">
                <p className="text-sm md:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;