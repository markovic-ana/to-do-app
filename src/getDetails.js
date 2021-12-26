let details = JSON.parse(localStorage.getItem('todos'));

export function getDetails() {
  return details;
}

export function getDetail(id) {
  return details.find(
    detail => detail.id === id
  );
}

