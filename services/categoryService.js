const Category = require('../models//Category.model');

class CategoryService {
    async createCategory(data) {
        try {
            const category = new Category(data);
            await category.save();
            return category;
        } catch (error) {
            throw new Error('Error creating category: ' + error.message);
        }
    }

    async getCategoryById(id) {
        try {
            const category = await Category.findById(id);
            if (!category) {
                throw new Error('Category not found');
            }
            return category;
        } catch (error) {
            throw new Error('Error fetching category: ' + error.message);
        }
    }

    async getAllCategories() {
        try {
            const categories = await Category.find();
            return categories;
        } catch (error) {
            throw new Error('Error fetching categories: ' + error.message);
        }
    }

    async updateCategory(id, data) {
        try {
            const category = await Category.findByIdAndUpdate(id, data, { new: true });
            if (!category) {
                throw new Error('Category not found');
            }
            return category;
        } catch (error) {
            throw new Error('Error updating category: ' + error.message);
        }
    }

    async deleteCategory(id) {
        try {
            const category = await Category.findByIdAndDelete(id);
            if (!category) {
                throw new Error('Category not found');
            }
            return category;
        } catch (error) {
            throw new Error('Error deleting category: ' + error.message);
        }
    }
}

module.exports = new CategoryService();