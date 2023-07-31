import '@/styles/globals.css';
import { MyContextProvider } from '@/context/MyContext'; // Import the MyContextProvider

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider> {/* Use MyContextProvider to wrap the application */}
      <Component {...pageProps} />
    </MyContextProvider>
  );
}
