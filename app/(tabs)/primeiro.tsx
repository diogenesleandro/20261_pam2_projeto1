import React from "react";
// Importamos o básico do react-native (essencial para não dar erro de 'não encontrado')
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

// Captura a altura da tela do dispositivo
const { height } = Dimensions.get('window');

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
        <View style={styles.telaCheia}>
          <Text style={styles.titulo}>ETEC Adolpho Berezin</Text>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>Desenvolvimento de Sistemas</Text>
            <Text style={styles.descricao}>1º Módulo - Auxiliar em DS</Text>
          </View>
          <Text style={styles.textoFundo}>⬇ Arraste para ver a grade ⬇</Text>
        </View>
        {/* SEÇÃO 2: GRADE CURRICULAR (TABELA) */}
        
          <View style={styles.tabelaHeader}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Disciplina</Text>
            <Text style={[styles.coluna, styles.textoBold]}>T</Text>
            <Text style={[styles.coluna, styles.textoBold]}>P</Text>
            <Text style={[styles.coluna, styles.textoBold]}>Total</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.textoBold]}>Tipo</Text>
          </View>
          {/* Linha de Exemplo (Repetir para cada disciplina) */}
          <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
                    {/* Linha de Exemplo (Repetir para cada disciplina) */}
                    <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
                    {/* Linha de Exemplo (Repetir para cada disciplina) */}
                    <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
                    {/* Linha de Exemplo (Repetir para cada disciplina) */}
                    <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
                    {/* Linha de Exemplo (Repetir para cada disciplina) */}
                    <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
                    {/* Linha de Exemplo (Repetir para cada disciplina) */}
                    <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
                    {/* Linha de Exemplo (Repetir para cada disciplina) */}
                    <View style={styles.tabelaLinhap}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>Lingua Portuguesa</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.textoBold]}>0</Text>
            <Text style={[styles.coluna, styles.textoBold]}>120</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
          <View style={styles.tabelaLinhai}>
            <Text style={[styles.coluna, styles.colunaNome, styles.textoBold]}>PAM II</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>40</Text>
            <Text style={[styles.coluna, styles.textoBold]}>80</Text>
            <Text style={[styles.coluna, styles.colunaTipo, styles.badgeTecnica]}>TEC</Text>
          </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
  },
  telaCheia: {
    // Força essa View a ter exatamente o tamanho da tela do celular
    height: height - 80, // Subtraímos um pouco por causa da Tab Bar inferior
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    gap: 20,
  },
  tituloTabela: {
    color: "#00d4ff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  // ... seus outros estilos da tabela aqui
  background: {
    flex: 1,
    backgroundColor: "cyan", // Ciano
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
    color: "blue", // Azul ciano brilhante (estilo Tech)
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Branco transparente
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
    color: "darkcyan",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: "#555",
    fontSize: 12,
    marginTop: 20,
    textTransform: "uppercase",
  },
  tabelaHeader: {
    flexDirection: "row",
    backgroundColor: "#00d4ff22", // Azul ciano bem clarinho (transparente)
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#00d4ff",
    marginTop: 20,
  },
  tabelaLinhap: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
  },
  tabelaLinhai: {
    flexDirection: "row",
    backgroundColor: "#00d4ff22", // Azul ciano bem clarinho (transparente)
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
  },
  coluna: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    flex: 1, // Divide o espaço igualmente
  },
  colunaNome: {
    flex: 2, // A coluna do nome ganha o dobro de espaço
    textAlign: "left",
    paddingLeft: 10,
  },
  colunaTipo: {
    flex: 1.5,
  },
  textoBold: {
    fontWeight: "bold",
    color: "black",
  },
  badgeTecnica: {
    color: "darkgreen", // Verde para Técnica
    fontWeight: "bold",
  },
  badgeComum: {
    color: "darkyellow", // Amarelo para Base Comum
    fontWeight: "bold",
  },
});
			