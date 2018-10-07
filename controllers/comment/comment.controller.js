const Comment = require('../../models/comment/comment.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
exports.createComment = (req) => {
    let comment = new Comment({
        idImg: req.body.idImg,
        name: req.body.name
    })
    return comment.save().then(rtl => {
        return rtl.msg = "success"
    })
}
exports.findCommentWithIdHusky = (req) => {
    return Comment.find({idHusky:req.query.idHusky}).then(rtl=>{
        return ViewModel.ViewModelComment.ListCommentWithIdHusky(rtl)
    })
}