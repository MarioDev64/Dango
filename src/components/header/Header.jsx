import { useRef } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  const themeToggleLightIcon = useRef(null);
  const themeToggleDarkIcon = useRef(null);
  const handleToogleBtn = () => {
    themeToggleLightIcon.current.classList.toggle('hidden');
    themeToggleDarkIcon.current.classList.toggle('hidden');
    const colorTheme = localStorage.getItem('color-theme') || false;
    if(colorTheme){
      if(colorTheme === 'light'){
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    }else{
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
    }
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <Link to="/" className="flex items-center">
                  <svg
                    className="h-8 text-dango-sky"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="mx-2 self-center text-xl text-dango-sky font-semibold whitespace-nowrap">Dango</span>
              </Link>
              <div className="flex items-center lg:order-2">
                <button onClick={handleToogleBtn} id="theme-toggle" type="button" className="mx-5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    <svg ref={themeToggleDarkIcon} id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg ref={themeToggleLightIcon} id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
                <button data-modal-target="subtotal-modal" data-modal-toggle="subtotal-modal" type="button" className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 149 149" fill="none">
                    <path 
                      d="M50.8602 26.9557C52.3042 23.2842 53.4974 19.9762 54.8908 16.7549C58.5243 8.35381 68.5331 -0.153707 80.4167 0.937125C86.1925 1.46613 90.7652 4.34359 94.8338 8.16741C98.9386 12.0247 101.305 16.9583 103.098 22.2024C103.398 23.078 103.673 23.962 104.049 25.1185C105.12 25.1841 106.223 25.2674 107.33 25.3081C112.596 25.5011 117.861 25.6645 123.125 25.8837C123.951 25.9091 124.767 26.0728 125.538 26.3677C127.573 27.1874 128.414 28.8663 127.473 30.8563C126.769 32.3538 126.668 34.065 127.194 35.6342C132.629 55.6204 135.535 76.1052 139.198 96.4431C140.938 106.104 143.07 115.692 144.885 125.341C145.76 130.005 146.39 134.721 146.967 139.433C147.458 143.453 145.47 145.993 141.408 146.572C138.852 146.94 136.273 147.129 133.69 147.139C98.9044 147.199 64.1182 147.238 29.3323 147.257C23.1306 147.269 16.9308 147.646 10.7291 147.683C8.76569 147.674 6.81426 147.377 4.93758 146.8C1.57188 145.787 0.160115 143.359 0.807264 139.863C2.06743 133.054 3.46013 126.271 4.76428 119.47C7.83855 103.437 10.775 87.3745 14.0042 71.373C15.7612 62.6656 18.0111 54.0572 20.0235 45.4008C20.9364 41.4726 21.7851 37.5293 22.7093 33.6037C23.7955 28.9903 24.6048 28.4843 29.2155 28.2809C33.5428 28.0919 37.8542 27.5588 42.1788 27.274C45.0529 27.0823 47.9389 27.0568 50.8602 26.9557ZM136.992 137.019C135.918 132.447 134.92 128.552 134.094 124.621C131.946 114.403 129.623 104.214 127.83 93.932C124.866 76.9328 122.277 59.8743 119.494 42.8463C119.035 40.0148 118.398 37.2115 117.766 34.004C113.631 34.4274 109.728 33.3011 105.485 33.7415C105.669 35.3168 105.77 36.5351 105.959 37.7414C106.376 40.8443 105.777 43.9985 104.253 46.733C103.912 47.5041 103.322 48.1382 102.577 48.5332C101.832 48.9282 100.976 49.061 100.147 48.9107C99.314 48.8117 98.5362 48.4435 97.9317 47.8617C97.3273 47.28 96.9295 46.5168 96.7996 45.6883C96.6847 45.1849 96.6105 44.671 96.5429 44.1584C96.0868 40.704 95.6378 37.2482 95.1718 33.6909H58.0051C57.6619 36.6083 57.3488 39.3473 57.0141 42.0835C56.8172 43.7172 56.6806 45.3654 56.3386 46.9721C56.2343 47.6507 55.8986 48.2722 55.3883 48.7315C54.878 49.1909 54.2245 49.4597 53.5387 49.4923C51.8289 49.6098 50.8477 48.504 50.3942 47.0134C49.9492 45.6421 49.658 44.2256 49.5258 42.7899C49.3815 40.7296 49.5226 38.6504 49.4733 36.5809C49.4013 35.7523 49.2778 34.9287 49.1032 34.1155C42.9717 34.1234 37.0922 33.7141 30.9055 34.994C24.0704 69.4696 17.2275 103.986 10.3057 138.902C11.3145 138.902 12.4119 138.946 13.5054 138.894C21.5593 138.518 29.6087 138.018 37.6659 137.758C47.593 137.439 57.5254 137.183 67.4573 137.132C89.3075 137.018 111.159 137.049 133.01 137.022C134.227 137.017 135.443 137.019 136.992 137.019ZM93.9445 25.6693C93.13 20.7179 90.6004 16.2103 86.7983 12.9361C82.6168 9.52314 78.0237 8.9327 73.113 10.7521C65.9592 13.4043 62.4334 19.0875 60.4604 26.302L93.9445 25.6693Z" 
                      fill="currentColor"/>
                  </svg>
                  &nbsp;
                  Bag
                </button>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                          <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">
                            Home
                          </Link>
                      </li>
                      <li>
                          <p href="#" className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Company
                          </p>
                      </li>
                      <li>
                          <p href="#" className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Marketplace
                          </p>
                      </li>
                      <li>
                          <p href="#" className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Features
                          </p>
                      </li>
                      <li>
                          <p href="#" className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Team
                          </p>
                      </li>
                      <li>
                          <p href="#" className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Contact
                          </p>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </header>
  )
}

export default Header