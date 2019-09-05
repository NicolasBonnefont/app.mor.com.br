import * as Yup from 'yup';
import importacao from '../models/importacao'


class ImportacaoController {

  async store(req, res) {

    const schema = Yup.object().shape({

      NumeroOP: Yup.number().integer().required(),
      CodOperacao: Yup.number().integer().required(),
      DescricaoOperacao: Yup.string(),
      CodProduto: Yup.string(),
      Referencia: Yup.string(),
      DescricaoProduto: Yup.string(),
      CodMaquina: Yup.number().integer()

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        erro: 'Campos Invalidos !'
      });

    }

    const {
      NumLancto,
      NumeroOP,
      CodOperacao,
      DescricaoOperacao,
      CodProduto
    } = await importacao.create(req.body);

    return res.json({
      Mensagem: 'Dados salvos'
    });
  }



  async get(req, res) {
    const tudo = await importacao.findAll(req.body);

    return res.json(tudo);
  }

}
export default new ImportacaoController();