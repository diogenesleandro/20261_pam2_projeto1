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

export default function TerceiroAnoScreen() {
  const [aberto, setAberto] = useState<string | null>(null);

  // FILTRANDO: Agora o foco é o último ano (ano 3)
  const disciplinasTerceiroAno = listaGeral.filter((item) => item.ano === 3);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* CABEÇALHO DA TELA (ROXO TECH) */}
        <View style={styles.telaCheia}>
          <Text style={styles.titulo}>Desenvolvimento de Sistemas</Text>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>3MDS</Text>
            <Text style={styles.descricao}>
              Técnico em Desenvolvimento de Sistemas
            </Text>
          </View>
          <Text style={styles.textoFundo}>
            ⬇ Arraste para ver a grade final ⬇
          </Text>
        </View>

        {/* LISTAGEM COM ACORDEON */}
        <View style={styles.listaContainer}>
          {disciplinasTerceiroAno.map((item) => (
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
                    <Text style={styles.valor}>3ª Série (Conclusão/TCC)</Text>
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
    backgroundColor: "purple",
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
    color: "white",
    fontSize: 28,
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
    borderColor: "white",
    marginTop: 20,
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  descricao: {
    color: "#eee",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  textoFundo: {
    color: "rgba(255, 255, 255, 0.6)",
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
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparência sobre o roxo
  },
  acordeonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  headerAtivo: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderBottomWidth: 1,
    borderBottomColor: "#00d4ff",
  },
  textoDisciplina: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  icone: {
    fontSize: 14,
    color: "#00d4ff",
  },
  acordeonContent: {
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  detalhe: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  valor: {
    fontWeight: "bold",
    color: "purple",
  },
  badgeTecnica: {
    color: "#6a1b9a", // Roxo escuro para destacar no branco
    fontWeight: "bold",
  },
  badgeComum: {
    color: "#0277bd", // Azul para base comum
    fontWeight: "bold",
  },
});
