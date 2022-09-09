export class Notify {
    static create(text, color) {
      Notif({
        text: text,
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'center',
        stopOnFocus: true,
        style: {
          background: color
        }
      }).shownNotif()
    }
  }