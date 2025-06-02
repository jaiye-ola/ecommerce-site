import React from 'react'
import Container from './Container';

function Contact() {
  return (
    <Container className="mt-12 mb-12">
        <h1>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2'>
            <div>
                <div className='cform shadow-lg w-full p-5'>
                    <form action="">
                        <div className='mb-3'>
                            <input className='w-full outline-none p-2 border-gray-300 border' type="text" placeholder='Enter your name'/>
                        </div>
                        <div className='mb-3'>
                            <input className='w-full outline-none p-2 border-gray-300 border' email="text" placeholder='Enter your email'/>
                        </div>
                        <div className='mb-3'>
                            <input className='w-full outline-none p-2 border-gray-300 border' type="text" placeholder='Enter your subject'/>
                        </div>
                        <div className='mb-3'>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='mb-3'>
                            <button type="button" className='bg-[#0B4f6c] capitalize font-semibold hover:bg-white duration-500 transition-all p-4 hover:text-[#0B4f6c] '> send Message</button>
                        </div>
                    </form>
                </div>
            </div>
                    <div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3837811256103!2d3.3442848731579127!3d6.5991350933946995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9231a8afe793%3A0x5f297da31d68daec!2sAnchorsoft%20Academy!5e0!3m2!1sen!2sng!4v1748255596052!5m2!1sen!2sng" 
                allowFullScreen="" 
                className='w-full h-[510px]'
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        </div>


    </Container>
  );
}

export default Contact