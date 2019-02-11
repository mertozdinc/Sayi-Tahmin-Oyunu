let randomnumber = Math.floor(Math.random() * 10) + 1;
let tryingnumber = 0;
let gamefinish = false;

document.body.addEventListener('click',reaction)

function reaction(e) {
  if (gamefinish != true) {
    if (e.target.id == "maindiv") {
      let targetnumber = Number(e.target.childNodes[1].textContent)
      if (randomnumber == targetnumber) {
        document.body.style.backgroundColor = "blue"
        document.getElementById('result').textContent = "Doğru Bildin!"
          document.getElementById('again').textContent = "Tekrar Başla"
        tryingnumber += 1
        gamefinish = true
      }else {
        document.body.style.backgroundColor = "red"
        tryingnumber += 1
        document.getElementById('wrong').textContent = `${tryingnumber} kez denedin`
      }
    }else if (e.target.id == "mainnumber") {
      let targetnumber = Number(e.target.textContent)
      if (randomnumber == targetnumber) {
        document.body.style.backgroundColor = "blue"
        document.getElementById('result').textContent = "Doğru Bildin!"
        document.getElementById('again').textContent = "Tekrar Başla"
        tryingnumber += 1
        gamefinish = true
      }else {
        document.body.style.backgroundColor = "red"
        tryingnumber += 1
        document.getElementById('wrong').textContent = `${tryingnumber} kez denedin`
      }
    }
  }

}

function startagain() {
 randomnumber = Math.floor(Math.random() * 10) + 1;
 tryingnumber = 0;
 gamefinish = false;
 document.getElementById('wrong').textContent = ""
 document.getElementById('result').textContent = ""
 document.getElementById('again').textContent = ""
 document.body.style.backgroundColor = "white"



}

// ``
