import { renderToString } from 'react-dom/server'

export const render = (reactNode) => renderToString(reactNode)
