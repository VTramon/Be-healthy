import styles from './index.module.scss'

const Tips = () => {
  return (
    <div className={styles.tips}>
      <h3>Some tips to maintain a healthy diet</h3>

      <ol className={styles.tipsList}>
        <li>
          <h4>Beba, no mínimo, 2 litros de água por dia</h4>
          <div>
            <img src="/list/water.webp" alt="bottles of water" />
          </div>
          <p>
            Precisamos de água pois nosso sangue é composto por 90% dela, e
            nosso corpo pode variar entre 50% e 75%, então cada vez que perdemos
            líquido (suor, etc), é preciso repor. Além do mais, a água faz uma
            limpeza em todo nosso organismo, hidrata nossa pele, e é por ela que
            vitaminas e minerais chegam nas células de todo nosso corpo.
          </p>
        </li>

        <li>
          <h4>Reduza os níveis de açúcar</h4>
          <div>
            <img src="/list/sugar.webp" alt="sugar" />
          </div>
          <p>
            O açúcar refinado é um composto que vem da cana-de-açúcar, porém,
            toda a parte boa dele foi retirada, sobrando apenas as calorias.
            Reduzir significa deixar de ingerir uma quantidade de calorias
            desnecessárias para nosso organismo. Procure também substituir a
            versão refinada pelo mascavo, por exemplo, que não passou pelo
            processo de refinamento, e ainda mantém os valores nutricionais.
          </p>
        </li>

        <li>
          <h4>Dê preferência para alimentos integrais</h4>
          <div>
            <img src="/list/wholeFoods.webp" alt="whole foods" />
          </div>
          <p>
            Da mesma forma acontece com a farinha branca, ou seja, após um
            processo de refinamento, todo o valor nutricional dela foi retirado,
            restando apenas o carboidrato. Prefira as opções integrais do
            macarrão, arroz, pão, etc, que ainda preservam os nutrientes
            naturais.
            <br /> E fique atento para não ser enganado, pois o único tipo de
            farinha na lista de ingredientes do produto deve ser “Farinha de
            Trigo Integral”. Se tiver outro tipo de farinha de trigo, o produto
            não é 100% integral.
          </p>
        </li>

        <li>
          <h4>Coma a salada primeiro</h4>
          <div>
            <img src="/list/salad.webp" alt="salad" />
          </div>
          <p>
            No almoço e no jantar sempre comece suas refeições com a salada,
            especialmente as saladas frias de folhas verdes, pois são ricas em
            nutrientes e vitaminas, e são excelentes fontes de fibras que
            conferirão saciedade, assim quando chegar no prato principal,
            evitará que você coma além da conta. E quando for escolher a salada,
            quanto mais colorida ela for, melhor!
          </p>
        </li>

        <li>
          <h4>Consuma frutas todos os dias</h4>
          <div>
            <img src="/list/fruits.webp" alt="fruits" />
          </div>
          <p>
            As frutas são excelentes alimentos, pois são ricas em fibras,
            vitaminas, minerais, e atuam sempre de forma benéfica em nosso
            organismo. Consuma, no mínimo, 3 porções por dia, e sempre que
            possível variando as frutas. Assim você poderá desfrutar de todos os
            benefícios que elas apresentam.
          </p>
        </li>

        <li>
          <h4>Faça de 4 a 6 refeições por dia</h4>
          <div>
            <img
              src="/list/meals.webp"
              alt="a clock denoting the meals of the day"
            />
          </div>
          <p>
            Assim, você evita ter picos de fome durante o dia, o que te faria
            ter vontade de comer mais do que o necessário na próxima refeição.
            Fazendo desta forma, seu organismo estará sempre bem nutrido, e você
            comerá somente o necessário. Lembre-se que, quanto mais refeições
            você fizer ao dia, menor será cada porção.
          </p>
        </li>
      </ol>
    </div>
  )
}

export { Tips }
