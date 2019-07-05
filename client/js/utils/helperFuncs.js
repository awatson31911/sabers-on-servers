export const dateFormatter = (date) => {
  const dateParts = date.split('-');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const day = dateParts[1];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = dateParts[0];
  
  let d = new Date(date);
  
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${day} ${year}`;
};