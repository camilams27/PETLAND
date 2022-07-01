const { response } = require('express');

const Client = require('../models/Client');

module.exports = {
    async clients(request, response) {
        try {
            const clients = await Client.find();
            return response.status(200).json({ clients });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    },
    async createClient(request, response) {
        const { 
            login, 
            senha,
            nome,
            email,
            telefone,
            dataNasc
        } = request.body;

        if (!login || !senha || !nome) {
            return response.status(400).json({ error: 'login ou senha inválidos' });
        }

        const client = new Client({
            login, 
            senha,
            nome,
            email,
            telefone,
            dataNasc
        });

        try {
            const loginClient = await Client.findOne({ login: login }).exec();
            if (loginClient) {
               return response.status(400).json({ message: 'login já existente' });
            }
            await client.save();
            return response.status(201).json({ message: 'usuário adicionado' });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
    async updateClient(request, response) {
        try {
            const { senha, nome } = request.body;
            const { login } = request.params;
        if(!login && !senha && !nome) {
            return response.status(400).json({ error: 'informe os campos' });
        }

        await Client.findOneAndUpdate({ login }, { nome, senha });
        return response.status('200').json({ message: 'usuário editado' });
        
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
        
    },
    async deleteClient(request, response) {
        try {
            const { login } = request.params;
            await Client.deleteOne({ login });
            return response.status(200).json({ message : 'usuário deletado.' });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
    async loginClient(request, response) {
        try {
            const { 
                login, 
                senha
            } = request.body;

            if (!login || !senha) {
                return response.status(200).json({ message: 'informe os campos corretamente.' });
            }

            const hasLogin = await Client.findOne({ login: login }).exec();
            if (!hasLogin) {
               return response.status(200).json({ message: 'login não cadastrado.' });
            }

            const loginClient = await Client.findOne({ login: login, senha: senha }).exec();
            if (!loginClient) {
                return response.status(200).json({ message: 'login ou senha inválidos' });
            } else {
                return response.status(200).json({ message : 'login feito com sucesso.', success: true });
            }
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}