import React from 'react'

const Faq = () => {
  return (
    <>
        <section id='FAQs'>
            <div className='px-10 py-2'>
                <p className='font-bold text-4xl'>FAQs</p>
                <p>Have questions? Browse through our frequently asked questions to find answers and get a better understanding of Learn.io.</p>
            </div>
            <div className='grid grid-rows-4 px-10 py-4  gap-6'>
              <div>
                <p className='font-medium'>How do I enroll in courses?</p>
                <p>Enrolling is easy. Simply sign up, browse through the course list, and select 'Enroll' on any course you wish to take.</p>
              </div>
              <div>
                <p className='font-medium'>Can I access videos offline?</p>
                <p>Yes, with our premium plan, you can download videos and watch them at your convenience without an internet connection.</p>
              </div>
              <div>
                <p className='font-medium'>What library resources are available?</p>
                <p>From academic journals to classic literature, our library spans various categories to suit every interest and educational need.</p>
              </div>
              <div>
                <p className='font-medium'>Is there a trial period?</p>
                <p>Absolutely! Try LearnSphere for free with our 14-day trial and experience the full extent of our e-learning platform.</p>
              </div>
            </div>
        </section>
        <hr></hr>
    </>
  )
}

export default Faq