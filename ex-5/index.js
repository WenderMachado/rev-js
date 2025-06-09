let menu = ''


do {
  menu = prompt(`escolha uma das opçoes
    1-lorem
    2-lorem
    3-lorem
    4-lorem
    5-encerar`)

  switch (menu) {
    case "1":
      alert(`opcção 1 escolhida`)
      break

    case "2":
      alert(`opcção 2 escolhida`)
      break
    case "3":
      alert(`opcção 3 escolhida`)
      break
    case "4":
      alert(`opcção 4 escolhida`)
      break
  case "5":
      alert(`encerando`)
      break
    default:
      break;
  }



} while (menu !== '5')