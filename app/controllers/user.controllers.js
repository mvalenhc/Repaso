import {pool} from "../config/database/db";

export const findAllUser = async(req,res)=>{
        try {
            const [rows] = await pool.query("CALL spFindAllUser();");
            res.json (rows);
        } catch (error) {
            console.error("error en la consulta");
            
        }
}
export const findUser =async(req,res)=>{
    
    const id = req.params.id ;
    try {
        const [rows] = await pool.query(`CALL spFindUser(${id});`);
        res.json (rows);
    } catch (error) {
        console.error("error en la consulta");
        
    }

}
export const insertUser =(req,res)=>{

}
export const deleteUser =(req,res)=>{

}
export const updateUser =(req,res)=>{

}