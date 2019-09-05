import Sequelize, { Model } from 'sequelize';



class importacao extends Model {
  static init(sequelize) {
    super.init(
    {
      NumLancto: Sequelize.INTEGER,
      NumeroOP: Sequelize.STRING,
      CodOperacao: Sequelize.STRING,
      DescricaoOperacao: Sequelize.STRING,
      CodProduto: Sequelize.STRING,
      Referencia: Sequelize.STRING,
      DescricaoProduto: Sequelize.STRING,
      CodMaquina: Sequelize.INTEGER,
      DataPlanejadaInicio: Sequelize.DATE,
      HoraPlanejadaInicio: Sequelize.STRING,
      DataPlanejadaFim: Sequelize.DATE,
      HoraPlanejadaFim: Sequelize.DATE,
      Qtde: Sequelize.DOUBLE,
      QtdePecasCiclo: Sequelize.DOUBLE,
      TempoCicloPrevisto: Sequelize.INTEGER,
      TempoSetupPrevisto: Sequelize.INTEGER,
      Acao: Sequelize.INTEGER,
      Status: Sequelize.INTEGER,
      DataHoraLancto: Sequelize.STRING   

    },
    {
    freezeTableName: true,
    sequelize,
    
    }
    );
    importacao.removeAttribute('id');
    return this;
  }


}

export default importacao;