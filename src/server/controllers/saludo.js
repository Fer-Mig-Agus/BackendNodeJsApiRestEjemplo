


const saludo=(req,res)=>{
    const {id}=req.params;
    try {

        if(!isNaN(id)) return res.status(200).json(`Holaaaa mundoo`);

        res.status(409).json(`Error en el tipo de dato`);
        

    } catch (error) {
        res.status(500).json({status:500,error:error.message});
    }
}

module.exports=saludo;