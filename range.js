module.exports  = (req, res, next) => { 
    //Es necesario el header para que funcione el react-admin
    //Y de paso nos ayuda con la paginacion
    res.header('Content-Range', 'posts 0-20/20');
    next();
}