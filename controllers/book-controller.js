const Book=require('../models/book')
const getAllBooks = async (req, res) => {
    const getAllBook = await Book.find();
    if (getAllBook) {
        res.status(200).json(getAllBook)
    }
}
const getSingleBookById = async (req, res) => {
    
}
const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData)
        if (newlyCreatedBook) {
            res.status(201).json({
                success: true,
                message: "book added successfuly",
                data: newlyCreatedBook
            })
        }
    }
    catch (e) {
        if (e) throw e;
    }
};
const updateBook = async (req, res) => {
    const updatebpokformatdata=req.body
    const updateBook = req.params.id;
    const bookFound = await Book.findByIdAndUpdate(updateBook, updatebpokformatdata,
        {
            new: true
        }
    );

    res.status(201).json({
      success: true,
      message: "book added successfuly",
      data: bookFound,
    });

 };
const deleteBook = async (req, res) => { };

module.exports = {
    getAllBooks,getSingleBookById,addNewBook,updateBook,deleteBook
}