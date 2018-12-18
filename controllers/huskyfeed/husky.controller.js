const Husky = require('../../models/huskyfeed/husky.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
exports.createHusky = (req) => {
    let husky = new Husky({
        idImg: req.body.idImg,
        name: req.body.name
    })
    return husky.save().then(rtl => {
        return rtl.msg = "success"
    })
}
exports.findHusky = () => {
    return Husky.find().limit(20).then(rtl=>{
        return ViewModel.ViewModelHusky.ListHusky(rtl)
    })
}
exports.getCountHusky = () =>{
    return Husky.find().count().exec().then(count=> {
        return ViewModel.ViewModelHusky.CountHuskyList(count)
    })
}
