export type ProjectMetaData = {
	title: string
	description?: string
    href?: string | undefined
	imagePath?: string | undefined
	altText?: string | undefined
    customStyle?: string | undefined
}
declare global {
	interface Window {
	  dataLayer:any;
	}
  }