export const API_ENDPOINT = 'https://api.webstatus.dev/v1/features/';

export const BASELINE_DEFS = {
	limited: {
		title: 'Limited availability',
		defaultDescription:
			'This feature is not Baseline because it does not work in some of the most widely-used browsers.',
	},
	newly: {
		title: '',
		defaultDescription:
			'This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.',
	},
	widely: {
		title: 'Widely available',
		defaultDescription:
			'This feature is well established and works across many devices and browser versions.',
	},
	no_data: {
		title: 'Unknown availability',
		defaultDescription:
			'We currently don\'t have browser support information about this feature.',
	},
};
