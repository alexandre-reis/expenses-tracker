import React, { useContext, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, List, Nome, Saldo, Title } from './styles';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'receita', valor: 1200 },
    { key: '2', tipo: 'despesa', valor: 200 },
    { key: '3', tipo: 'receita', valor: 40 },
    { key: '4', tipo: 'receita', valor: 89.62 },
    { key: '5', tipo: 'despesa', valor: 500 },
    { key: '6', tipo: 'despesa', valor: 310 },
  ]);

  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.nome}</Nome>

        <Saldo>R$ 123,00</Saldo>
      </Container>

      <Title>Histórico</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistoricoList data={item} />}
      />
    </Background>
  );
}
