import Nav from '@components/Nav.js';
import Provider from '@components/Provider.js';
import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
          <Provider>
            <div className='main'>
              <div className='gradient' />
            </div>

            <main className='app'>
              <Nav />
              { children }
            </main>
          </Provider>  
        </body> 
    </html>
  );
}

export default RootLayout;