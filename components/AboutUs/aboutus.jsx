import React from 'react';

export default function aboutus() {
    return (
        <section className="min-h-screen bg-black text-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us.</h2>

                        <p className="text-base md:text-lg mb-16">
                            We are a young team of communication and
                            creative experts, driven by passion and
                            inspiration for growth. Motivated and result-
                            oriented, we craft innovative solutions to
                            help your brand thrive in a competitive digital
                            landscape.
                        </p>

                        {/* Logo placeholder */}
                        <div className="mt-8 lg:mt-16">
                            <svg
                                width="250"
                                height="160"
                                viewBox="0 0 315 198"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transform hover:scale-105 transition-transform duration-300"
                            >
                                {/* "V" shape with gradient */}
                                <path
                                    d="M112 20L42 178H72L130 40L188 178H218L148 20H112Z"
                                    fill="url(#gradient)"
                                />
                                {/* Circle/ring element */}
                                <path
                                    d="M260 99C260 131.585 233.585 158 201 158C168.415 158 142 131.585 142 99C142 66.4152 168.415 40 201 40C233.585 40 260 66.4152 260 99Z"
                                    stroke="url(#gradient)"
                                    strokeWidth="16"
                                    fill="none"
                                />
                                {/* Define the gradient */}
                                <defs>
                                    <linearGradient id="gradient" x1="50" y1="20" x2="250" y2="178" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#9C27B0" />
                                        <stop offset="1" stopColor="#3F51B5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 leading-tight">
                            Power of<br />
                            Magic Wand!
                        </h2>

                        <div className="mt-16 mb-12">
                            <p className="text-base md:text-xl mb-8">
                                With a creative mindset and data-driven approach,
                                we guide our clients through every stage of their
                                journey, ensuring measurable results.
                            </p>

                            <hr className="w-2/3 border-t border-gray-500 my-8" />
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl md:text-3xl font-medium mb-6">Why Visar ?</h3>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-1/2">
                                    <p className="text-sm md:text-base">
                                        Our slogan, 'Call the Wizard, to grow your brand'
                                        reflects our mission perfectly. Like a Wizard, we use
                                        our expertise to do magic with your brand, ready to
                                        propel your brand forward with energy and precision.
                                        With magic wand, you'll experience the push your
                                        brand needs to stand out, thrive, and achieve its full
                                        potential.
                                    </p>
                                </div>

                                <div className="w-full md:w-1/2">
                                    <p className="text-sm md:text-base">
                                        At Visar, we're not just a services provider- we're
                                        your dedicated partner at every step of your
                                        brand's journey. Our team of experts is here to
                                        guide, Support, and drive your growth with
                                        creative and strategic solutions tailored to your
                                        needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}