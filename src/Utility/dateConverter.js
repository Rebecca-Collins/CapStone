
function dateConverter(time) {
    const date = new Date(time);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    return dateString + " " + timeString;

  }
  

export default dateConverter;