import { renderToString } from 'react-dom/server'

export const render = (reactNode: Parameters<typeof renderToString>[0]) =>
	renderToString(reactNode)
