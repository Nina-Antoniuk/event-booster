import Notify from 'simple-notify'

let notify;

export function showNotification(status, title, text) {
  return notify = new Notify({
    status: status,
    title: title,
    text: text,
    effect: 'slide',
    type: 3
  })
}

export function closeNotification() {
  notify.close()
}