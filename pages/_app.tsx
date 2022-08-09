import '../styles/globals.css'

function MyApp(
  { Component }: { Component: any },
  { pageProps }: { pageProps: any }
) {
  return <Component {...pageProps} />
}

export default MyApp
