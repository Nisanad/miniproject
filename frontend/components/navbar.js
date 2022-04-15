//หากเข้าที่ /foo โดยที่ยังไม่ Login จะ Redirect ไปให้ Login ก่อน แต่ถ้า Login แล้ว ก็จะแสดงข้อความคำว่า  Foo 

import Link from 'next/link'

const Navbar = () => (
    
    
         
              <nav className="bg-white w-full border-gray-200 px-2 m:px-4 py-2.5 rounded  dark:bg-gray-800 top-0 fixed" >
         
         <div className="container flex flex-wrap justify-between items-center mx-auto">
            <p className="text-white text-lg">
                Pizza
            </p>
            
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a href="/" className="block py-2 pr-4 pl-3 text-yellow  rounded md:bg-transparent 
                  md:text-fuchsia-600 first-letter:md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/login" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
                  md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Sign In</a>
                </li>
                <li>
                  <a href="/register" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
                  md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Sign Up</a>
                </li>
                <li>
                  <a href="/Menu" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
                  md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Menu</a>
                </li>
                <li>
                  <a href="/Order" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
                  md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Order</a>
                </li>
                <li>
                  <a href="/logout" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
                  md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Logout</a>
                </li>
                {/* <li>
                  <a href="/logout" className="block py-2 pr-4 pl-3 text-gray-700 
                  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
                  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                </li> */}
                
              </ul>
            </div>
         </div>
        </nav>
               
          
        )
        
    
       
    export default Navbar


