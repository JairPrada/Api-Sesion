
const User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../config/jwt.config');
const { sendEmail, getTemplate } = require('../config/mail.config');


const signup = async (req, res) => {
    try {
        //Obteneiendo los datos de la peticion
        const { name, email } = req.body;
        //Verificando que el usuario no se encuentra en la base de datos
        let user = await User.findOne({ email }) || null;
        if (user != null) {
            return res.json({
                success: false,
                msg: "Usuario ya Existente"
            })
        }
        // Generando codigo 
        const code = uuidv4();
        //Creando un nuevo usuario
        user = new User({ name, email, code })
        // Generar token
        const token = getToken({ email, code });
        //obtener un template
        const template = getTemplate(name, token);
        //Enviar email
        await sendEmail(email, `Te damos la bienvenida a ${process.env.NAME_APP}`, template);
        await user.save();
        return res.json({ success: true, msg: "se ha registrado correctamente" });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            msg: "Error al registrar usuario"
        })
    }
}
const confirm = async (req, res) => {
    try {
        //Obtener el token
        const { token } = req.params;
        //Verificar la data
        const data = await getTokenData(token);
        //Verificar existencia del usuario
        if (data === null) {
            return res.json({ success: false, msg: "Error al obtener data" });
        }
        const { email, code } = data.data;
        const user = await User.findOne({ email }) || null;
        if (user === null) {
            return res.json({ success: false, msg: "El usuario no existe" });
        }
        //Verificar el codigo
        if (code != user.code) {
            return res.json({ success: false, msg: "Error al verificar cuenta" });
        }
        //Actualizar usuario 
        user.state = 'VERIFIED';
        const result = await user.save();
        //Redireccionar a la confirmacion
        return res.json({ success: true, msg: "Verifico su cuenta correctamente" });
    } catch (error) {
        return res.json({ success: false, msg: "Error al verificar el usuario" })
    }
}
module.exports = { signup, confirm }