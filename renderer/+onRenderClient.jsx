import ReactDOM from 'react-dom/client'
import { getPage } from 'vike/client'

let root
async function render(pageContext) {
  const { Page } = pageContext
  const page = <Page {...pageContext.pageProps} />
  const container = document.getElementById('root')
  if (!root) {
    root = ReactDOM.createRoot(container)
  }
  root.render(page)
}

export { render }