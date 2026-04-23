import React from "react";
// Importamos o básico do react-native (essencial para não dar erro de 'não encontrado')
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    // SafeAreaView ou View para a cor de fundo não vazar
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        // A "janela" por onde vemos o conteúdo
        style={styles.background}
        // O "recheio" que realmente rola
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>Desenvolvimento de Sistemas</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>2MDS</Text>
          <Text style={styles.descricao}>
            Programador de Computadores
          </Text>
        </View>

        <Text style={styles.textoFundo}>Arraste para ver mais</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "green", // Azul Marinho Profundo
  },
  container: {
    // IMPORTANTE: flexGrow permite que o justifyContent funcione no ScrollView
    flexGrow: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center", // Alinhamento Vertical Central
    gap: 20,
  },
  titulo: {
    color: "darkblue", // Azul ciano brilhante (estilo Tech)
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Branco transparente
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00d4ff",
  },
  subtitulo: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  descricao: {
    color: "darkgreen",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 12,
    marginTop: 20,
    textTransform: "uppercase",
  },
});
			