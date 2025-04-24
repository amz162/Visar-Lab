import React from 'react';

function approach() {
    return (
        <section className="min-h-screen bg-[#f8f7e9] py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <h2 className="text-5xl font-bold mb-6 md:mb-0">Approach.</h2>
                    <p className="max-w-xl text-lg">
                        From building a strong online presence to managing integrated ad
                        campaigns and community engagement, we tailor each solution
                        to amplify your growth and achieve measurable sucess.
                    </p>
                </div>

                <hr className="border-t border-gray-400 my-8" />

                <div className="relative mt-24">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black"></div>

                    {/* Timeline items */}
                    <div className="relative">
                        {/* Item 1 */}
                        <div className="flex items-center mb-32">
                            <div className="w-1/2 pr-12 text-right">
                                <div className="inline-flex items-center">
                                    <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">1</div>
                                    <div>
                                        <p className="text-2xl font-medium">Online Presence</p>
                                        <p className="text-xl">(Website/Store)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center">
                                {/* Replaced the circle+line with a single line and centered dot */}
                                <div className="relative">
                                    <div className="w-12 h-px bg-black"></div>
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center mb-32">
                            <div className="w-1/2 flex items-center justify-end">
                                {/* Replaced the circle+line with a single line and centered dot */}
                                <div className="relative">
                                    <div className="w-12 h-px bg-black"></div>
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                </div>
                            </div>
                            <div className="w-1/2 pl-12">
                                <div className="inline-flex items-center">
                                    <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">2</div>
                                    <div>
                                        <p className="text-2xl font-medium">Social media</p>
                                        <p className="text-xl">Presence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center mb-32">
                            <div className="w-1/2 pr-12 text-right">
                                <div className="inline-flex items-center">
                                    <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">3</div>
                                    <div>
                                        <p className="text-2xl font-medium">Graphics Content</p>
                                        <p className="text-xl">Designs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center">
                                {/* Replaced the circle+line with a single line and centered dot */}
                                <div className="relative">
                                    <div className="w-12 h-px bg-black"></div>
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="flex items-center mb-32">
                            <div className="w-1/2 flex items-center justify-end">
                                {/* Replaced the circle+line with a single line and centered dot */}
                                <div className="relative">
                                    <div className="w-12 h-px bg-black"></div>
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                </div>
                            </div>
                            <div className="w-1/2 pl-12">
                                <div className="inline-flex items-center">
                                    <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">4</div>
                                    <div>
                                        <p className="text-2xl font-medium">Social media</p>
                                        <p className="text-xl">Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="flex items-center">
                            <div className="w-1/2 pr-12 text-right">
                                <div className="inline-flex items-center">
                                    <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">5</div>
                                    <div>
                                        <p className="text-2xl font-medium">Ad campaigns</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center">
                                {/* Replaced the circle+line with a single line and centered dot */}
                                <div className="relative">
                                    <div className="w-12 h-px bg-black"></div>
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default approach