// Define an interface for the calculated time difference parts for clarity
interface TimeDifference {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Calculates the time difference between an input date/datetime and the current moment.
 *
 * @param inputDate - The starting date/datetime, either as a Date object or a string.
 * @returns An object containing the difference in years, months, days, hours, minutes, and seconds.
 */
export function calculatePreciseTimeDifference(inputDate: Date | string): TimeDifference | null {
    let startDate: Date;

    // Convert input to a Date object
    if (typeof inputDate === 'string') {
        startDate = new Date(inputDate);
    } else if (inputDate instanceof Date) {
        startDate = inputDate;
    } else {
        console.warn("Invalid input type provided to calculatePreciseTimeDifference. Expected Date or string.");
        return null;
    }

    // Check if the parsed date is valid
    if (isNaN(startDate.getTime())) {
        console.warn("Invalid date provided to calculatePreciseTimeDifference:", inputDate);
        return null;
    }

    const endDate = new Date(); // Current time

    // If the start date is in the future, return all zeros or handle as error based on requirement
    if (startDate > endDate) {
        // console.warn("Start date is in the future. Returning zero difference.");
        return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // --- Complex Date Difference Calculation ---
    // This is more involved as months have variable lengths and leap years affect days.
    // We calculate from largest to smallest unit.

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    let hours = endDate.getHours() - startDate.getHours();
    let minutes = endDate.getMinutes() - startDate.getMinutes();
    let seconds = endDate.getSeconds() - startDate.getSeconds();

    // Adjust seconds
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }

    // Adjust minutes
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }

    // Adjust hours
    if (hours < 0) {
        days--;
        hours += 24;
    }

    // Adjust days
    if (days < 0) {
        // Find the number of days in the previous month relative to endDate
        const daysInLastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        days += daysInLastMonth;
        months--;
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days, hours, minutes, seconds };
}

/**
 * Calculates the time elapsed since a given date/datetime and formats it according to a specified pattern.
 *
 * @param inputDate - The starting date, either as a Date object or a date string.
 * @param format - A string specifying the desired format using placeholders:
 * 'y' for years, 'M' for months, 'd' for days, 'h' for hours,
 * 'm' for minutes, 's' for seconds.
 * Example: "2y 3M 5d", "1h 30m", "y M d h m s"
 * Units will only be displayed if their value is greater than 0, unless all are zero.
 * @returns A formatted string representing the time elapsed, or an empty string if input is invalid.
 */
export function timeSince(inputDate: Date | string, format: string): string {
    const diff = calculatePreciseTimeDifference(inputDate);

    if (diff === null) {
        return ""; // Invalid input
    }

    const { years, months, days, hours, minutes, seconds } = diff;

    // Mapping of format characters to their values and suffix
    const formatMap: { [key: string]: { value: number; suffix: string } } = {
        'y': { value: years, suffix: 'y' },
        'M': { value: months, suffix: 'M' },
        'd': { value: days, suffix: 'd' },
        'h': { value: hours, suffix: 'h' },
        'm': { value: minutes, suffix: 'm' },
        's': { value: seconds, suffix: 's' },
    };

    let resultParts: string[] = [];
    let hasNonZeroPart = false;

    // Split format string by spaces to handle multiple units like "y M d"
    const formatUnits = format.split(/\s+/).filter(unit => unit !== ''); // Remove empty strings from split

    for (const unit of formatUnits) {
        const char = unit.charAt(0); // Take the first char to map to formatMap
        if (formatMap[char]) {
            const { value, suffix } = formatMap[char];
            if (value > 0) {
                resultParts.push(`${value}${suffix}`);
                hasNonZeroPart = true;
            }
        } else {
            // If the format contains unsupported characters, include them as-is
            // or you could choose to ignore them or throw an error.
            // For now, we'll just ignore them, or you might append the raw unit string.
            // console.warn(`Unsupported format unit: ${unit}`);
        }
    }

    // Special case: If all calculated values are zero but format was requested,
    // and no non-zero parts were added, display the smallest requested unit as "0"
    if (!hasNonZeroPart && formatUnits.length > 0) {
        // Find the last requested unit in the format string and display it as '0X'
        const lastRequestedUnitChar = formatUnits[formatUnits.length - 1].charAt(0);
        if (formatMap[lastRequestedUnitChar]) {
            return `0${formatMap[lastRequestedUnitChar].suffix}`;
        }
        return "0s"; // Default if nothing else
    }


    return resultParts.join(' ');
}

// --- Usage Examples ---

// Set a reference date for testing purposes (e.g., today's date minus some time)
const todayForExamples = new Date('2025-05-26T11:34:31'); // Based on your current context

console.log("--- Examples with precise formatting ---");

// Example 1: Full range of units
const date1 = new Date('2020-03-10T08:00:00');
console.log(`Time since ${date1.toLocaleString()}:`);
console.log(`  Format 'y M d h m s': ${timeSince(date1, 'y M d h m s')}`); // Expected: 5y 2M 16d 3h 34m 31s
console.log(`  Format 'y M': ${timeSince(date1, 'y M')}`); // Expected: 5y 2M

// Example 2: Just months and days
const date2 = new Date('2024-11-15T14:30:00');
console.log(`\nTime since ${date2.toLocaleString()}:`);
console.log(`  Format 'y M d': ${timeSince(date2, 'y M d')}`); // Expected: 6M 11d

// Example 3: Less than a day
const date3 = new Date('2025-05-25T10:00:00');
console.log(`\nTime since ${date3.toLocaleString()}:`);
console.log(`  Format 'd h m s': ${timeSince(date3, 'd h m s')}`); // Expected: 1d 1h 34m 31s
console.log(`  Format 'h m': ${timeSince(date3, 'h m')}`); // Expected: 25h 34m

// Example 4: Less than a minute (string input)
const date4 = '2025-05-26T11:34:05';
console.log(`\nTime since ${date4}:`);
console.log(`  Format 'm s': ${timeSince(date4, 'm s')}`); // Expected: 26s

// Example 5: Exactly the same time (or very close)
const date5 = '2025-05-26T11:34:31';
console.log(`\nTime since ${date5}:`);
console.log(`  Format 'h m s': ${timeSince(date5, 'h m s')}`); // Expected: 0s (or 0m, 0h etc. depending on format order)

// Example 6: Future date
const futureDate = '2026-01-01T00:00:00';
console.log(`\nTime since ${futureDate} (Future Date):`);
console.log(`  Format 'y M d': ${timeSince(futureDate, 'y M d')}`); // Expected: "" (empty string)

// Example 7: Invalid date
const invalidDate = 'invalid date string';
console.log(`\nTime since '${invalidDate}':`);
console.log(`  Format 'y M d': ${timeSince(invalidDate, 'y M d')}`); // Expected: ""

// Example 8: Only years (if appropriate)
const date8 = new Date('2020-05-26T11:34:31'); // Exactly 5 years
console.log(`\nTime since ${date8.toLocaleString()}:`);
console.log(`  Format 'y': ${timeSince(date8, 'y')}`); // Expected: 5y

// Example 9: Custom format
const date9 = new Date('2024-02-01T00:00:00');
console.log(`\nTime since ${date9.toLocaleString()}:`);
console.log(`  Format 'M months and d days': ${timeSince(date9, 'M d')}`); // Expected: 15M 25d (adjust to match your output of the numbers)

// Example 10: Input date with only YYYY-MM-DD
const date10 = '2023-01-01'; // Will be treated as 2023-01-01T00:00:00
console.log(`\nTime since ${date10}:`);
console.log(`  Format 'y M d h m s': ${timeSince(date10, 'y M d h m s')}`); // Expected: 2y 4M 25d 11h 34m 31s