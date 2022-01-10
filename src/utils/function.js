export const timeConvert = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return hours + "h " + minutes;
}

export const displayDate = (dateToDisplay) => {
  const event = new Date(dateToDisplay);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let date = event.toLocaleDateString("fr-FR", options);
  return date;
}