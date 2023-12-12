// import Providers from '@modules/providers';
import "@styles/globals.css";
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        data-new-gr-c-s-check="14.1115.0"
        data-gr-ext-installed
        cz-shortcut-listen="true"
      >
        {/* <Providers> */}
        <body>
          <main className="relative">{children}</main>
        </body>
        {/* </Providers> */}
      </body>
    </html>
  );
}
