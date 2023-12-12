const formNovoUsuario = document.getElementById('form')
const nomeUsuario = document.getElementById('name')
const senhaUsuario = document.getElementById('senha')
const emailUsuario = document.getElementById('email')

formNovoUsuario.addEventListener('submit' , (event) => {
      event.preventDefault()

      if(nomeUsuario.value.length < 4){ 
            nomeUsuario.classList.add('error')
      } else if(senhaUsuario.value === ''){
            senhaUsuario.classList.add('error')
      } else if(emailUsuario.value === ''){
            emailUsuario.classList.add('error')
      }
      else {
            nomeUsuario.classList.add('success')
            senhaUsuario.classList.add('success')
            emailUsuario.classList.add('success')
            const nomeValue = nomeUsuario.value
            const senhaValue = senhaUsuario.value
            const emailValue = emailUsuario.value
      
            const novoUsuario = {
                  name: nomeValue,
                  avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg",
                  password: senhaValue,
                  login: emailValue,
            }
      
            createNewUser(novoUsuario)
      }

      
} )

async function createNewUser(user){
      try {
            const response = await api.post('/users', user)
            
            if (response.status === 201) {
                  alert('Usuario cadastrado com sucesso!')
            
                  senhaUsuario.value = ""
                  nomeUsuario.value = ""
                  emailUsuario.value = ""
            
                  location.href = "index.html"
                }

      } catch (error) {
            console.log('Erro ao cadastrar usuario', error)
      }
}
