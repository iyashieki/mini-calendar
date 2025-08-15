const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const dateFormatter = new Intl.DateTimeFormat('default', { day: '2-digit' });
const dayFormatter = new Intl.DateTimeFormat('default', { weekday: 'long' });
const monthFormatter = new Intl.DateTimeFormat('default', { month: 'long' });
const yearFormatter = new Intl.DateTimeFormat('default', { year: 'numeric' });

function updateCalendar() {
    const today = new Date();
    dateElement.textContent = dateFormatter.format(today);
    dayElement.textContent = dayFormatter.format(today);
    monthElement.textContent = monthFormatter.format(today);
    yearElement.textContent = yearFormatter.format(today);
}

updateCalendar();
setInterval(updateCalendar, 60 * 60 * 1000);
