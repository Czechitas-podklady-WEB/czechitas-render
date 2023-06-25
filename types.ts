import type { ReactElement } from 'react'

export declare const render: (reactNode: ReactElement) => string // @TODO: user types of the renderToString

declare module './plugin' {
	export type czechitasRenderVitePlugin = () => void // @TODO: use types of the original plugin
}
