import { NoBillsAvailableContainer } from './styles'

export function NoBillsAvailable() {
  return (
    <NoBillsAvailableContainer>
      <h3>Opção indisponível para este contrato.</h3>
      <p>
        Contate nossa equipe de atendimento para saber mais.
        <br />
        11 4040-2595 <br />
        (WhatsApp) sac@pickmoney.com.br <br />
        Horário bancário: das 8h30 às 17h30, de segunda a sexta-feira.
      </p>
    </NoBillsAvailableContainer>
  )
}
