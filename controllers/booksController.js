const models = require("../models");

const booksController = {
  async index(req, res, next) {
    const booksIndex = await models.Book.findAll();
    res.json({ books: booksIndex });
  },

  async show(req, res, next) {
    const { id } = req.params;
    const book = await models.Book.findByPk(id, {
      include: [
        {
          model: models.Author,
          as: "author",
        },
      ],
    });
    res.json({ book });
  },

  // async create(req, res) {
  //   if (!req.params.title) {
  //     return res.status(400).send({
  //       success: false,
  //       message: "title is required",
  //     });
  //   }

  //   const book = {
  //     id: db.length + 1,
  //     title: req.params.title,
  //   };
  //   await db.push(book);
  //   return res.status(200).send({
  //     success: true,
  //     message: "This book has been added",
  //     book,
  //   });
  // },
};

module.exports = booksController;
