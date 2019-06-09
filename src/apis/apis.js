const baseUrl='http://localhost:3000'
const apis={
    login:baseUrl+'/webapp/account/login',
    register:baseUrl+'/webapp/account/register',
    findByGameName:baseUrl+'/gameManage/games/findByGameName'
}
export default apis