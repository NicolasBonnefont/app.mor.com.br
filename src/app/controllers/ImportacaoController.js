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
      CodMaquina: Yup.number().integer(),
      DataPlanejadaInicio: Yup.string(),
      HoraPlanejadaInicio:Yup.string(),
      DataPlanejadaFim: Yup.string(),
      HoraPlanejadaFim: Yup.string(),
      Qtde:Yup.number().integer(),
      QtdePecasCiclo:Yup.number().integer(),
      TempoCicloPrevist:Yup.number().integer(),
      TempoSetupPrevisto: Yup.number().integer(),
      Acao:Yup.number().integer(),
      Status: Yup.number().integer(),
      DataHoraLancto: Yup.string(),

    });

      // Validacao do campos com  .required()

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        erro: 'Campos Invalidos !'
      });

    }
    const pkExiste = await importacao.findOne({where: {NumeroOP:req.body.NumeroOP}});

    if (pkExiste) {
      return res.status(400).json({erro: 'NumeroOP ja existe'});
    }

    // Jogar no Return Apenas oque eu passar no const {}
    const {
      NumLancto,
      NumeroOP,
      CodOperacao,
      DescricaoOperacao,
      CodProduto
    } = await importacao.create(req.body);

    // Neste caso, estou retornando tudo

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