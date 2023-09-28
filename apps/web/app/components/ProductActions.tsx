import React, { useState } from 'react';
import { SearchBox, SortBy } from 'react-instantsearch-hooks-web';

import {Sidebar} from './SideBar';

export const ProductActions = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="category-actions" className="flex items-center">
      <div className="pr-2">
        <SearchBox />
      </div>

      <div className="ml-6">
        <SortBy
          items={[
            { label: 'Featured', value: 'instant_search' },
            { label: 'Price (asc)', value: 'instant_search_price_asc' },
            { label: 'Price (desc)', value: 'instant_search_price_desc' },
          ]}
          classNames={{ select: '!border-none' }}
        />
      </div>
      <button
        className="px-4 py-2 ml-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleSidebarToggle}
      >
        Open Sidebar
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};
