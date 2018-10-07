const Comment = require('../../models/comment/comment.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
exports.createComment = (req) => {
    let comment = new Comment({
        idHusky: req.body.idHusky,
        nameUser: req.body.nameUser,
        contentComment: req.body.contentComment,
        likeComment: req.body.likeComment,
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