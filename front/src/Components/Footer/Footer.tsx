import styles from "./Footer.module.css"
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            

<footer className="bg-whiteSmoke rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image  
                src="/assets/logo.png"
                alt="Logo"
                width={30}
                height={50}
                className="h-8"
               />
               
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Nuevo</span>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ayer</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Noelia Ayala</a>. All Rights Reserved.</span>
        <a  href="https://github.com/NAyalaB" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className=" w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only ">GitHub account</span>
              </a>
            
              <a href="https://www.linkedin.com/in/noelia-ayala-ab77803a/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M18.94 18.94h-3.8v-5.53c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.14 1.45-2.14 2.94v5.61h-3.8V6.71h3.64v1.66h.05c.51-0.96 1.76-1.97 3.63-1.97 3.89 0 4.61 2.56 4.61 5.89v6.75h.01zM2.5 5.35a2.19 2.19 0 110-4.37 2.19 2.19 0 010 4.37zm1.89 13.59H.6V6.71h3.8v12.23z" />
  </svg>

  <span className="sr-only">LinkedIn page</span>
</a>

        </div>
       
    </div>
</footer>


        </div>
    )
};

export default Footer;
