export class UserModel {
  static async getAll() {
    return {
      mgs: 'GetAll from userModel'
    };
  };

  static async getById() {
    return {
      mgs: 'GetById from userModel'
    };
  };


  static async create() {
    return {
      mgs: 'create from userModel'
    };
  };

  static async update() {
  };

  static async delete() {
  };
}