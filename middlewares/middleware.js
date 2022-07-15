const Client = require('../models/Client');

module.exports = {
    async validateLogin(request, response, next){
        try{
            const { login } = request.params;
            const clients = await Client.find({ login });

            if(!login){
                return response.status(400).json({error: 'campos inválidos'})
            }
            
            if(!clients){
                return response.status(404).json({error: 'login nao encontrado'})
            }
        
        }catch (error){
            return responde.status(500).json({error: error.message})
        }

        return next();
    }
}