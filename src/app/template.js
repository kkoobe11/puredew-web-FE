'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Search } from '@/components/layout/search'
import { UserNav } from '@/components/layout/usernav'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'About', href: '/about', icon: UsersIcon, current: false },
  { name: 'Projects', href: '/projects', icon: FolderIcon, current: false },
  { name: 'Calendar', href: 'calendar', icon: CalendarIcon, current: false },
  {
    name: 'Showcase',
    href: '/showcase',
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Template({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const pathname = usePathname()

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                  <div className="flex h-20 shrink-0 items-center">
                    <div className="text-white text-3xl font-semibold ">🍉 Puredew</div>
                  </div>

                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  pathname === item.href
                                    ? 'bg-indigo-700 text-white'
                                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    pathname === item.href
                                      ? 'text-white'
                                      : 'text-indigo-200 group-hover:text-white',
                                    'h-6 w-6 shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          <span className="text-xs font-semibold leading-6 text-indigo-200">
                            Your teams
                          </span>
                          {teams.map((team) => (
                            <li key={team.name}>
                              <Link
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? 'bg-indigo-700 text-white'
                                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <Link
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                            aria-hidden="true"
                          />
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div
        className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-fit ' : 'w-full max-w-72'}`}
      >
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className={`flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 ${isSidebarCollapsed ? 'px-2' : 'px-6'} pb-4 relative`}
        >
          <div className="flex h-20 shrink-0 items-center gap-3 w-full">
            <div
              onClick={handleToggleSidebar}
              className="text-white text-3xl font-semibold cursor-pointer "
            >
              🍉 {isSidebarCollapsed ? '' : 'Puredew'}
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul
              role="list"
              className={` ${isSidebarCollapsed ? 'items-center' : ''} flex  flex-1 flex-col gap-y-7`}
            >
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'bg-indigo-700 text-white'
                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            pathname === item.href
                              ? 'text-white'
                              : 'text-indigo-200 group-hover:text-white',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {isSidebarCollapsed ? '' : item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  <div className="text-xs font-semibold leading-6 text-indigo-200">
                    {isSidebarCollapsed ? 'Teams' : 'Your teams'}
                  </div>
                  {teams.map((team) => (
                    <li key={team.name}>
                      <Link
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-indigo-700 text-white'
                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                          `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${isSidebarCollapsed ? 'items-center justify-center' : ''}`
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                          {team.initial}
                        </span>
                        <span className={`truncate ${isSidebarCollapsed ? 'hidden' : ''}`}>
                          {team.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <Link
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <Cog6ToothIcon
                    className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    aria-hidden="true"
                  />
                  {isSidebarCollapsed ? '' : 'Settings'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`${isSidebarCollapsed ? 'lg:pl-14' : 'lg:pl-72'}  transition-all`}>
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="ml-auto flex items-center justify-center gap-x-6">
              <Search />
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <UserNav />
              </div>
            </div>
          </div>
        </div>

        <main className="">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  )
}