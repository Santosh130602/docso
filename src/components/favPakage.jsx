import React from 'react';
import Card from '../components/cards';

const FeverPackageGrid = () => {
  const packages = [
    { title: 'Fever Package', testsIncluded: 45, originalPrice: 180, discountedPrice: 120 },
    { title: 'Advanced Fever Panel', testsIncluded: 60, originalPrice: 250, discountedPrice: 180 },
    { title: 'Viral Fever Checkup', testsIncluded: 50, originalPrice: 200, discountedPrice: 150 },
    { title: 'Monsoon Fever Panel', testsIncluded: 40, originalPrice: 170, discountedPrice: 110 },
    { title: 'Typhoid & Malaria Combo', testsIncluded: 35, originalPrice: 160, discountedPrice: 100 },
    { title: 'Dengue Screening', testsIncluded: 30, originalPrice: 150, discountedPrice: 95 },
    { title: 'Essential Fever Panel', testsIncluded: 55, originalPrice: 220, discountedPrice: 160 },
    { title: 'Fever Plus Panel', testsIncluded: 48, originalPrice: 190, discountedPrice: 140 },
    { title: 'Kids Fever Check', testsIncluded: 38, originalPrice: 140, discountedPrice: 90 },
    { title: 'Comprehensive Fever Panel', testsIncluded: 65, originalPrice: 270, discountedPrice: 200 },
    { title: 'Rapid Fever Test', testsIncluded: 25, originalPrice: 130, discountedPrice: 85 },
    { title: 'Seasonal Fever Checkup', testsIncluded: 42, originalPrice: 180, discountedPrice: 125 },
  ];

  return (
    <div className="w-full px-16 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {packages.map((pkg, index) => (
         <Card
         key={index}
         title={pkg.title}
         testsIncluded={pkg.testsIncluded}
         originalPrice={pkg.originalPrice}
         discountedPrice={pkg.discountedPrice}
         width="w-full sm:max-w-sm md:max-w-md lg:max-w-lg"

       />
       
        ))}
      </div>
    </div>
  );
};

export default FeverPackageGrid;
