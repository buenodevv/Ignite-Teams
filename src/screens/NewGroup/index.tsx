import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'


export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title='Nova Turma'
                    subtitle='Crie a turma para adicionar as pessoas'
                />
                <Input
                    placeholder='Nome da turma'
                />
                <Button
                    style={{ marginTop: 20 }}
                    title='Criar'
                />
            </Content>
        </Container>
    )


}