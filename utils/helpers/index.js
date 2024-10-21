import { format, isToday } from 'date-fns';

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  if (isToday(date)) {
    return "Today";
  } else {
    return format(timestamp, 'MMMM d, yyyy'); // e.g., "March 26, 2024"
  }
}


export { formatTimestamp };