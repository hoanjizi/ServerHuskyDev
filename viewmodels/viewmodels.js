class ViewModelHusky {
    static ListHusky(huskys) {
        let arrayHusky = []
        huskys.forEach(e => {
            arrayHusky.push({ id: e._id, idImg: e.idImg, name: e.name, like: e.like})
        });
        return arrayHusky
    }
    static CountHuskyList(num) {
        return {count : num}
    }
}
class ViewModelComment{
    static ListCommentWithIdHusky(comment){
        let array = []
        comment.forEach(e => {
            array.push({ id: e._id, idHusky: e.idHusky, nameUser: e.nameUser, contentComment: e.contentComment,likeComment : e.likeComment})
        });
        return array
    }
}
module.exports = {
    ViewModelHusky,ViewModelComment
}