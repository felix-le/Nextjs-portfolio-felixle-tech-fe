// import Providers from '@modules/providers';
import "@styles/globals.css";
import AvaHeader from "@components/layout/ava-header";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        data-new-gr-c-s-check="14.1115.0"
        data-gr-ext-installed
        cz-shortcut-listen="true"
      >
        {/* <Providers> */}
        <body className=" bg-white">
          <main className="relative">
            <div className="pt-10">
              <header>
                <div className="container">
                  <AvaHeader />
                </div>
              </header>
              {/* End Header */}
              <div className="body-content">
                <div className="container">
                  {/* body */}
                  {children}
                  {/* End body */}
                </div>
              </div>
            </div>
          </main>
        </body>
        {/* </Providers> */}
      </body>
    </html>
  );
}
