export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    const result = await this.userModel.getAll();
    res.json(result);
  };

  getById = async (req, res) => {
    const result = await this.userModel.getById();
    const id = req.params.id;
    res.json({ id, ...result });
  };


  create = async (req, res) => {
    const result = await this.userModel.getById();
    const body = req.body;
    res.json({ body, ...result });
  };

  update = (req, res) => {
    res.json({
      mgs: 'PATCH from controller'
    });
  };

  delete = (req, res) => {
    res.json({
      mgs: 'DELETE from controller'
    });
  };
}

