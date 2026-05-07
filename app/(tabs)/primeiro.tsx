import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// IMPORTANDO O JSON ÚNICO (que tem os 3 anos)
import listaGeral from "../../constants/disciplinas.json";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const [aberto, setAberto] = useState<string | null>(null);

  // FILTRANDO: Criamos uma nova lista apenas com as disciplinas do 1º ano
  const disciplinasPrimeiroAno = listaGeral.filter((item) => item.ano === 1);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.telaCheia}>
          <Text style={styles.titulo}>Desenvolvimento de Sistemas</Text>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>1º MDS</Text>
            <Text style={styles.anoDescricao}>
              Auxiliar Técnico em Desenvolvimento de Sistemas
            </Text>
          </View>
        </View>

        <View style={styles.listaContainer}>
          {/* MAPEANDO APENAS A LISTA FILTRADA */}
          {disciplinasPrimeiroAno.map((item) => (
            <View key={item.id} style={styles.acordeonItem}>
              <Pressable
                style={[
                  styles.acordeonHeader,
                  aberto === item.id && styles.headerAtivo,
                ]}
                onPress={() => setAberto(aberto === item.id ? null : item.id)}
              >
                <Text style={styles.textoDisciplina}>{item.nome}</Text>
                <Text style={styles.icone}>
                  {aberto === item.id ? "▲" : "▼"}
                </Text>
              </Pressable>

              {aberto === item.id && (
                <View style={styles.acordeonContent}>
                  <Text style={styles.detalhe}>
                    Carga Horária:{" "}
                    <Text style={styles.valor}>{item.carga}</Text>
                  </Text>
                  <Text style={styles.detalhe}>
                    Tipo:{" "}
                    <Text
                      style={
                        item.tipo === "Técnico"
                          ? styles.badgeTecnica
                          : styles.badgeComum
                      }
                    >
                      {item.tipo.toUpperCase()}
                    </Text>
                  </Text>
                  {/* Como o horário não está no JSON geral, você pode adicionar ou manter um texto padrão */}
                  <Text style={styles.detalhe}>
                    Série: <Text style={styles.valor}>{item.ano}º Ano</Text>
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "cyan" },
  container: { paddingBottom: 50 },
  telaCheia: {
    height: height - 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  titulo: {
    color: "darkblue",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
  },
  subtitulo: { color: "black", fontSize: 20, fontWeight: "600" },
  anoDescricao: { color: "darkcyan", fontWeight: "bold", marginTop: 5 },
  listaContainer: { paddingHorizontal: 20 },
  acordeonItem: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  acordeonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "rgba(0, 0, 255, 0.1)",
  },
  headerAtivo: {
    backgroundColor: "rgba(0, 0, 255, 0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  textoDisciplina: { fontSize: 16, fontWeight: "bold", color: "black" },
  icone: { fontSize: 14, color: "blue" },
  acordeonContent: { padding: 15, backgroundColor: "rgba(255, 255, 255, 0.5)" },
  detalhe: { fontSize: 14, marginBottom: 5 },
  valor: { fontWeight: "bold", color: "blue" },
  badgeTecnica: { color: "darkgreen", fontWeight: "bold" },
  badgeComum: { color: "darkred", fontWeight: "bold" },
});
