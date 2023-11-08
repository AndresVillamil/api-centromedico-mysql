import { getConnection } from "./../database/database"

const getPacientes =async(req,res) => {
    //res.json('Obtiene pacientes')
    try {
        const connection=await getConnection();
        if (connection){
            console.log("Conexion exitosa")
            const result=await connection.query("SELECT numero_cedula,nombre,apellido,fecha_nacimiento FROM pacientes")
            console.log(result);
            res.json(result);
        }else{
            console.log("Error de conexion")
        } 
    
    }catch (error) {
        res.status(500)
        res.send(error.message);
        console.log("Error de conexion, error: " + error.message)
    };    
};

const addPacientes = async (req,res) => {
    try {
        //console.log(req.body);
        const {numero_cedula, nombre, apellido,fecha_nacimiento} = req.body; //Definir el body
        /*console.log(numero_cedula);
        console.log(nombre + " " + apellido);
        console.log(fecha_nacimiento);*/
       if (numero_cedula  === undefined || nombre  === undefined || apellido  === undefined || fecha_nacimiento === undefined) {
            res.status(400).json({message: 'Bad Reques, Por favor diligencie todos los campos'})
        }  
            const paciente ={ numero_cedula, nombre, apellido, fecha_nacimiento };
            const connection=await getConnection();
            await connection.query("INSERT INTO pacientes SET ?", paciente)
            res.json({message: "Paciente Añadido correctamente!!"})
    }catch (error) {
        res.status(500)
        res.send(error.message);
        //console.log("Error de conexion 2, error: " + error.message)
    }; 
};

const getPaciente =async(req,res) => {
    //res.json('Obtiene pacientes')
    try {
        console.log(req.params);
        const { numero_cedula} = req.params
        const connection=await getConnection();
        if (connection){
            console.log("Conexion exitosa")
            const result=await connection.query("SELECT numero_cedula,nombre,apellido,fecha_nacimiento FROM pacientes WHERE numero_cedula = ?", numero_cedula)
            console.log(result);
            res.json(result);
        }else{
            console.log("Error de conexion")
        } 
    
    }catch (error) {
        res.status(500)
        res.send(error.message);
        console.log("Error de conexion, error: " + error.message)
    };    
};

const updatePaciente =async(req,res) => {
    //res.json('Obtiene pacientes')
    try {
        const { numero_cedula} = req.params
        const {nombre, apellido,fecha_nacimiento} = req.body; //Definir el body
    
       if (numero_cedula  === undefined || nombre  === undefined || apellido  === undefined || fecha_nacimiento === undefined) {
            res.status(400).json({message: 'Bad Reques, Por favor diligencie todos los campos'})
        }  
        const paciente ={ numero_cedula, nombre, apellido, fecha_nacimiento };      
        const connection=await getConnection();
        if (connection){
            console.log("Conexion exitosa")
            const result=await connection.query("UPDATE pacientes SET ? WHERE numero_cedula = ?", [paciente, numero_cedula])
            console.log(result);
            res.json(result);
        }else{
            console.log("Error de conexion")
        } 
    
    }catch (error) {
        res.status(500)
        res.send(error.message);
        console.log("Error de conexion, error: " + error.message)
    };    
};

const deletePaciente =async(req,res) => {
    //res.json('Obtiene pacientes')
    try {
        console.log(req.params);
        const { numero_cedula} = req.params
        const connection=await getConnection();
        if (connection){
            console.log("Conexion exitosa")
            const result=await connection.query("DELETE FROM pacientes WHERE numero_cedula = ?", numero_cedula)
            console.log(result);
            res.json(result);
        }else{
            console.log("Error de conexion")
        } 
    
    }catch (error) {
        res.status(500)
        res.send(error.message);
        console.log("Error de conexion, error: " + error.message)
    };    
};



export const methods = {
    getPacientes,
    getPaciente,
    addPacientes,
    updatePaciente,
    deletePaciente
}