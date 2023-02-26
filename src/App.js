import {useState} from 'react'
import './index.css';
import logo from './images/logo.svg'
import mobileHero from './images/hero-mobile.jpg'
import desktopHero from './images/hero-desktop.jpg'
import arrow from './images/icon-arrow.svg'
import error from './images/icon-error.svg'

function App() {

  const [email,setEmail] = useState({
    email:''
  })
  const [submitted,setSubmitted] = useState(null)

    function change(event) {
      
      setEmail(prev => {
        return {...prev, email:event.target.value}
      })
    }

    function submit() {
      if(email.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        setSubmitted(true)
        console.log('Submitted')
      }else{
        setSubmitted(false)
        console.log('Enter correct email address')
        console.log(submitted)
      }
    }

  
  return (
    <div className="">
      <div className='flex flex-col md:flex-col min-h-[100vh]
       md:py-8 '>
        <header className='mb-6 px-7 pt-6 md:px-[10%]'>
          <img className='w-[8em]' src={logo} alt='logo' />
        </header>
        <div className='mb-[4.1em] w-full min-h-[15em] bg-cover grow
         bg-[url("./images/hero-mobile.jpg")] md:bg-[url("./images/hero-desktop.jpg")]
          bg-no-repeat md:mb-0  md:hidden'>
          
          
          </div>
        <main className='flex flex-col 
        justify-center items-center text-center 
        md:items-start md:mt-[7em] md:w-[58%] md:px-[10%]'>
          <h1 className='text-[3.2rem] mb-4 max-w-[20rem] 
          tracking-[.14em] leading-[3.5rem] font-semibold text-[#3a3a3a]
          md:text-left md:leading-[4rem] md:tracking-[1rem] md:max-w-[10em]
          '
          ><span className='font-[300] text-[#CE9797]'>WE'RE</span> COMING SOON</h1>
          <p className='max-w-[22em] text-[0.9rem] text-[#CE9797]
          font-[600] mb-6 md:max-w-[28em] md:text-left md:leading-6 md:mb-8
          '> Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <div className='relative mb-4 flex flex-col justify-center items-center'>
        <label className='hidden'>Email</label>
        <input type='email' onChange={change} value={email.email} className={`border relative
        w-[22em] outline-none border-[#946c6c] ${submitted === false ? 
          'focus:border-[red] outline-none border-[red] active:border-[red]' : ''}
         placeholder-[#CE9797]  text-sm p-6 rounded-full h-[3.5em]
         md:w-[28em]
         `} 
        name='email' 
        placeholder='Email Address' />
        {submitted === false ? <img className='absolute top-3 right-[6em]' src={error} alt='Error' /> : ''}
        {submitted === false ? <p className=' self-start float mt-2 pl-[1.6rem] 
        text-[0.8rem] text-[#c16f6f]
        '>Please provide a valid email</p> : ''}
        <div onClick={submit} id='button' className='w-[5.5em] hover:shadow-2xl hover:opacity-70 
        rounded-full flex items-center shadow-xl justify-center absolute
         top-0 right-0 h-[3.1em]'>
        <img className=' w-[0.9rem] h-[1.4rem] ' src={arrow} />
        </div>
        </div>
        </main>
     </div>
     <div className='md:absolute md:top-0 md:right-0 h-[100%] w-[40%]'>
     <img className='hidden md:block md:w-full md:h-full object-cover' src={desktopHero} />
     </div>
    </div>
  );
}

export default App;
