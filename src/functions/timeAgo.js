export function timeAgo(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);
  
    const secondsAgo = Math.floor((currentDate - targetDate) / 1000);
  
    if (secondsAgo < 60) {
      return secondsAgo === 1 ? '1 second ago' : `${secondsAgo} seconds ago`;
    }
  
    const minutesAgo = Math.floor(secondsAgo / 60);
  
    if (minutesAgo < 60) {
      return minutesAgo === 1 ? '1 minute ago' : `${minutesAgo} minutes ago`;
    }
  
    const hoursAgo = Math.floor(minutesAgo / 60);
  
    if (hoursAgo < 24) {
      return hoursAgo === 1 ? '1 hour ago' : `${hoursAgo} hours ago`;
    }
  
    const daysAgo = Math.floor(hoursAgo / 24);
  
    if (daysAgo < 30) {
      return daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`;
    }
  
    const monthsAgo = Math.floor(daysAgo / 30);
  
    if (monthsAgo < 12) {
      return monthsAgo === 1 ? '1 month ago' : `${monthsAgo} months ago`;
    }
  
    const yearsAgo = Math.floor(monthsAgo / 12);
  
    return yearsAgo === 1 ? '1 year ago' : `${yearsAgo} years ago`;
  }
