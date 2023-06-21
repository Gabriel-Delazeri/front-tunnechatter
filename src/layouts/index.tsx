import { ReactNode } from 'react';
import Navbar from "../components/Navbar"

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout = ({ children }: LayoutProps) => {
    return (
      <div className='mb-20'>
        <Navbar />
        {children}
      </div>
    );
  };
  
  export default Layout;