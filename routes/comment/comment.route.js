const urlEncode = require('body-parser').urlencoded({ extended: true })
const CommentCtrl = require('../../controllers/comment/comment.controller') 
module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/comment/newcomment',urlEncode,Wraper(CommentCtrl.createComment))
    app.get('/comment/getcommentwithidhusky',Wraper(CommentCtrl.findCommentWithIdHusky))

}