import { parse } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

export default (d, format = null) => {
	if (d === undefined || d === null || !!d === false || d instanceof Array) {
		return null;
	}

	if (d instanceof Date) {
		return isNaN(d.valueOf()) ? null : d;
	}

	const date = format
		? parse(d, format, new Date())
		: new Date(Date.parse(d));

	return isNaN(date.getTime()) ? null : zonedTimeToUtc(date, "UTC");
};
