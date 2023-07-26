import React from 'react';

//import contact data
import {contact} from '../data'

const Contact = () => {
    return (
        <section className='section bg-primary ' id='contact'>
            <div className='container mx-auto'>
                {/*     section title    */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-contact relative
                    before:absolute before:opacity-40 before:-top-7 before:-left-40
                    before:hidden before:lg:block'>
                        Contact me
                    </h2>
                    <p className='subtitle'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    {/*     info    */}
                    <div className='flex flex-col flex-1 items-start space-y-8 mb-12
                    lg:mb-0 lg:pt-2'>
                        {contact.map((item, index) => {
                            const {icon, title, subtitle, description} = item;
                            return (
                                <div
                                    className='flex flex-col lg:flex-row gap-x-4'
                                    key={index}>
                                    <div className='text-accent rounded-sm w-14 flex
                                    items-start justify-center mt-2 mb-4 lg:mb-0
                                    text-2xl'
                                    >
                                        {icon}
                                    </div>
                                    <div >
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                        <p className='text-accent font-normal'>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/*     form    */}
                    <form className='space-y-8 w-full max-w-[780px]'>
                        <div className='flex gap-8'>
                            <input className='input' type='text' placeholder='Your name' />
                            <input className='input' type='text' placeholder='Your email' />
                        </div>
                        <input type='text' className='input' placeholder='Subject' />
                        <textarea className='textarea' placeholder='Your message'></textarea>
                        <button className='btn btn-lg bg-accent hover:bg-accent-hover'>Send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;