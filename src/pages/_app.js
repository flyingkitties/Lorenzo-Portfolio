import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="backgroundOrange dark:backgroundDark">
      <Component {...pageProps} />
    </div>
  );
}
