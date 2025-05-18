import { safeGet } from "@astro-community/astro-embed-utils";
import { API_ENDPOINT, BASELINE_DEFS } from "./constants";
import type { Feature, StatusLevel } from "./types";

/**
 * Returns feature's `low_date` as mm-yyyy string or empty string if `low_date` is not present.
 */
export function getBaselineDate(feature: { baseline: { low_date?: string } }): string {
	return feature.baseline.low_date
		? new Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: 'long',
		}).format(new Date(feature.baseline.low_date))
		: '';
}

/**
 * Returns Baseline's description.
 */
export function getDescriptionDate(baseline: StatusLevel, date: string): string {
	if (baseline === 'newly' && date) {
		return `Since ${date} this feature works across the latest
			devices and browser versions. This feature might not work in older
			devices or browsers.`;
	} else if (baseline === 'widely' && date) {
		return `This feature is well established and works across many
			devices and browser versions. It\'s been available across browsers
			since ${date}`;
	}
	return BASELINE_DEFS[baseline].defaultDescription;
}

export async function getFeature(id: string) {
  const featureData = await safeGet(API_ENDPOINT + id);
  return (featureData?.baseline
    ? featureData
    : {
      baseline: {
        status: 'no_data',
      },
      name: id || 'Unknown feature',
    }) as Feature;
}
