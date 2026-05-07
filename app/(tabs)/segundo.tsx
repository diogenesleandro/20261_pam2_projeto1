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

// IMPORTANDO O MESMO JSON ÚNICO
import listaGeral from "../../constants/disciplinas.json";

const { height } = Dimensions.get("window");

export default function SegundoAnoScreen() {
  const [aberto, setAberto] = useState<string | null>(null);

  // FILTRANDO: Agora pegamos apenas o ano 2
  const disciplinasSegundoAno = listaGeral.filter((item) => item.ano === 2);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* CABEÇALHO DA TELA */}
        <View style={styles.telaCheia}>
          <Text style={styles.titulo}>Desenvolvimento de Sistemas</Text>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>2MDS</Text>
            <Text style={styles.descricao}>Programador de Computadores</Text>
          </View>
          <Text style={styles.textoFundo}>⬇ Arraste para ver a grade ⬇</Text>
        </View>

        {/* LISTAGEM COM ACORDEON */}
        <View style={styles.listaContainer}>
          {disciplinasSegundoAno.map((item) => (
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
                  <Text style={styles.detalhe}>
                    Série:{" "}
                    <Text style={styles.valor}>2ª Série (Intermediário)</Text>
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
  background: {
    flex: 1,
    backgroundColor: "green",
  },
  container: {
    paddingBottom: 50,
  },
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
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00d4ff",
    marginTop: 20,
  },
  subtitulo: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  descricao: {
    color: "darkgreen",
    fontSize: 16,
    fontWeight: "600",
  },
  textoFundo: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    marginTop: 30,
    textTransform: "uppercase",
  },
  listaContainer: {
    paddingHorizontal: 20,
  },
  acordeonItem: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Leve transparência para o verde aparecer
  },
  acordeonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "rgba(0, 50, 0, 0.1)",
  },
  headerAtivo: {
    backgroundColor: "rgba(0, 50, 0, 0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "darkblue",
  },
  textoDisciplina: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  icone: {
    fontSize: 14,
    color: "white",
  },
  acordeonContent: {
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  detalhe: {
    fontSize: 14,
    marginBottom: 5,
    color: "black",
  },
  valor: {
    fontWeight: "bold",
    color: "darkgreen",
  },
  badgeTecnica: {
    color: "green",
    fontWeight: "bold",
  },
  badgeComum: {
    color: "blue",
    fontWeight: "bold",
  },
});
