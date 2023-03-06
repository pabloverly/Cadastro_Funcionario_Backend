module.exports = {

    async select (req,res) {

        usuario = {
            "nome": "pablo"
        }
        return res.json(usuario);
    } 
}