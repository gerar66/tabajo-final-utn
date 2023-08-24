var express = require('express');
var novedades = express.Router();
var novedadesModel = require('./../../models/NovedadesModel');

router.get ('/', async function (req, res, next){
var novedades = await novedadesModel.getNovedades();
res.render('admin/novedades',{
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades});
});

router.get('/agregar', (req, res, next)=> {
    res.render('admin/agregar', {
        layout:'admin/layout'
    });
});

router.post('/agregar', async (rreq, ress, next) => {
try{
    if(req.body.titulo !="" && req.body.subtitulo !="" &&
     req.body.cuepo !="") {
        await novedadesModel.insertNovedades(req.body);
        res.redirect('/admin/novedades')
    }else{
        res.render('/admin/agregarr',{
            layout: true, message: 'todos los campos son requeridos',
            error: true, message:'todos los campos son equeridos'
         })
        }
         } catch(error) {
         console.log(error)
         res.render('admin/agregar', {
            layout:'admin/layout',
            error: true, message:'no se cargo la novedad'
        });
    }
});
module.export = router;

