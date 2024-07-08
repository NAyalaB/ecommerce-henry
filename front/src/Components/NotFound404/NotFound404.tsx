import styles from "./NotFound404.module.css"
import page404 from "../../../public/page404.svg"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound404: React.FC = () => { 
  return (

    <div  className={styles.image}>
      <Image
      src={page404.src}
      alt="Pagina 404"
   /*   priority={true}   */
      width={500}
      height={500}
      />
   
   <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
   <Link href="/" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
   Volver a la página principal
      </Link>
  </button>

     
          
      

  
     
    </div>
    
  );
};

export default NotFound404; 