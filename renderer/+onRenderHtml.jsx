import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'

export async function onRenderHtml(pageContext) {
  const { Page } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <Page {...pageContext.pageProps} />
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${pageContext.documentProps?.title}</title>
        <meta name="description" content="${pageContext.documentProps?.description}" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}