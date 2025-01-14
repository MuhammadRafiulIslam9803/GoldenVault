// src/app/layout.jsx
import './globals.css';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

export default function RootLayout({ children }) {
  const isDashboard = typeof window !== 'undefined' && window.location.pathname.startsWith('/dashboard');

  return (
    <html lang="en">
      <body className="w-full">
        <div className="root-container w-full">
          {isDashboard ? (
            <div className="dashboard-layout w-full">
              <Sidebar />
              <main className="dashboard-main w-full">
                <Header />
                <div className="content">{children}</div>
                <Footer />
              </main>
            </div>
          ) : (
            <div className="default-layout w-full">
              <Header />
              <div className="content">{children}</div>
              <Footer />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
