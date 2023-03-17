import { pool } from "../config/db/db";
export const findAllUser = async(req, res)=>{
    try {
        const [rows] = await pool.query("CALL spFindAllUser();")
        res.json(rows);
    } catch (error) {
        console.error('Ha ocurrido un error');
    }
}
export const findUser = async(req, res)=>{
    const id = req.params.id;
    try {
        const [rows] = await pool.query(`CALL spFindUser(${id});`)
        res.json(rows);
    } catch (error) {
        console.error('Ha ocurrido un error');
    }
}
export const insertUser = async(req, res)=>{
    const name = req.body.NAME;

    try {
        const result = await pool.query(`CALL spInsertUser('${name}');`);
        res.json(result);
    
    } catch (error) {
        
        console.error('Ha ocurrido un error');
    }
}
export const deleteUser = async(req, res)=>{
   
}
export const updateUser = (req, res)=>{

}
