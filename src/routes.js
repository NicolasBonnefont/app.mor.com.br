import { Router } from'express';

import ImportacaoController from './app/controllers/ImportacaoController';



const routes = new Router();



routes.post('/importacao', ImportacaoController.store);

routes.get('/importacao',ImportacaoController.get);






export default routes;