const { response } = require('express');

const Client = require('../models/Client');



module.exports = {
    async clients(request, response){
        try{
            const clients = await Client.find();
            return response.status(200).json( {clients} )
        }catch (err){
            response.status(500).json( {error: err.message})
        }
    },
    async createClient(request, response){
        const { 
            login, 
            senha,
            nome,
            email,
            telefone,
            dataNasc
        } = request.body;

        if( !login || !senha || !nome){
            return response.status(400).json({ error: 'login ou senha inválidos'})
        }

        const client = new Client({
            login, 
            senha,
            nome,
            email,
            telefone,
            dataNasc
        })

        try{
            await client.save();
            return response.status(201).json({message: 'usuário adicionado'})
        }catch (error){
            response.status(500).json({error: error.message})
        }
    },
    async updateClient(request, response){
        try{
            const { senha, nome } = request.body;
            const { login } = request.params;
        if(!login && !senha && !nome){
            return response.status(400).json({error: 'informe os campos'});
        }

        await Client.findOneAndUpdate({ login }, { nome, senha })
        return response.status('200').json({message: 'usuário editado'})
        
        } catch (error) {
            response.status(500).json({error: error.message})
        }
        
    },
    async deleteClient(request, response){
        try{
            const { login } = request.params;
            await Client.remove({ login })
            return response.status(200).json({message : 'usuário deletado.'})
        }catch(error){
            response.status(500).json({error: error.message})
        }
    }
}