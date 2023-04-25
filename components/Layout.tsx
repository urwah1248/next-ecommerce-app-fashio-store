import Head from 'next/head';
import React, {ReactNode, useEffect, useState} from 'react';
import Navbar from './Navbar'
import Announcement from './Announcement'

interface Props {
  children?: ReactNode,
  titleName?: String,
  // any props that come into the component
}


export default function Layout({ children, titleName="Web Engineering Project", ...props }: Props) {
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  useEffect( () => {
    const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
      setVisible(false)
      console.log(visible)
    }else{
        setVisible(true)
        console.log(visible)
    }

    setPrevScrollPos(currentScrollPos)
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [prevScrollPos])


  return (
    <>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="E commerce Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header className={`fixed w-screen transition-['250ms'] ${visible ? 'top-0  ' : 'top-[-100px]'}`}>
          <Announcement/>
          <Navbar/>
        </header>
        <div className={`space-filler h-[81px] md:h-[85px] transition-['250ms'] ${visible ? 'top-0  ' : 'top-[-100px]'}`}></div>
        <main className="m-auto mx-0 mt-0 px-0">
          {children}
        </main>
        <footer className="flex h-10 py-3 font-inter justify-center items-center shadow-inner">
          <p className='m-0'>© Fashio.pk | 2023</p>
        </footer>
      </div>
    </>
  );
}