import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";

type RouteParams = {
    group: string;
}
export function Players() {

    const [team, setTeam] = useState('Time A');
    const [newPlayerName, setNewPlayerName] = useState('');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams
    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adidionar.');
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }
        try {
            await playerAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur();

            setNewPlayerName('')
            fetchPlayersByTeam()
        } catch (error){
            if(error instanceof AppError){
                Alert.alert('Nova pessoa', error.message);
            }else {
                console.log(error);
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar');
            }
        }
    }

  async function fetchPlayersByTeam() {
    try {
        const playersByTeam = await playerGetByGroupAndTeam(group, team);
        setPlayers(playersByTeam)

    }catch (error){
        console.log(error)
        Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas do time selecionado');
    }
    
    
  }   

  async function handlePlayerRemove(playerName: string) {
    try {
        await playerRemoveByGroup(playerName, group);
        fetchPlayersByTeam();
        console.log('Remover acionado');
    } catch (error) {
        console.log(error);
        Alert.alert('Remover pessoa', 'Não foi possivel remover essa pessoa.')
    }
    
  }

useEffect(()=>{
    fetchPlayersByTeam();
}, [team]);

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <ButtonIcon icon="add" onPress={handleAddPlayer} />

            </Form>
            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handlePlayerRemove(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />
            <Button
                title="Remover turma"
                type="SECUNDARY"
            />
        </Container>
    )
}