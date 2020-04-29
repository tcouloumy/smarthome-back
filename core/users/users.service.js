const config    = require('../../config');
const jwt 		= require('jsonwebtoken');
const Role 		= require('../../helpers/roles');

const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];

async function authenticate({ username, password }) {
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = Object.freeze({
	authenticate
});