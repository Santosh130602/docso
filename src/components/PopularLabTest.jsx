import React, { useRef } from 'react';
import Card from './cards';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Doctor from '../assets/doctor.png';

const PopularLabTests = () => {
    const labScrollRef = useRef(null);
    const scanScrollRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = 300;
            ref.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const labTests = [
        { title: 'Fever Package', testsIncluded: 45, originalPrice: 180, discountedPrice: 120 },
        { title: 'Blood Test', testsIncluded: 45, originalPrice: 180, discountedPrice: 120 },
        { title: 'Urine Test', testsIncluded: 45, originalPrice: 180, discountedPrice: 120 },
        { title: 'Thyroid Panel', testsIncluded: 60, originalPrice: 220, discountedPrice: 150 },
        { title: 'Liver Function Test', testsIncluded: 50, originalPrice: 200, discountedPrice: 140 },
        { title: 'Kidney Function Test', testsIncluded: 55, originalPrice: 210, discountedPrice: 145 },
        { title: 'Diabetes Check', testsIncluded: 40, originalPrice: 170, discountedPrice: 110 },
    ];

    const scanTests = [
        { title: 'CT Scan Head', scansIncluded: 1, originalPrice: 2500, discountedPrice: 1800 },
        { title: 'MRI Brain', scansIncluded: 1, originalPrice: 5000, discountedPrice: 3500 },
        { title: 'Chest X-Ray', scansIncluded: 1, originalPrice: 800, discountedPrice: 600 },
        { title: 'Ultrasound Abdomen', scansIncluded: 1, originalPrice: 1200, discountedPrice: 900 },
        { title: 'Pelvic Ultrasound', scansIncluded: 1, originalPrice: 1500, discountedPrice: 1000 },
        { title: 'ECG (Electrocardiogram)', scansIncluded: 1, originalPrice: 400, discountedPrice: 250 },
        { title: '2D Echo', scansIncluded: 1, originalPrice: 2200, discountedPrice: 1600 },
    ];

    return (
        <div className="px-6">
            <div className="px-4 md:px-18 mt-6 md:mt-10 mb-10 ">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#2A5F72]">Popular Lab Tests</h2>
                    <div className="flex items-center gap-3">
                        <button onClick={() => scroll(labScrollRef, 'left')} className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-[#2A5F72]">
                            <ChevronLeft className="text-[#2A5F72] hover:text-white" />
                        </button>
                        <button onClick={() => scroll(labScrollRef, 'right')} className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-[#2A5F72]">
                            <ChevronRight className="text-[#2A5F72] hover:text-white" />
                        </button>
                    </div>
                </div>

                <div
                    ref={labScrollRef}
                    className="mt-6 px-4 py-6 flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
                >
                    {labTests.map((test, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Card {...test} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4 md:px-18 mt-6 md:mt-10 mb-10 ">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#2A5F72]">Popular Scans</h2>
                    <div className="flex items-center gap-3">
                        <button onClick={() => scroll(scanScrollRef, 'left')} className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-[#2A5F72]">
                            <ChevronLeft className="text-[#2A5F72] hover:text-white" />
                        </button>
                        <button onClick={() => scroll(scanScrollRef, 'right')} className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-[#2A5F72]">
                            <ChevronRight className="text-[#2A5F72] hover:text-white" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scanScrollRef}
                    className="mt-6 py-6 px-4 flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
                >
                    {scanTests.map((test, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Card {...test} />
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-full px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-6 bg-[#E0E3FD] rounded-lg px-12 md:px-24 py-6 gap-6 border border-blue-300">

                    <div className="w-full md:flex-1 flex flex-col items-start">
                        <h2 className="text-2xl md:text-4xl text-left font-semibold text-[#1E1E1E] mb-6 md:mb-10">
                            Early protection for 
                            your family health
                        </h2>
                        <button className="bg-[#414796] text-white px-6 md:px-10 py-2 md:py-3 rounded-lg text-base md:text-lg font-medium">
                            Book now
                        </button>
                    </div>

                    <div className="hidden md:flex md:flex-1 justify-center">
                        <img
                            src={Doctor}
                            alt="Doctor"
                            className="max-h-80 object-contain"
                        />
                    </div>

                </div>
            </div>



        </div>
    );
};

export default PopularLabTests;
