import { Header } from '@/components/Header'
import { Content, SobreNosContainer, Table } from './styles'
import Footer from '@/components/Footer'

export default function SobreNos() {
  return (
    <SobreNosContainer>
      <Header />
      <Content>
        <h1>Benefícios do Cliente</h1>
        <p>
          Você cliente da IntercamByUs é visto com muito carinho por todos nós,
          então oferecemos ofertas diferenciadas de acordo com sua qualificação
          como nosso consumidor. A tabela abaixo demonstra todas as
          classificações possíveis com base no número de pacotes de intercâmbio
          já fechados pelo cliente com nossa agência.
        </p>
        <p>
          - Sua classificação atual é: <strong>Premium</strong>.
        </p>
        <Table>
          <caption>Classificação das Vantagens</caption>
          <thead>
            <tr>
              <th>
                <strong>Standard</strong>
              </th>
              <th>Nenhum pacote de intercâmbio.</th>
              <th>0% de desconto no próximo pacote.</th>
            </tr>
            <tr>
              <th>
                <strong>Premium</strong>
              </th>
              <th>1 pacote de intercâmbio.</th>
              <th>5% de desconto no próximo pacote.</th>
            </tr>
            <tr>
              <th>
                <strong>Deluxe</strong>
              </th>
              <th>2 pacotes de intercâmbio.</th>
              <th>10% de desconto no próximo pacote.</th>
            </tr>
            <tr>
              <th>
                <strong>Elite</strong>
              </th>
              <th>3 ou mais pacotes de intercâmbio.</th>
              <th>15% de desconto no próximo pacote.</th>
            </tr>
          </thead>
        </Table>
      </Content>
      <Footer />
    </SobreNosContainer>
  )
}
