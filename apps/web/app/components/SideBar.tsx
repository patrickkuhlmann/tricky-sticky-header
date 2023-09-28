import React from 'react';

import {
  RangeInput,
  RefinementList,
  HierarchicalMenu,
} from 'react-instantsearch-hooks-web';

import Accordion from './Accordion';

interface FilterData {
  title: string;
  content: any;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Dummy filter data for demonstration
  const filterData: FilterData[] = [
    {
      title: 'Brand',
      content: <RefinementList attribute="brand" />,
    },
    { title: 'Price', content: <RangeInput attribute="price"></RangeInput> },
    {
      title: 'Categories',
      content: (
        <HierarchicalMenu
          attributes={[
            'hierarchicalCategories.lvl0',
            'hierarchicalCategories.lvl1',
            'hierarchicalCategories.lvl2',
            'hierarchicalCategories.lvl3',
          ]}
        ></HierarchicalMenu>
      ),
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-2 bg-white">
          <h3 className="font-bold">Sidebar Title</h3>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sidebar content (accordion) */}
        <Accordion items={filterData} />
      </div>
    </>
  );
};
