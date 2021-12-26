let details = JSON.parse(localStorage.getItem('todos'));

export function getDetails() {
  return details;
}

