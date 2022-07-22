const { response } = require('express');

const Client = require('../models/Client');
const Pet = require('../models/Pet');
const Cuidado = require('../models/Cuidado');
const Vacina = require('../models/Vacina');

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
            return response.status(200).json({ error: 'login ou senha inválidos' });
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
               return response.status(200).json({ message: 'login já existente' });
            }
            await client.save();
            return response.status(201).json({ message: 'usuário adicionado', success: true });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
    async updateClient(request, response) {
        try {
            const { senha, nome } = request.body;
            const { login } = request.params;
        if(!login || !senha || !nome) {
            return response.status(400).json({ error: 'informe corretamente os campos' });
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
                return response.status(200).json({ message : 'login feito com sucesso.', success: true , nome: loginClient.nome});
            }
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },

    // pets
    async pets(request, response) {
        try {
            const { login } = request.params;
            const pets = await Pet.find({ login });
            return response.status(200).json({ pets });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    },
    async createPet(request, response) {
        const { 
            nome,
            idade,
            raca,
            imagem,
            tipo
        } = request.body;
        const { login } = request.params;

        if (!nome || !idade || !raca || !imagem || !tipo) {
            return response.status(200).json({ message: 'informe todos os campos corretamente.' });
        }

        const findLastPet = await Pet.findOne().sort({ field: 'asc', _id: -1 }).exec();
        let getNextSeq = 0;
        if (findLastPet) {
            getNextSeq = findLastPet.idPet + 1;
        }

        const findVacinas = await Vacina.findOne({ tipo }).exec();
        const checkList = [];
        for (const vacina of findVacinas.vacinas) {
            checkList.push({ checks: vacina.vacina })
        }

        const pet = new Pet({
            login,
            nome,
            idade,
            raca,
            imagem,
            tipo,
            idPet: getNextSeq,
            checkList
        });

        try {
            await pet.save();
            return response.status(201).json({ message: 'pet adicionado', success: true });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
    async updatePet(request, response) {
        try {
            const { nome, idade, raca, imagem, antigoNome, tipo } = request.body;
            const { login } = request.params;
        if(!nome || !idade || !raca || !imagem || !tipo ) {
            return response.status(200).json({ message: 'informe corretamente os campos' });
        }
        await Pet.findOneAndUpdate({ login, nome:antigoNome }, { nome, idade, raca, imagem, tipo });
        return response.status(200).json({ message: 'agenda pet editada', success:true });
        
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
        
    },
    async deletePet(request, response) {
        try {
            const { login, nome } = request.params;
            await Pet.deleteOne({ login, nome });
            return response.status(200).json({ message : 'agenda pet deletada.', success:true });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },

    //cuidado
    async cuidados(request, response) {
        try {
            const { tipo } = request.params;
            const cuidados = await Cuidado.findOne({ tipo }).exec();
            return response.status(200).json({ cuidados});
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    },
    
    //list
    async checklistPet(request, response) {
        try {
            const { nome, tipo, check, login } = request.body;
        if(!nome || !tipo || !check || !login) {
            return response.status(200).json({ error: 'informe corretamente os campos' });
        }
        const allChecksForPet = await Pet.findOne({ login, nome }).exec();
        const checkList = allChecksForPet.checkList;
        checkList.push({checks: check});
        await Pet.findOneAndUpdate({ login, nome }, { checkList: checkList });
        return response.status(200).json({ message: 'novo check adicionado', checks:checkList });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
    async deleteChecklistPet(request, response) {
        try {
            const { nome, tipo, check, login } = request.body;
        if(!nome || !tipo || !check || !login) {
            return response.status(200).json({ error: 'informe corretamente os campos' });
        }
        const allChecksForPet = await Pet.findOne({ login, nome }).exec();
        const checkList = allChecksForPet.checkList.filter(ck => ck.checks !== check);
        await Pet.findOneAndUpdate({ login, nome }, { checkList: checkList });
        return response.status(200).json({ message: 'check finalizado', checks: checkList });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
    async coleiraPet(request, response) {
        try {
            const { latitude, longitude, id } = request.body;
            if(!latitude || !longitude || !id) {
                return response.status(400).json({ error: 'informe corretamente os campos' });
            }
            await Pet.findOneAndUpdate({ idPet: id }, { latitude, longitude });
            return response.status(200).json({ message : 'localização Enviada', success:true });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}