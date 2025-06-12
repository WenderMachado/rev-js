export default function (ev){
  const btn = ev.currentTarget
  if(btn.innerText === "Copy"){
    btn.innerText = "Copied!"
    btn.classList.add('success')
    navigator.clipboard.writeText(document.getElementById("result").value)
  }else{
    button.innerText= 'Copy'
    button.classList.remove('success')
  }
}