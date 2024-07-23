export type ProjectMetaData = {
	title: string
	description?: string
    href?: string | undefined
	imagePath?: string | undefined
	altText?: string | undefined
    customStyle?: string | undefined
}

export type ExperienceMetaData = {
	title: string
	companyName: string,
	startDate: string
	endDate: string
	image: {
		path: string
		altText: string
	}
	bulletPoints: string[]
}

declare global {
	interface Window {
	  dataLayer:any;
	}
  }