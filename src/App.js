import React from 'react';
import Header from './Header';
import nextLevelImage from './images/main-mobiles.png';
import trustLogo from './images/trustvault.svg';
import feature1 from './images/feature1.svg';
import feature2 from './images/feature2.svg';
import feature3 from './images/feature3.svg';
import whatis from './images/what-is.svg';
import crypto1 from './images/crypto1.svg';
import crypto2 from './images/crypto2.svg';
import crypto3 from './images/crypto3.svg';
import crypto4 from './images/crypto4.svg';
import crypto5 from './images/crypto5.svg';
import crypto6 from './images/crypto6.svg';
import whychoose1 from './images/why-choose1.svg';
import whychoose2 from './images/why-choose2.svg';
import download from './images/download.svg';
import whatsapp from './images/whatsapp.svg';
import IOS from './images/IOS.svg';
import downloadApp from './images/download-app.svg';
import blockchain1 from './images/blockchain1.svg';
import blockchain2 from './images/blockchain2.svg';
import blockchain3 from './images/blockchain3.svg';
import blockchain4 from './images/blockchain4.svg';
import benefit1 from './images/benefit1.svg';
import benefit2 from './images/benefit2.svg';
import benefit3 from './images/benefit3.svg';
import buttonBlur from './images/buttonBlur.svg';
import downloadBtnBorder from './images/downloadBtnBorder.svg';
import googlePlay from './images/googlePlay.svg';
import apple from './images/apple.svg';
import downloadblackShadow from './images/download-app-shadow.svg';
import zigBg from './images/zig-bg.svg'








function App() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center">
     <Header />
      {/* Hero Section */}
      <section className="w-full bg-main-bg min-h-screen bg-cover bg-no-repeat">
      <section className="w-full bg-next-level bg-contain bg-no-repeat w-2/4 -mt-15 font-bold text-white py-14 text-center flex flex-col items-center justify-center">
        <div className='main-heading-container relative mb-7'>
          <h1 className="text-8xl font-bold"><span>next</span><span className='text-lime-400'>level</span></h1>
          <p className="text-neutral-200 text-lg text-xl font-light">advanced self custody technology</p>
        </div>
        <img src={nextLevelImage}></img>
      </section>
     

   


      {/* Features Section */}
      <section className="w-full px-4 text-gray-800 mb-16">
  <h1 className='text-center text-4xl font-extrabold text-white mt-4 mb-16'>Key Features</h1>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

    {/* First Card */}
    <div className="px-6 border rounded-3xl shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900 min-h-[150px]">
      <img src={feature1} className='w-15 py-4'></img>
      <h2 className="text-2xl font-semibold mb-2">Multi-Signature Technology</h2>
      <h4 className="font-light text-lg italic">An additional layer of security</h4>
      <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
        Require multiple signatures for transactions, ensuring enhanced protection.
      </p>
    </div>

    {/* Second Card */}
    <div className="py-6 bg-middle-feature bg-contain bg-no-repeat px-6 border rounded-3xl shadow-md min-h-[150px]">
      <img src={feature2} className='w-15 py-4'></img>
      <h2 className="text-2xl font-semibold mb-2">Self-Custody</h2>
      <h4 className="font-light text-lg italic">Your keys, your crypto</h4>
      <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
        Store your crypto securely, with full control over your private keys.
      </p>
    </div>

    {/* Third Card */}
    <div className="py-6 px-6 border rounded-3xl shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900 min-h-[150px]">
      <img src={feature3} className='w-15 py-4'></img>
      <h2 className="text-2xl font-semibold mb-2">Buy, Swap, Send and Store</h2>
      <h4 className="font-light text-lg italic">Easily manage your crypto portfolio</h4>
      <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
        Easily manage your transactions and protect your assets.
      </p>
    </div>

  </div>
</section>

      </section>

      <section className="w-full text-white mt-14">
  <div className="mx-auto text-center">
      <h1 className='text-3xl font-semibold py-3 relative z-10' style={{
      background: "linear-gradient(to left, #7EBF02, #2F5FE5)", 
      transform: "rotate(0.7deg)"}}>TRUSTVAULT SAFESEND OTP TRANSFERS</h1>
      </div>
      <div className="mx-auto text-center">
      <h1 className='min-h-14 mt-[-55px] text-4xl font-semibold py-3' style={{
      background: "linear-gradient(to left, #2F5FE5, #7EBF02)", 
      transform: "rotate(-0.9deg)"}}></h1>
      </div>
</section>

<section className="w-full py-16 mb-14 mt-16 px-4 text-gray-800 bg-full-screen-shadow bg-contain bg-no-repeat" style={{backgroundPosition: '105% 65%', backgroundSize: '40%'}}>
  <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
    <div className="mb-8 md:mb-0 md:w-1/3"> {/* Adjusted width for the image div */}
      <img src={whatis} alt="What is SAFESEND?" className="w-3/4 h-auto mx-auto" /> {/* Made the image smaller */}
    </div>
    <div className="md:w-2/3"> {/* Adjusted width for the text div */}
      <p className="text-3xl md:text-4xl font-extrabold">What is SAFESEND?</p>
      <p className="text-base font-medium mt-4">
        Experience a new level of security with SafeSend! Before sending large amounts, SafeSend kicks off the process with a transfer, verified by the recipient through a one-time password (OTP). This smart feature ensures your funds land exactly where you want them, eliminating the risk of crypto clipping or sending to the wrong address. Once stage 1 of the transfer is confirmed, the full amount is released with confidence. Say goodbye to transaction anxiety and hello to seamless, secure transfers with SafeSend!
      </p>

<div className='relative'>
  <img src={buttonBlur} className='absolute -bottom-5 left-5'></img>
<button className="relative z-index-10 bg-gradient-to-t from-neutral-950 to-zinc-900 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-6">
    Read More
  </button>
</div>
    </div>
  </div>
</section>



<section className="w-full py-16 px-4 text-gray-800 mt-12 relative">
  {/* Transparent Div with Solid Black Shadow at the Bottom */}
  <div 
    className="absolute bottom-0 left-0 w-full"
    style={{
      height: "50px", // Height of the shadow
      background: "linear-gradient(to top, black 0%, transparent 100%)", // Solid black shadow
      zIndex: 0 // Ensure this is below the main content
    }}>
  </div>

  {/* Main Content Div */}
  <div
    className="max-w-7xl mx-auto bg-gray-800 flex flex-col md:flex-row justify-evenly md:space-x-8 space-y-6 md:space-y-0 rounded-lg relative z-10 p-6 md:p-8" // Added padding for smaller screens
    style={{
      background: "linear-gradient(to top, #121318, #1B1E23)",
      borderTop: "1px solid white",
      borderLeft: "1px solid white",
      borderRight: "1px solid white",
      borderBottom: "none",
    }}
  >
    <div className="flex flex-col items-center text-white">
      <h3 className="text-3xl font-semibold mt-4 mb-4 text-center">Download Our App</h3>

      {/* Two buttons with consistent height and padding */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 gap-4 md:gap-2 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
  {/* Google Play Button */}
  <div className='bg-gradient-to-t from-neutral-950 to-gray-800 flex items-center justify-center gap-4 border-2 border-indigo-500 px-6 py-3 rounded-full w-full md:w-auto'>
    <div>
      <img src={googlePlay} alt='google-play' className="w-8" />
    </div>
    <div className="text-center">
      <p className='text-sm'>GET IT ON</p>
      <h3 className='text-lg'>Google Play</h3>
    </div>
  </div>

  {/* Apple Store Button */}
  <div className='bg-gradient-to-t from-neutral-950 to-gray-800 flex items-center justify-center gap-4 border-2 border-indigo-500 px-6 py-3 rounded-full w-full md:w-auto'>
    <div>
      <img src={apple} alt='apple' className="w-8" />
    </div>
    <div className="text-center">
      <p className='text-sm'>Download on the</p>
      <h3 className='text-lg'>App Store</h3>
    </div>
  </div>
</div>

      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="relative">
        <img src={downloadApp} className="mt-4 md:mt-[-150px] transition-all duration-300" alt="Download App" />
      </div>
    </div>
  </div>

  {/* Black bottom shadow */}
  <div></div>
</section>










<section className="w-full py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-medium text-center mb-4 text-white">Supported Blockchains and Currencies</h2>
    <h3 className="text-xl font-medium text-center mb-4 text-white">Comprehensive Support for All Your Digital Assets</h3>
    <p className='font-normal text-stone-300 text-center mb-8'>Our platform supports a wide range of blockchains, cryptocurrencies, and NFTs across various protocols. Easily manage your digital assets and collectibles, all in one secure and versatile app.</p>
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-center"> {/* Change to 10 columns */}
      {/* First Card (Larger) */}
      <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl p-6 flex flex-col justify-between text-white md:col-span-4"> {/* Spans 4 columns */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Supported cryptocurrencies</h3>
          <p className="text-base mb-6">
            Description of the main feature that is larger and more detailed.
          </p>
        </div>
        <img src={blockchain1} alt="Main Feature" className='w-64 mx-auto'/>
      </div>

      {/* Other Three Cards */}
      <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl px-4 py-6 flex flex-col justify-between text-white md:col-span-2"> {/* Spans 2 columns */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Supported token standards</h3>
          <p className="text-base mb-6">Brief description of feature 1.</p>
        </div>
        <img src={blockchain2} alt="Feature 1" className='1/3 mx-auto' />
      </div>

      <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl px-4 py-6 flex flex-col justify-between text-white md:col-span-2"> {/* Spans 2 columns */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Supported NFTs</h3>
          <p className="text-base mb-6">Brief description of feature 2.</p>
        </div>
        <img src={blockchain3} alt="Feature 2" className='1/3 mx-auto' />
      </div>

      <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 rounded-xl px-4 py-6 flex flex-col justify-between text-white md:col-span-2"> {/* Spans 2 columns */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Staking Coming Soon</h3>
          <p className="text-base mb-6">Brief description of feature 3.</p>
        </div>
        <img src={blockchain4} alt="Feature 3" className='1/3 mx-auto'/>
      </div>
    </div>
  </div>
</section>


<section className="w-full py-16 px-4  bg-full-screen-shadow bg-no-repeat"  style={{backgroundPosition: '150% 80%', backgroundSize: '60%'}}>
  <h1 className='text-5xl text-white mb-6 text-center'>Benefits</h1>
  <div className="max-w-6xl mx-auto bg-gradient-to-t from-neutral-950 to-zinc-900 border border-white border-b-0 rounded-3xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12 text-white justify-items-center">
    
    {/* Left Card */}
    <div className="flex flex-col items-center text-center min-h-64 h-full px-4">
      <img src={benefit1} alt="Feature 1" className="mb-7" />
      <h2 className="text-xl font-semibold mb-2">Enhanced Security</h2>
      <h4 className="text-base font-light mb-5 w-full sm:w-48 mx-auto">Protect your assets with multisig protection</h4>
      <p className="text-sm text-stone-300 w-full sm:w-72 mx-auto flex-grow">Mitigate the risk of unauthorized transactions and ensure secure storage.</p>
    </div>

    {/* Middle Card with Background Image */}
    <div className="flex flex-col items-center text-center relative min-h-64 h-full px-4">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-benefit-shadow bg-cover bg-no-repeat" style={{ left: '20%', top: '0%' }}></div>
      <img src={benefit2} alt="Feature 2" className="mb-7 z-10" />
      <h2 className="text-xl font-semibold mb-2 z-10">Collaborative Management</h2>
      <h4 className="text-base font-light mb-5 z-10 w-full sm:w-48 mx-auto">Manage crypto with others, securely</h4>
      <p className="text-sm text-stone-300 z-10 w-full sm:w-72 mx-auto flex-grow">Multisig enables shared management of crypto assets, with built-in security.</p>
    </div>

    {/* Right Card */}
    <div className="flex flex-col items-center text-center min-h-64 h-full px-4">
      <img src={benefit3} alt="Feature 3" className="mb-7" />
      <h2 className="text-xl font-semibold mb-2">Flexibility</h2>
      <h4 className="text-base font-light mb-5 w-full sm:w-48 mx-auto">Customize your multisig settings</h4>
      <p className="text-sm text-stone-300 w-full sm:w-72 mx-auto flex-grow">Choose the number of signatures required and assign roles for tailored security</p>
    </div>

  </div>
</div>





<section className="w-full py-16 mt-16 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-65% -60%', backgroundSize: '75%' }}>
  <div className="max-w-6xl mx-auto text-white">
    <h2 className="text-center text-4xl font-bold mb-8">How it Works</h2>
    <div className="flex flex-col md:flex-row justify-evenly md:space-x-8 space-y-6 md:space-y-0">
      
      {/* First Card */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="flex items-center space-x-4 mb-6 relative">  
          <span className="text-10xl font-extrabold text-white relative">1</span>
          <div className='bg-gray-800 rounded-3xl py-8 px-6 w-full min-h-44 relative z-index-3'>  
            <h3 className="text-2xl font-semibold mb-2">Secure Setup</h3> 
            <p className="text-gray-400">Create your multisig wallet by selecting the number of signatures required to approve a transaction. Invite trusted parties to join the wallet, each with their own private key securely stored on their device.</p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="flex items-center space-x-4 mb-6 relative">  
          <span className="text-10xl font-extrabold text-green-500 relative">2</span>
          <div className='bg-gray-800 rounded-3xl py-8 px-6 w-full min-h-44 relative z-index-3'>  
            <h3 className="text-2xl font-semibold mb-2">Approve Transactions</h3>
            <p className="text-gray-400">When a transaction is initiated, it requires approval from the designated number of signers. Once the required signatures are collected, the transaction is securely executed on the blockchain, ensuring maximum security and control.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-16 px-4 text-gray-800">
  {/* Future of Crypto Management */}
  <section className="w-full py-16 mt-16">
    <div className="max-w-6xl mx-auto text-white text-center">
      <h1 className="text-5xl mb-4 font-extrabold">The Future of Secure Crypto Management</h1>
      <h3 className="text-3xl mb-3">Key Features that Empower Your Crypto Journey</h3>
      <p className="text-medium font-light text-stone-300 mb-12 w-2/3 mx-auto">
        Unveil the cutting-edge features of our multisig wallet, crafted to provide top-notch security and control over your digital assets. Here are the six main features that set our wallet apart in the industry.
      </p>
    </div>

    {/* Grid for Cards */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      {/* First Card (Odd) */}
      <div
        className="relative px-6 py-10 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1D2235)`, // Odd card gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
        }}
      >
        <img src={crypto1} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl font-semibold mb-2">Personalised dashboard</h2>
        <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
          Allows to view their portfolios, track transactions, monitor the market, and make transactions quickly with saved contacts.
        </p>
      </div>

      {/* Second Card (Even) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1B1E23)`, // Even card gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto2} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl font-semibold mb-2">Self-Custody Management</h2>
        <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
          Allows to view their portfolios, track transactions, monitor the market, and make transactions quickly with saved contacts.
        </p>
      </div>

      {/* Third Card (Odd) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1D2235)`, // Odd card gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto3} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl font-semibold mb-2">Seamless Transactions</h2>
        <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
          Allows to view their portfolios, track transactions, monitor the market, and make transactions quickly with saved contacts.
        </p>
      </div>
    </div>

    {/* Second Grid for Cards */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
      {/* Fourth Card (Even) */}
      <div
        className="relative px-6 py-10 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1B1E23)`, // Even card gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
        }}
      >
        <img src={crypto4} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl font-semibold mb-2">Advanced Security</h2>
        <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
          Allows to view their portfolios, track transactions, monitor the market, and make transactions quickly with saved contacts.
        </p>
      </div>

      {/* Fifth Card (Odd) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1D2235)`, // Odd card gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto5} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl font-semibold mb-2">Custom Widgets</h2>
        <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
          Allows to view their portfolios, track transactions, monitor the market, and make transactions quickly with saved contacts.
        </p>
      </div>

      {/* Sixth Card (Even) */}
      <div
        className="relative py-10 px-6 border rounded-3xl shadow-md mb-6"
        style={{
          backgroundImage: `url(${zigBg}), linear-gradient(to top, #121318, #1B1E23)`, // Even card gradient
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={crypto6} className="w-15 py-4 ml-auto" />
        <h2 className="text-2xl font-semibold mb-2">Comprehensive Portfolio</h2>
        <p className="mt-2 md:text-sm lg:text-md text-stone-300 font-light">
          Allows to view their portfolios, track transactions, monitor the market, and make transactions quickly with saved contacts.
        </p>
      </div>
    </div>
  </section>
</section>




{/*Why Choose*/}
<section className="w-full py-16 px-4 text-gray-800 bg-why-choose-line">
        <div className="max-w-5xl mx-auto py-12 px-12  gap-8 text-white rounded-custom bg-gradient-to-t from-zinc-900 to-neutral-900">
          <div className="md:col-span-2 max-w-3xl mx-auto">
            <h2 className="text-3xl">Why Choose Our Multisig Wallet?</h2>
            <h3 className="font-light">
              Unmatched Security and Total Control for Your Digital Assets
            </h3>

            <div className="max-w-6xl mx-auto space-y-16">
              <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">First Section Title</h2>
                  <p className="text-gray-700 mb-4">
                    This is a description for the first section. It explains the benefits and features.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                </div>
                <img src={whychoose1} alt="First Image" className="w-full md:w-1/2 rounded-lg" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
                <img src={whychoose2} alt="Second Image" className="w-full md:w-1/2 rounded-lg" />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Second Section Title</h2>
                  <p className="text-gray-700 mb-4">
                    This is a description for the second section. It highlights different features or services.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>




      


      {/* Download */}

      <section className="w-full py-16 px-4 text-gray-800">
        <div className="max-w-6xl mx-auto  gap-8 text-white">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Download our free safety guide</h2>
              <h3 className="text-3xl font-bold mb-4">Protect Your Digital Assets with Confidence</h3>
              <p className="font-light mb-4">
                Get instant access to our comprehensive Safety Guide and learn essential tips for securing your online presence. From password management to avoiding scams, this guide provides actionable advice to help you stay safe in the digital world. Don't leave your security to chance—download your free copy today!              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Download Guide</button>
            </div>
            <img src={download} alt="Second Image" className="w-full md:w-1/2 rounded-lg" />

          </div>
        </div>
      </section>


     

      {/* FAQ */}
      <section class="w-full py-16 mt-16 bg-full-screen-shadow bg-no-repeat" style={{backgroundPosition: '-80% 80%', backgroundSize: '70%'}}>
      <section className="w-full py-16 px-4 text-gray-800 bg-full-screen-shadow bg-no-repeat" style={{backgroundPosition: '180% -120%', backgroundSize: '65%'}}>
        <div className="max-w-6xl mx-auto  gap-8 text-white">
          <h1 className='text-5xl text-white'>FAQ</h1>
          <section class="w-full py-16 text-gray-800">
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <p className='text-stone-300'>A multisig (multi-signature) crypto wallet is a digital wallet that requires multiple private keys to authorize a transaction. This enhances security by ensuring that more than one person or device must approve a transaction before it is executed. For instance, in a 2-of-3 multisig wallet, two out of three designated private keys must approve a transaction.</p>
              </div>


            </div>


            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
            <div class="mx-auto flex justify-between items-center py-6 rounded-lg">
              <div class="flex space-x-4">
                <span class="text-custom-xl font-semibold text-blue-600">01</span>
                <span class="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>

              <div class="flex items-center">
                <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>
          </section>

        </div>
      </section>
      </section>
      
      

      <section className="w-full py-16 px-4 text-center bg-full-screen-shadow bg-no-repeat" style={{backgroundPosition: '180% 0%', backgroundSize: '65%'}}>
      <section className="w-full py-16 px-4 text-center">
      <div className="max-w-7xl mx-auto  gap-8">
      <div class="relative bg-white p-4 rounded-lg">
  <div class="absolute inset-0 rounded-lg border-l-4 border-t-4 border-r-4 border-transparent">
    <div class="absolute inset-0 rounded-lg border-l-4 border-t-4 border-r-4 border-transparent border-image: bg-gradient-to-b from-[#1B1E23] to-[#040404] 1; border-width: 4px;"></div>
  </div>
  <div class="relative z-10 mt-4 mb-3">
    <h2 class="text-5xl font-semibold text-white">Let's Talk</h2>
    <p className='text-stone-300 mt-4'>This div has borders on the left, right, and top with a radial gradient effect.</p>
  </div>

  <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Card 1 */}
        <div className="bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src={whatsapp} alt="Icon 1" className="mb-4" />
          <h3 className="text-xl font-semibold">Telegram</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img src={whatsapp} alt="Icon 1" className="mb-4" />
        <h3 className="text-xl font-semibold">Telegram</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img src={whatsapp} alt="Icon 1" className="mb-4" />
        <h3 className="text-xl font-semibold">Telegram</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img src={whatsapp} alt="Icon 1" className="mb-4" />
        <h3 className="text-xl font-semibold">Telegram</h3>
        </div>
      </div>
</div>

</div>
   
</section>


<section className="w-full py-16 px-4 text-center">
<div className="w-full py-16 px-4 text-center" >
  <div className="max-w-6xl mx-auto space-y-16 " >
    {/* First Section */}
    <div className="flex flex-col md:flex-row items-start justify-between" >
      {/* Left Side: Heading and Paragraph */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4 text-white text-left">Platform Support</h2>
        <p className="text-stone-300 text-left">
          This is a paragraph that provides information about the main topic. It describes the content and purpose of the section.
        </p>
      </div>

      {/* Right Side: Small Cards */}
      <div className="md:w-2/3 flex flex-wrap justify-end gap-4"> {/* Added justify-end */}
  {/* Card 1 */}
  <div className="bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Use flex and adjust width */}
  <img src={IOS} alt="Logo" className="mb-2" />
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Use flex and adjust width */}
  <img src={IOS} alt="Logo" className="mb-2" />
  </div>

  {/* Card 3 */}
  <div className="bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Use flex and adjust width */}
  <img src={IOS} alt="Logo" className="mb-2" />
  </div>

  {/* Card 4 */}
  <div className="bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Use flex and adjust width */}
  <img src={IOS} alt="Logo" className="mb-2" />
  </div>

  {/* Card 5 */}
  <div className="bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Use flex and adjust width */}
  <img src={IOS} alt="Logo" className="mb-2" />
  </div>

  {/* Card 6 */}
  <div className="bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Use flex and adjust width */}
  <img src={IOS} alt="Logo" className="mb-2" />
  </div>
</div>

    </div>

  </div>
</div>
</section>


    {/* Footer Section */}

<div className="max-w-7xl mx-auto py-16 px-4 text-center">
<footer className="flex flex-col md:flex-row justify-between items-start text-left text-white py-6 rounded-lg">
      {/* Left Side: Logo and Text */}
      <div className="md:w-1/2 mb-4 md:mb-0 text-stone-300">
          <img src={trustLogo}></img>
        <p className=" mb-3 mt-3">We are a farsighted team specializing in IT and software development for crypto business. Our company offers turn key solutions with no hassle.</p>
        <p className='mb-3 mt-3'>Email: info@trustvault.app</p>
        <p className='max-w-lg mb-3 mt-3'>The information provided on this website is for informational purposes only and should not be considered as financial or investment advice. Cryptocurrency transactions carry inherent risks, including the potential loss of funds. While we employ advanced security measures, such as our SafeSend feature, to protect your assets, we cannot guarantee the absolute security of your funds. Always ensure that you are using the correct wallet addresses and follow best practices for securing your private keys. By using our services, you agree to our terms and conditions and acknowledge that you are responsible for any transactions made through our platform.</p>
      </div>

      {/* Right Side: Footer Links */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between">
      <div className="grid grid-cols-2 md:flex md:flex-row w-full gap-4">
        {/* List 1 */}
        <ul className="mb-4 md:mb-0 space-y-5 w-full">
          <li className="font-bold">TRUSTVAULT</li>
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Press & Partners</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>

        {/* List 2 */}
        <ul className="mb-4 md:mb-0 space-y-5 w-full">
          <li className="font-bold">DISCOVER</li>
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Press & Partners</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>

        {/* List 3 for Mobile */}
        <ul className="mb-4 md:mb-0 space-y-5 w-full md:hidden">
          <li className="font-bold">FOLLOW US</li>
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Press & Partners</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Mobile-only List 3 */}
      <ul className="hidden md:flex md:flex-col mb-4 md:mb-0 space-y-5">
        <li className="font-bold">FOLLOW US</li>
        <li>Home</li>
        <li>About us</li>
        <li>Features</li>
        <li>Press & Partners</li>
        <li>Blog</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
    </footer>

    </div>
    </section>
    </div>
  );
}


export default App;