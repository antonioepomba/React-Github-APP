
const urlUserRepo = (username,page) =>{
let endpoint = 'http://api.github.com/users/' + username + '/repos?per_page=' + page  + '&sort=created'

return endpoint

}

const urlUserData = (username) =>{
    let endpoint = 'http://api.github.com/users/' + username
    
    return endpoint
    
    }

module.exports = {
    urlUserRepo,
    urlUserData
}