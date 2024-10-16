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
import telegram from './images/telegram.svg';
import linkedin from './images/linkedin.svg';
import email from './images/email.svg';
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
import linearLine from './images/linear-line.svg'
import letsTalk from './images/letsTalk-shadow.svg'
import footerTel from './images/footerTel.svg'
import footerTwitter from './images/footerTwitter.svg'
import footerLinkedIn from './images/footerLinkedIn.svg'
import footerMedium from './images/footerMedium.svg'
import footerFacebook from './images/footerFacebook.svg'
import footerGithub from './images/footerGithub.svg'








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
            transform: "rotate(0.7deg)"
          }}>TRUSTVAULT SAFESEND OTP TRANSFERS</h1>
        </div>
        <div className="mx-auto text-center">
          <h1 className='min-h-14 mt-[-55px] text-4xl font-semibold py-3' style={{
            background: "linear-gradient(to left, #2F5FE5, #7EBF02)",
            transform: "rotate(-0.9deg)"
          }}></h1>
        </div>
      </section>

      <section className="w-full py-16 mb-14 mt-16 px-4 text-gray-800 bg-full-screen-shadow bg-contain bg-no-repeat" style={{ backgroundPosition: '105% 65%', backgroundSize: '40%' }}>
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










      <section className="w-full py-16 px-4 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-60% 60%', backgroundSize: '70%' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-white">Supported Blockchains and Currencies</h2>
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
              <img src={blockchain1} alt="Main Feature" className='w-64 mx-auto' />
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
              <img src={blockchain4} alt="Feature 3" className='1/3 mx-auto' />
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-16 px-4  bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '150% 80%', backgroundSize: '60%' }}>
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





        <section className="w-full mt-16 bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '-65% -60%', backgroundSize: '75%' }}>
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
          <section className="w-full py-2 mt-6">
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
              <h2 className="text-4xl font-extrabold">Why Choose Our Multisig Wallet?</h2>
              <h3 className="font-light text-stone-300 text-lg">
                Unmatched Security and Total Control for Your Digital Assets
              </h3>

              <div className="max-w-6xl mx-auto space-y-16 mt-10">
                <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">Enhanced Security and
                      Peace of Mind</h2>
                    <p className="text-stone-300 mb-3">
                      Our multisig wallet ensures that your digital assets are protected by requiring multiple approvals for every transaction. This reduces the risk of unauthorized access and provides you with the confidence that your funds are secure, even if one key is compromised.
                    </p>

                    <div className='relative'>
                      <img src={buttonBlur} className='absolute -bottom-5 left-5'></img>
                      <button className="relative z-index-10 bg-gradient-to-t from-neutral-950 to-zinc-900 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-2">
                        Learn More
                      </button>
                    </div>                </div>
                  <img src={whychoose1} alt="First Image" className="w-full md:w-1/2 rounded-lg" />
                </div>

                <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
                  <img src={whychoose2} alt="Second Image" className="w-full md:w-1/2 rounded-lg" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">Full Control and Flexibility</h2>
                    <p className="text-stone-300 mb-3">
                      With our wallet, you maintain full control over your assets. The ability to customize the number of required signers gives you the flexibility to tailor security to your specific needs, whether you're managing personal funds, corporate assets, or a joint account.                    </p>
                    <div className='relative'>
                      <img src={buttonBlur} className='absolute -bottom-5 left-5'></img>
                      <button className="relative z-index-10 bg-gradient-to-t from-neutral-950 to-zinc-900 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-2">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>







      {/* Download */}

      <section className="w-full py-16 text-gray-800">
        <div className="w-full mx-auto gap-8 text-white relative bg-gradient-to-t from-zinc-900 to-neutral-900 px-4 sm:px-8"> {/* Added padding */}
          <div className="max-w-6xl mx-auto relative">

            <img src={linearLine} className="absolute top-0 left-0"></img>

            <div className="flex flex-col md:flex-row items-center md:space-x-4 py-16 rounded-lg sm:gap-10"> {/* Adjust gap on smaller screens */}
              <div className="flex-1">
                <h2 className="text-4xl font-extrabold mb-6">Download our free safety guide</h2>
                <h3 className="text-xl font-bold mb-2">Protect Your Digital Assets with Confidence</h3>
                <p className="font-light mb-4">
                  Get instant access to our comprehensive Safety Guide and learn essential tips for securing your online presence. From password management to avoiding scams, this guide provides actionable advice to help you stay safe in the digital world. Don't leave your security to chance—download your free copy today!
                </p>

                <div className="relative">
                  <img src={buttonBlur} className="absolute -bottom-4 left-24"></img>
                  <button className="relative z-10 bg-gradient-to-t from-neutral-950 to-zinc-900 border-2 border-indigo-500 text-white py-3 px-12 rounded-full hover:bg-blue-600 transition mt-2">
                    Download Guide
                  </button>
                </div>
              </div>
              <img src={download} alt="Second Image" className="w-full md:w-1/2 rounded-lg" />
            </div>

            <img src={linearLine} className="absolute right-0 bottom-0"></img>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="w-full py-16 mt-16">
        <div className="w-full py-16 px-4 text-gray-800">
          <div className="max-w-6xl mx-auto gap-8 text-white">
            <h1 className="text-5xl text-white mb-8">FAQ</h1>

            {/* FAQ Item 1 */}
            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            {/* FAQ Item 1 Answer */}
            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <p className="text-stone-300">A multisig (multi-signature) crypto wallet is a digital wallet that requires multiple private keys to authorize a transaction. This enhances security by ensuring that more than one person or device must approve a transaction before it is executed. For instance, in a 2-of-3 multisig wallet, two out of three designated private keys must approve a transaction.</p>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 rounded-lg">
              <div className="flex space-x-4">
                <span className="text-custom-xl font-semibold text-blue-600">01</span>
                <span className="text-custom-xl font-semibold text-blue-600">What is a multisig crypto wallet?</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
            </div>




          </div>
        </div>
      </section>





      <section className="w-full py-16 px-4 text-center bg-full-screen-shadow bg-no-repeat" style={{ backgroundPosition: '180% 0%', backgroundSize: '65%' }}>
        <section className="w-full py-16 px-4 text-center">
          <div className="max-w-7xl mx-auto gap-8">
            <div className="relative p-4 rounded-lg">
              {/* Let's Talk Image */}
              <img
                src={letsTalk}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
                alt="Let's Talk"
              />

              {/* Border and Inner Content */}
              <div className="py-8 relative z-10">
                <h2 className="text-5xl font-extrabold text-white">Let's Talk</h2>
                <p className='text-stone-300 text-xl mt-4 mb-8'>Begin your journey into the tomorrow of fintech today.</p>
              </div>

              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {/* Card 1 */}
                <div className="relative bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center py-12">
                  <div className="absolute inset-0 rounded-lg white-linear-border">
                  </div>
                  <img src={whatsapp} alt="WhatsApp" className="mb-4 z-10 w-14 h-14 object-contain" />
                  <h3 className="text-xl font-semibold z-10">WhatsApp</h3>
                </div>

                {/* Card 2 */}
                <div className="relative bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center py-12">
                  <div className="absolute inset-0 rounded-lg white-linear-border">
                  </div>
                  <img src={telegram} alt="Telegram" className="mb-4 z-10 w-14 h-14 object-contain" />
                  <h3 className="text-xl font-semibold z-10">Telegram</h3>
                </div>

                {/* Card 3 */}
                <div className="relative bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center py-12">
                  <div className="absolute inset-0 rounded-lg white-linear-border">
                  </div>
                  <img src={linkedin} alt="LinkedIn" className="mb-4 z-10 w-14 h-14 object-contain" />
                  <h3 className="text-xl font-semibold z-10">LinkedIn</h3>
                </div>

                {/* Card 4 */}
                <div className="relative bg-gradient-to-t from-zinc-900 to-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center py-12">
                  <div className="absolute inset-0 rounded-lg white-linear-border">
                  </div>
                  <img src={email} alt="Email" className="mb-4 z-10 w-14 h-14 object-contain" />
                  <h3 className="text-xl font-semibold z-10">Email</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-next-level bg-cover bg-no-repeat py-14" style={{ backgroundPosition: '-50% 5%', backgroundSize: '75%' }}>

        <div className="w-full py-16 px-4 text-center">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* First Section */}
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* Left Side: Heading and Paragraph */}
              <div className="md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4 text-white text-left">Platform Support</h2>
                <p className="text-stone-300 text-left">
                  Our wallet is available on iOS, Android, and
                  Desktop, and supports all major coins and tokens.</p>
              </div>

              {/* Right Side: Small Cards */}
              <div className="md:w-2/3 flex flex-wrap justify-end gap-4"> {/* Added justify-end */}
                {/* Card 1 */}
                <div className="relative bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Adjust width */}
                  <div className='rounded-in-up absolute top-0'></div>
                  <img src={IOS} alt="Logo" className="mb-2 z-10" />
                </div>

                {/* Card 2 */}
                <div className="relative bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Adjust width */}
                  <div className='rounded-in-down absolute top-0'></div>

                  <img src={IOS} alt="Logo" className="mb-2 z-10" />
                </div>

                {/* Card 3 */}
                <div className="relative bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Adjust width */}
                  <div className='rounded-in-up absolute top-0'></div>

                  <img src={IOS} alt="Logo" className="mb-2 z-10" />
                </div>

                {/* Card 4 */}
                <div className="relative bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Adjust width */}
                  <div className='rounded-in-down absolute top-0'></div>

                  <img src={IOS} alt="Logo" className="mb-2 z-10" />
                </div>

                {/* Card 5 */}
                <div className="relative bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Adjust width */}
                  <div className='rounded-in-up absolute top-0'></div>

                  <img src={IOS} alt="Logo" className="mb-2 z-10" />
                </div>

                {/* Card 6 */}
                <div className="relative bg-gradient-to-t from-neutral-950 to-zinc-900 rounded-lg shadow p-4 w-24 flex flex-col items-center mb-4"> {/* Adjust width */}
                  <div className='rounded-in-down absolute top-0'></div>

                  <img src={IOS} alt="Logo" className="mb-2 z-10" />
                </div>
              </div>


            </div>

            {/* Footer Section */}

          </div>
        </div>

        <div className="max-w-7xl py-16 px-4 text-center">
          <footer className="flex flex-col md:flex-row justify-between items-start text-left text-white py-6 rounded-lg">
            {/* Left Side: Logo and Text */}
            <div className="md:w-1/2 mb-4 md:mb-0 text-stone-300">
              <img src={trustLogo}></img>
              <p className=" mb-3 mt-3 max-w-md">We are a farsighted team specializing in IT and software development for crypto business. Our company offers turn key solutions with no hassle.</p>
              <p className='mb-3 mt-3'>Email: info@trustvault.app</p>
              <p className='max-w-lg mb-3 mt-3'>The information provided on this website is for informational purposes only and should not be considered as financial or investment advice. Cryptocurrency transactions carry inherent risks, including the potential loss of funds. While we employ advanced security measures, such as our SafeSend feature, to protect your assets, we cannot guarantee the absolute security of your funds. Always ensure that you are using the correct wallet addresses and follow best practices for securing your private keys. By using our services, you agree to our terms and conditions and acknowledge that you are responsible for any transactions made through our platform.</p>
            </div>

            {/* Right Side: Footer Links */}
          <div className="md:w-1/2 flex flex-col md:flex-row justify-between gap-x-14"> {/* Added gap-x-8 for horizontal gap */}
  <ul className="flex-1 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
    <li className="mb-2 font-bold text-white">TRUSTVAULT</li>
    <li className="mb-2">Home</li>
    <li className="mb-2">About us</li>
    <li className="mb-2">Features</li>
    <li className="mb-2">Press & Partners</li>
    <li className="mb-2">Blog</li>
    <li className="mb-2">Privacy Policy</li>
    <li className="mb-2">Terms of Service</li>
  </ul>
  
  <ul className="flex-1 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
    <li className="mb-2 font-bold text-white">DISCOVER</li>
    <li className="mb-2">Learn & Explore</li>
    <div className="flex items-start ml-3">
      <span className="mr-2">&#8226;</span>
      <p>Getting Started Guide</p>
    </div>         
    <div className="flex items-start ml-3">
      <span className="mr-2">&#8226;</span>
      <p>Blockchain & Crypto 101</p>
    </div>
    <li className="mb-2">Blockchain & Crypto 101</li>
    <div className="flex items-start ml-3">
      <span className="mr-2">&#8226;</span>
      <p>FAQ</p>
    </div>
    <div className="flex items-start ml-3">
      <span className="mr-2">&#8226;</span>
      <p>Knowledge Base</p>
    </div>
    <li className="mb-2">Stay Connected</li>
    <div className="flex items-start ml-3">
      <span className="mr-2">&#8226;</span>
      <p>Tutorials</p>
    </div>         
  </ul>
  
  <ul className="flex-1 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
    <li className="mb-2 font-bold text-white">FOLLOW US</li>
    <div className='flex items-start gap-3'>
      <img src={footerTel} alt="Telegram" />
      <li className="mb-2">Telegram</li>
    </div>
    <div className='flex items-start gap-3'>
      <img src={footerTwitter} alt="X(Twitter)" />
      <li className="mb-2">X(Twitter)</li>
    </div>
    <div className='flex items-start gap-3'>
      <img src={footerLinkedIn} alt="LinkedIn" />
      <li className="mb-2">LinkedIn</li>
    </div>
    <div className='flex items-start gap-3'>
      <img src={footerMedium} alt="Medium" />
      <li className="mb-2">Medium</li>
    </div>
    <div className='flex items-start gap-3'>
      <img src={footerFacebook} alt="Facebook" />
      <li className="mb-2">Facebook</li>
    </div>
    <div className='flex items-start gap-3'>
      <img src={footerGithub} alt="Github" />
      <li className="mb-2">Github</li>
    </div>
  </ul>
</div>


          </footer>

        </div>
      </section>


    </div>


  );
}


export default App;