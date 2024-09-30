class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log('something wrong in crudService in create');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id); // Pass id to destroy
            return response;
        } catch (error) {
            console.log('something wrong in crudService in destroy');
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log('something wrong in crudService in get');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log('something wrong in crudService in getAll');
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            console.log('something wrong in crudService in update');
            throw error;
        }
    }
}

module.exports = CrudService;
