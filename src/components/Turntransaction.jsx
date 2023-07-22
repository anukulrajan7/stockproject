import React, { useState } from 'react';
import data from '../provider/turnover.json';
import Equity from './category/Equity';
import ETFs from './category/ETFs.jsx';
import MFSS from './category/MFSS.jsx';
import SLBs from './category/SLBs.jsx';
import SGB from './category/SGB.jsx';
import SME from './category/SME.jsx';

const Turntransaction = () => {
  const [selectedCategory, setSelectedCategory] = useState(data.categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-8 w-full lg:w-1/2 bg-white shadow-md">
      <div className="flex flex-wrap lg:gap-3 gap-1 py-2 px-4 justify-between bg-indigo-500 items-center">
        {data.categories.map((category) => (
          <button
            key={category.name}
            className={`text-white text-center py-2 px-5 shadow-md ${
              selectedCategory && selectedCategory.name === category.name ? 'bg-indigo-600' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex w-full justify-center items-center">
        {selectedCategory.name === 'Equity' && <Equity data={selectedCategory.data} />}
        {selectedCategory.name === 'ETFs' && <ETFs data={selectedCategory.data} />}
        {selectedCategory.name === 'MFSS' && <MFSS data={selectedCategory.data} />}
        {selectedCategory.name === 'SLBs' && <SLBs data={selectedCategory.data} />}
        {selectedCategory.name === 'SGB' && <SGB data={selectedCategory.data} />}
        {selectedCategory.name === 'SME' && <SME data={selectedCategory.data} />}
      </div>
    </div>
  );
};

export default Turntransaction;
