import './App.css'

function App() {


  return (
    <>
     <div className='bg-veryDarkBlue h-screen w-full grid place-content-center'>
      <div className='bg-darkSaturatedBlue w-80 md:w-auto rounded-md flex flex-col-reverse md:flex-row font-Lexend'>
        <div className='p-5 text-center md:text-left md:p-10 md:pr-28 md:w-5/6'>
          <div>
          <h1 className='text-white text-3xl md:text-3xl font-bold font-Inter'>Get <span className='text-softViolet'>insights</span> that help your business grow.</h1>
          <p className='text-paragraph mt-5 md:mt-7 text-md'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          </div>
            <div className='flex md:flex-row flex-col justify-between mt-5 md:mt-20'>
              <div className='my-5 md:my-0'>
                <h2 className='text-white font-Inter font-bold text-2xl'>10k+</h2>
                <p className='text-heading text-xs'>COMPANIES</p>
              </div>
              <div className='my-5 md:my-0'>
                <h2 className='text-white font-Inter font-bold text-2xl'>314</h2>
                <p className='text-heading text-xs'>TEMPLATES</p>
              </div>
              <div className='my-5 md:my-0'>
                <h2 className='text-white font-Inter font-bold text-2xl'>12M+</h2>
                <p className='text-heading text-xs'>QUERIES</p>
              </div>
            </div>
        </div>
        <div className='bg-desktop h-60 bg-cover md:w-full md:h-full bg-no-repeat rounded-r-md'>
          <div className='w-full h-full bg-softViolet mix-blend-multiply'></div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
