import React from 'react';

// Import components
import Projects from "../components/Projects";


const Portfolio = () => {
    return <section id='portfolio' className='section bg-primary min-h-[1400px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-portfolio relative
                before:absolute before:opacity-40 before:-top-[2rem]
                before:-left-3/4 before:hidden before:lg:block'>
                    My latest work
                </h2>
                <p className='subtitle'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book
                </p>
            </div>
            <Projects />
        </div>
    </section>;
};

export default Portfolio;