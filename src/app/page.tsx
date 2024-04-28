"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Poppins } from 'next/font/google'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


const poppins300 = Poppins({ weight: "300", subsets: ['latin'] })
const poppins400 = Poppins({ weight: "400", subsets: ['latin'] })
const products = [


  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [


  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}



function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-trasparent  text-black dark:text-white dark:bg-black backdrop-blur-sm fixed w-full">
      <nav className="mx-auto flex max-w-7xl z-50 items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span >StarOne</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
            onClick={() => { setMobileMenuOpen(true); console.log(mobileMenuOpen) }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
            </Popover.Button>
            {/*
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            
            
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
                */}
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent backdrop-blur-xl dark:backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-black dark:text-white">StarOne</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 dark:text-white text-black" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Whoami
                </a>{ /*
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>

                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200">
                        Product

                       <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                  />
                    </Disclosure.Button>
                  
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                      
                    </>
                  )}
                </Disclosure>*/}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7   text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Interests
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Socials
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
function Hero() {
  const words = [
    {
      text: "Hey !",
    },
  ];

  const name = [
    {
      text: "I'm"
    },
    {
      text: "Prashanth",
      className: "dark:text-yellow-200 text-cyan-600 font-light",
    },
  ];
  return (
    <>
      <AuroraBackground className={"-z-10 " + poppins300.className}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-4xl md:text-6xl dark:text-white text-center">
            <TypewriterEffectSmooth words={words} />
            <TypewriterEffectSmooth words={name} />
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}

function Whoami() {
  return (
    <div className={"m-7  xl:container md:mx-auto text-base md:text-lg " + poppins400.className}>
      <h2 className={"text-4xl underline decoration-slate-500 font-semibold md:text-6xl " + poppins300.className}>Who<span className="dark:text-yellow-300 text-cyan-500 font-light">ami</span></h2>
      <br />
      <ul className="m-7 ml-5">
        <li>Full Stacker</li>
        <li>FOSS Enthusiasist</li>
        <li>Astrophile</li>
        <li>Melophile</li>
      </ul>
      Welcome to my digital realm, where I bring code to life in extraordinary ways. I'm a <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">system developer, skilled in C, C++</span> – the building blocks of software magic. My journey takes me deep into the heart of machines, crafting their very souls and making them hum with electronic vitality.

      I'm also a <span className="highlight">aspiring dual-faceted engineer,</span> both Electric and Electronic. Electronic engineering supports my <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">interests in Computers and electronical systems,</span> while my passion for Electric engineering quenches my thirst for understanding the beauty of physics and electromagnetism. As an electronic engineer, I create powerful things with mere milliamps. On the other hand, as an electrical engineer, I play with hundreds of volts and craft high-power appliances.

      But that's not all – <span className="highlight">I'm also a cybersecurity enthusiast,</span> unearthing hidden truths across various realms. <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">From the vast expanse of astronomy to the intricate dance of wireless networks, and from captivating graphics to the core of bare-metal transistors, I love unveiling secrets and seeing what lies beneath the surface.</span>

      Come, join me on this adventure where science fiction meets reality. Let's explore uncharted code, push the boundaries of what's possible, and dive into the very heart of technology and the mysteries of the electronical world.
    </div>);
}

function Skills() {
  return (
    <div className={"m-7 text-base md:text-xl " + poppins400.className}>
      <h2 className={"text-4xl font-semibold underline decoration-slate-500   md:text-7xl " + poppins300.className}>Skills</h2>
      <ul className="m-7 ml-5">
        <li>JavaScipt/TypeScipt + React + Next + Node</li>
        <li>C/Cxx</li>
        <li>HTML/CSS</li>
        <li>Linux - POSIX</li>
        <li>Git</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div>

    </div>
  )
}



export default function Home() {
  return (
    <>
      <Example />
      <Hero />
      <Whoami />
      <br />
      <Skills />
      <br />
      <Projects />
    </>
  );
}
