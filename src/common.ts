export const IS_PRODUCTION_MODE = process.env.NODE_ENV === 'production'

export const REPO_URL =
	'https://github.com/octoclairvoyant/octoclairvoyant-webapp'

export const SITE_TITLE = 'Octoclairvoyant'

export const BRIEF_DESCRIPTION = 'Compare GitHub changelogs in a single view'

export const FULL_DESCRIPTION =
	'Compare GitHub changelogs across multiple releases in a single view'

export const HIGH_PRIORITY_GROUP_TITLES = [
	'breaking changes',
	'features',
	'bug fixes',
]

export const LOW_PRIORITY_GROUP_TITLES = [
	'others',
	'credits',
	'thanks',
	'artifacts',
]
