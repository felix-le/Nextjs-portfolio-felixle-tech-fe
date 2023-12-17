// import Providers from '@modules/providers';
import "@styles/globals.css";
import AvaHeader from "@components/layout/ava-header";
import {ProductProvider} from "@lib/context/product-context";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/* <Providers> */}
      <body className=" bg-white w-screen h-screen">
        <div id="modal-root"></div>
        <ProductProvider>
          <main className="relative h-[85%]">
            <header>
              <div className="container pt-10">
                <AvaHeader />
              </div>
            </header>
            {/* End Header */}
            <div className="pt-10 h-[90%]">
              {/* body */}
              {children}
              {/* End body */}
            </div>
          </main>
          {/* </Providers> */}
        </ProductProvider>
      </body>
    </html>
  );
}
