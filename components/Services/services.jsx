import React, { useState } from 'react';

export default function Services() {
    const [activeService, setActiveService] = useState('Website Design');

    const services = [
        {
            name: 'Website Design & Development',
            key: 'Website Design',
            subheadings: [
                {
                    title: 'Website Design',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies. At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'E-com Store Website',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies. At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'Website Development',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies. At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                }
            ]
        },
        {
            name: 'Graphic & UI Design',
            key: 'Graphic Design',
            subheadings: [
                {
                    title: 'UI/UX Design',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'Brand Identity',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                }
            ]
        },
        {
            name: 'Social Media Presence',
            key: 'Social Presence',
            subheadings: [
                {
                    title: 'Social Media Strategy',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'Content Creation',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                }
            ]
        },
        {
            name: 'Social Media Management',
            key: 'Social Management',
            subheadings: [
                {
                    title: 'Community Management',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'Analytics & Reporting',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                }
            ]
        },
        {
            name: 'Social Media AR Filters',
            key: 'AR Filters',
            subheadings: [
                {
                    title: 'Custom AR Filters',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'Interactive Experiences',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                }
            ]
        },
        {
            name: 'AD Campaigns',
            key: 'AD Campaigns',
            subheadings: [
                {
                    title: 'Campaign Strategy',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                },
                {
                    title: 'Performance Marketing',
                    description: 'At Visar, we take a comprehensive approach to elevate your brand, seamlessly blending creativity with data-driven strategies.'
                }
            ]
        }
    ];

    const handleServiceClick = (key) => {
        setActiveService(key);
    };

    const activeServiceData = services.find(service => service.key === activeService);

    return (
        <section className="min-h-screen flex flex-col lg:flex-row">
            {/* Left side - cream color with service list */}
            <div className="w-full lg:w-1/3 xl:w-1/4 bg-[#faf8e8] p-6 md:p-10 lg:p-12 overflow-y-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Services.</h2>

                <div className="mb-8 md:mb-12">
                    <p className="text-base md:text-lg mb-4">
                        At Visar, we take a comprehensive approach to
                        elevate your brand, seamlessly blending
                        creativity with data-driven strategies.
                    </p>
                    <hr className="border-t border-gray-400" />
                </div>

                {/* Service list */}
                <div className="space-y-4 md:space-y-6">
                    {services.map((service) => (
                        <div
                            key={service.key}
                            className="cursor-pointer transition-colors duration-200"
                            onClick={() => handleServiceClick(service.key)}
                        >
                            <h3 className={`text-xl md:text-2xl font-medium mb-2 ${activeService === service.key ? 'text-black' : 'text-gray-500 hover:text-gray-700'}`}>
                                {service.name}
                            </h3>
                            <hr className="border-t border-gray-400 mt-3 md:mt-4" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side - purple background with service details */}
            <div className="w-full lg:w-2/3 xl:w-3/4 bg-[#E4C1FF] p-6 md:p-10 lg:p-16 overflow-y-auto">
                {activeServiceData && (
                    <div className="max-w-3xl mx-auto mt-8 md:mt-16 lg:mt-20">
                        {activeServiceData.subheadings.map((subheading, index) => (
                            <div key={index} className="mb-12 md:mb-20 lg:mb-24">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 lg:mb-10">{subheading.title}</h2>
                                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                                    {subheading.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}