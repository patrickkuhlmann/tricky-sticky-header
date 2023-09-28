import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleFilterToggle = (index: number) => {
    setExpandedIndexes((prevExpandedIndexes) => {
      if (prevExpandedIndexes.includes(index)) {
        return prevExpandedIndexes.filter((i) => i !== index);
      } else {
        return [...prevExpandedIndexes, index];
      }
    });
  };

  return (
    <div className="py-2">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="w-full text-left py-2 px-4 bg-white rounded-md hover:bg-gray-100"
            onClick={() => handleFilterToggle(index)}
          >
            {item.title}
          </button>
          {expandedIndexes.includes(index) && (
            <div className="bg-white rounded-md p-2 mt-1">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
