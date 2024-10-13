import React from 'react';
import nextLevelImage from './images/main-mobiles.png';
import trustLogo from './images/trustvault.svg';
import feature1 from './images/feature1.svg';
import feature2 from './images/feature2.svg';
import feature3 from './images/feature3.svg';
import whatis from './images/what-is.svg';
import crypto1 from './images/crypto1.svg';
import whychoose1 from './images/why-choose1.svg';
import whychoose2 from './images/why-choose2.svg';
import download from './images/download.svg';
import whatsapp from './images/whatsapp.svg';
import IOS from './images/IOS.svg';
import downloadApp from './images/download-app.svg';









function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className='w-full flex justify-evenly'>
        <div className='flex gap-x-10'>
          <img src={trustLogo}></img>
        </div>
        <div className='flex text-white items-center gap-x-7'>
          <ul className='flex items-center gap-x-10 text-lg'>
            <li>Home</li>
            <li>SafeSend</li>
            <li>Press & Partners</li>
            <li>Blog</li>
          </ul>
          <div className='flex gap-x-7'>
            <button className='border-2 border-zinc-900 rounded-3xl px-8 py-3'>Download</button>
            <button>Get in touch</button>
          </div>

        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full bg-main-bg min-h-screen bg-cover bg-no-repeat" style={{
    backgroundPosition: 'right top', // Position the background in the top-right corner
  }}>
      <section className="w-full bg-next-level bg-contain bg-no-repeat w-2/4 -mt-20 font-bold text-white py-20 text-center flex flex-col items-center justify-center">
        <div className='main-heading-container relative mb-7'>
          <h1 className="text-8xl font-bold"><span>next</span><span className='text-lime-400'>level</span></h1>
          <p className="text-neutral-200 text-lg text-xl font-light">advanced self custody technology</p>
        </div>
        <img src={nextLevelImage}></img>
      </section>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={feature1} className='w-12 py-6'></img>
            <h2 className="text-2xl font-semibold">Multi-Signature Technology</h2>
            <h4 className="font-light text-lg">An additional layer of security</h4>
            <p className="mt-4 md:text-md lg:text-lg text-stone-300 font-light">Require multiple signatures for transactions, ensuring enhanced protection</p>
          </div>
          <div className="py-6 bg-middle-feature bg-cover bg-no-repeat px-6 border rounded-lg shadow-md">
            <img src={feature2} className='w-12 py-6'></img>
            <h2 className="text-2xl font-semibold">Self-Custody</h2>
            <h4 className="font-light text-lg">Your keys, your crypto</h4>
            <p className="mt-4 md:text-md lg:text-lg text-stone-300 font-light">Store your crypto securely, with full control over your private keys</p>
          </div>
          <div className="py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900 ">
            <img src={feature3} className='w-12 py-6'></img>
            <h2 className="text-2xl font-semibold">Multi-Signature Technology</h2>
            <h4 className="font-light text-lg">An additional layer of security</h4>
            <p className="mt-4 md:text-md lg:text-lg text-stone-300 font-light">Require multiple signatures for transactions, ensuring enhanced protection</p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 text-gray-800">
        <div className="w-3/4 mx-auto flex flex-wrap items-center justify-between text-white">
          <div>
            <img src={whatis}></img>
          </div>
          <div>
            <p className='text-4xl font-extrabold'>What is SAFESEND?</p>
            <p className='text-base font-medium w-96'>Experience a new level of security with SafeSend! Before sending large amounts, SafeSend kicks off the process with a transfer, verified by the recipient through a one-time password (OTP). Thisa smart feature ensures your funds land exactly where you want them, eliminating the risk of crypto clipping or sending to the wrong address. Once stage 1 of the transfer is confirmed, the full amount is released with confidence. Say goodbye to transaction anxiety and hello to seamless, secure transfers with SafeSend!</p>
            <button className=''>Read More</button>
          </div>


        </div>
      </section>

      <section className="w-full py-16 px-4 text-gray-800 mt-12">
  <div
    className="max-w-6xl mx-auto bg-gray-800 flex flex-col md:flex-row justify-evenly md:space-x-8 space-y-6 md:space-y-0 rounded-lg"
    style={{
      background: "linear-gradient(to top, #121318, #1B1E23)",
      borderTop: "1px solid white",
      borderLeft: "1px solid white",
      borderRight: "1px solid white",
      borderBottom: "none",
    }}
  >
    <div className="flex items-center space-x-4 text-white">
      <div>
        <h3 className="text-xl font-semibold mb-2">Download Our App</h3>

        {/* Two buttons with good padding */}
        <div className="flex space-x-4 mt-4">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md">Button 1</button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md">Button 2</button>
        </div>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <div className='relative'>
        <img src={downloadApp} className='mt-[-150px]' alt="Download App" />
      </div>
    </div>
  </div>
</section>

      <section class="py-16">
        <div class="max-w-6xl mx-auto bg-gray-900 p-8 rounded-lg">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">Why Choose Our Multisig Wallet?</h2>
            <p class="text-lg text-gray-400 mt-2">Unmatched Security and Total Control for Your Digital Assets</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="flex flex-col lg:flex-row bg-gray-800 p-6 rounded-lg space-y-6 lg:space-y-0 lg:space-x-6">
              <img src={feature3} className='w-12 py-6'></img>
              <div class="flex flex-col justify-center">
                <h3 class="text-2xl font-semibold mb-4">Enhanced Security and Peace of Mind</h3>
                <p class="text-gray-400 mb-4">
                  Our multisig wallet ensures that your digital assets are protected by requiring multiple approvals for every transaction. This reduces the risk of unauthorized access and provides you with confidence that your funds are secure.
                </p>
                <button class="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-all">Learn More</button>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row bg-gray-800 p-6 rounded-lg space-y-6 lg:space-y-0 lg:space-x-6">
              <img src={feature3} className='w-12 py-6'></img>
              <div class="flex flex-col justify-center">
                <h3 class="text-2xl font-semibold mb-4">Full Control and Flexibility</h3>
                <p class="text-gray-400 mb-4">
                  With our wallet, you maintain full control over your assets. The ability to customize the number of required signers gives you the flexibility to tailor security to your specific needs.
                </p>
                <button class="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-all">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="py-16 bg-gray-900">
        <h2 class="text-center text-4xl font-bold mb-8">How it Works</h2>
        <div class="flex flex-col md:flex-row justify-center md:space-x-8 space-y-6 md:space-y-0">
          <div class="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg">
            <span class="text-5xl font-bold text-white">1</span>
            <div>
              <h3 class="text-xl font-semibold mb-2">Secure Setup</h3>
              <p class="text-gray-400">Follow the steps to secure your assets with TrustVault's advanced system.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg">
            <span class="text-5xl font-bold text-green-500">2</span>
            <div>
              <h3 class="text-xl font-semibold mb-2">Approve Transactions</h3>
              <p class="text-gray-400">Easily approve transactions with the highest level of security.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="w-1/2 mx-auto md:space-x-8 space-y-6 md:space-y-0">
        <h2 className='text-3xl text-white'>The Future of Secure Crypto Management</h2>
        <h2 className='text-xl text-white'>Key Features that Empower Your Crypto Journey</h2>
        <h2 className='text-lg text-white'>Unveil the cutting-edge features of our multisig wallet, crafted to provide top-notch security and control over your digital assets. Here are the six main features that set our wallet apart in the industry.</h2>
      </div>
      <section className="w-full py-16 px-4 text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-crypto bg-cover py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={crypto1} className='py-4 ml-auto'></img>
            <h2 className="text-2xl font-semibold">Personalised dashboard</h2>
            <p className="mt-1 md:text-md lg:text-lg text-stone-300 font-light">Allows to view their portfolios, track
              transactions, monitor the market, and make transactions quickly with saved contacts. Users can also add or remove widgets, and effortlessly organize their space.</p>
          </div>
          <div className="bg-crypto bg-cover py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={crypto1} className='py-4 ml-auto'></img>
            <h2 className="text-2xl font-semibold">Personalised dashboard</h2>
            <p className="mt-1 md:text-md lg:text-lg text-stone-300 font-light">Allows to view their portfolios, track
              transactions, monitor the market, and make transactions quickly with saved contacts. Users can also add or remove widgets, and effortlessly organize their space.</p>
          </div>
          <div className="bg-crypto bg-cover py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={crypto1} className='py-4 ml-auto'></img>
            <h2 className="text-2xl font-semibold">Personalised dashboard</h2>
            <p className="mt-1 md:text-md lg:text-lg text-stone-300 font-light">Allows to view their portfolios, track
              transactions, monitor the market, and make transactions quickly with saved contacts. Users can also add or remove widgets, and effortlessly organize their space.</p>
          </div>
          <div className="bg-crypto bg-cover py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={crypto1} className='py-4 ml-auto'></img>
            <h2 className="text-2xl font-semibold">Personalised dashboard</h2>
            <p className="mt-1 md:text-md lg:text-lg text-stone-300 font-light">Allows to view their portfolios, track
              transactions, monitor the market, and make transactions quickly with saved contacts. Users can also add or remove widgets, and effortlessly organize their space.</p>
          </div>
          <div className="bg-crypto bg-cover py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={crypto1} className='py-4 ml-auto'></img>
            <h2 className="text-2xl font-semibold">Personalised dashboard</h2>
            <p className="mt-1 md:text-md lg:text-lg text-stone-300 font-light">Allows to view their portfolios, track
              transactions, monitor the market, and make transactions quickly with saved contacts. Users can also add or remove widgets, and effortlessly organize their space.</p>
          </div>
          <div className="bg-crypto bg-cover py-6 px-6 border rounded-lg shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900">
            <img src={crypto1} className='py-4 ml-auto'></img>
            <h2 className="text-2xl font-semibold">Personalised dashboard</h2>
            <p className="mt-1 md:text-md lg:text-lg text-stone-300 font-light">Allows to view their portfolios, track
              transactions, monitor the market, and make transactions quickly with saved contacts. Users can also add or remove widgets, and effortlessly organize their space.</p>
          </div>
        </div>
      </section>


      {/*Why Choose*/}
      <section className="bg-why-choose-line w-full py-16 px-4 text-gray-800">
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
      <section className="w-full py-16 px-4 text-gray-800">
        <div className="max-w-5xl mx-auto  gap-8 text-white">
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


      <section className="w-full py-16 px-4 text-center">
      <div className="max-w-7xl mx-auto  gap-8">
      <div class="relative bg-white p-4 rounded-lg overflow-hidden">
  <div class="absolute inset-0 rounded-lg border-l-4 border-t-4 border-r-4 border-transparent">
    <div class="absolute inset-0 rounded-lg border-l-4 border-t-4 border-r-4 border-transparent border-image: bg-gradient-to-b from-[#1B1E23] to-[#040404] 1; border-width: 4px;"></div>
  </div>
  <div class="relative z-10 mt-4 mb-3">
    <h2 class="text-5xl font-semibold text-white">Let's Talk</h2>
    <p className='text-stone-300 mt-4'>This div has borders on the left, right, and top with a radial gradient effect.</p>
  </div>
</div>
<div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
   
</section>

<div className="w-full py-16 px-4 text-center">
  <div className="max-w-6xl mx-auto space-y-16">
    {/* First Section */}
    <div className="flex flex-col md:flex-row items-start justify-between">
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

    {/* Footer Section */}
   
  </div>
</div>


<div className="max-w-7xl py-16 px-4 text-center">
<footer className="flex flex-col md:flex-row justify-between items-start text-left text-white py-6 rounded-lg">
      {/* Left Side: Logo and Text */}
      <div className="md:w-1/2 mb-4 md:mb-0 text-stone-300">
          <img src={trustLogo}></img>
        <p className=" mb-3 mt-3">We are a farsighted team specializing in IT and software development for crypto business. Our company offers turn key solutions with no hassle.</p>
        <p className='mb-3 mt-3'>Email: info@trustvault.app</p>
        <p className='max-w-lg mb-3 mt-3'>The information provided on this website is for informational purposes only and should not be considered as financial or investment advice. Cryptocurrency transactions carry inherent risks, including the potential loss of funds. While we employ advanced security measures, such as our SafeSend feature, to protect your assets, we cannot guarantee the absolute security of your funds. Always ensure that you are using the correct wallet addresses and follow best practices for securing your private keys. By using our services, you agree to our terms and conditions and acknowledge that you are responsible for any transactions made through our platform.</p>
      </div>

      {/* Right Side: Footer Links */}
      <div className="md:w-1/2 flex flex-col md:flex-row justify-between">
        <ul className="mb-4 md:mb-0 space-y-5">
        <li className="mb-2 font-bold">TRUSTVAULT</li>
          <li className="mb-2">Home</li>
          <li className="mb-2">About us</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Press & Partners</li>
          <li className="mb-2">Blog</li>
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms of Service</li>
        </ul>
        <ul className="mb-4 md:mb-0 space-y-5">
        <li className="mb-2 font-bold">DISCOVER</li>
        <li className="mb-2">Home</li>
          <li className="mb-2">About us</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Press & Partners</li>
          <li className="mb-2">Blog</li>
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms of Service</li>
        </ul>
        <ul className="mb-4 md:mb-0 space-y-5">
        <li className="mb-2 font-bold">FOLLOW US</li>
        <li className="mb-2">Home</li>
          <li className="mb-2">About us</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Press & Partners</li>
          <li className="mb-2">Blog</li>
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms of Service</li>
        </ul>
      </div>
    </footer>

    </div>
    </div>
  );
}


export default App;