import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  // Mudança principal: O estado agora guarda o NOME do dia (string) ou null
  const [aberto, setAberto] = useState<string | null>(null);

  // Função para facilitar a troca (toggle)
  const toggleDia = (dia: string) => {
    // Se o dia clicado já estiver aberto, ele fecha (null).
    // Se for um dia novo, ele abre o novo e fecha o anterior.
    setAberto(aberto === dia ? null : dia);
  };

  // Constante com os dados da grade do primeiro ano
  const dadosGradeCurricularPrimeiro = [
    {
      tipo: 'intervalo',
      titulo: 'Base Comum'
    },
    { hora: 'L.P.', materia: 'Lingua Portuguesa', professor: 'Profª. Meire' },
    { hora: 'L.I.', materia: 'Lingua Inglesa', professor: 'Profª. Meire' },
    { hora: 'Arte', materia: 'Arte', professor: 'Prof. Fulano' },
    { hora: 'E.F.', materia: 'Educação Física', professor: 'Profª. Meire' },
    { hora: 'L.P.', materia: 'Lingua Portuguesa', professor: 'Profª. Meire' },
    { hora: 'MAT.', materia: 'Matemática', professor: 'Profª. Meire' },
    { hora: 'BIO', materia: 'Biologia', professor: 'Profª. Meire' },
    { hora: 'FIS', materia: 'Física', professor: 'Profª. Meire' },
    { hora: 'QUI', materia: 'Química', professor: 'Profª. Meire' },
    { hora: 'HIS', materia: 'História', professor: 'Profª. Meire' },
    { hora: 'GEO', materia: 'Geografia', professor: 'Profª. Meire' },
    {
      tipo: 'intervalo',
      titulo: 'Base Técnica'
    },
    { hora: 'P.W.1', materia: 'Programação Web 1', professor: 'Profª. Meire' },
    { hora: 'P.T.I.C.', materia: 'Projetos de Tecnologia de Informação e Comunicação', professor: 'Profª. Meire' },
    { hora: 'P.A.', materia: 'Programação e Algoritmos', professor: 'Profª. Meire' },
    { hora: 'S.E.I.', materia: 'Sistemas Embarcados e IoT', professor: 'Profª. Meire' },
    { hora: 'C.P.R.T.', materia: 'Conduta Profissional e Relações de Trabalho', professor: 'Profª. Meire' },
    { hora: 'B.D.1', materia: 'Banco de Dados I', professor: 'Profª. Meire' }
  ];

    // Constante com os dados da grade do segundo ano
  const dadosGradeCurricularSegundo = [
    {
      tipo: 'intervalo',
      titulo: 'Base Comum'
    },
    { hora: 'L.P.', materia: 'Lingua Portuguesa', professor: 'Profª. Meire' },
    { hora: 'L.I.', materia: 'Lingua Inglesa', professor: 'Profª. Meire' },  
    { hora: 'E.F.', materia: 'Educação Física', professor: 'Profª. Meire' },
    { hora: 'L.P.', materia: 'Lingua Portuguesa', professor: 'Profª. Meire' },
    { hora: 'MAT.', materia: 'Matemática', professor: 'Profª. Meire' },
    { hora: 'BIO', materia: 'Biologia', professor: 'Profª. Meire' },
    { hora: 'FIS', materia: 'Física', professor: 'Profª. Meire' },
    { hora: 'QUI', materia: 'Química', professor: 'Profª. Meire' },
    { hora: 'HIS', materia: 'História', professor: 'Profª. Meire' },
    { hora: 'GEO', materia: 'Geografia', professor: 'Profª. Meire' },
    { hora: 'FIL', materia: 'Filosofia', professor: 'Profª. Meire' },
    {
      tipo: 'intervalo',
      titulo: 'Base Técnica'
    },
    { hora: 'P.W.2', materia: 'Programação Web II', professor: 'Profª. Meire' },
    { hora: 'A.P.S.', materia: 'Análise e Projeto de Sistemas', professor: 'Profª. Meire' },
    { hora: 'P.D.S.', materia: 'Projetos de Desenvolvimento de Sistemas', professor: 'Profª. Meire' },
    { hora: 'D.S.1', materia: 'Desenvolvimento de Sistemas I', professor: 'Profª. Meire' },
    { hora: 'P.A.M.1', materia: 'Programação de Aplicativos Mobile I', professor: 'Profª. Meire' },
    { hora: 'B.D.2', materia: 'Banco de Dados 2', professor: 'Profª. Meire' }
  ];

    // Constante com os dados da grade do terceiro ano
  const dadosGradeCurricularTerceiro = [
    {
      tipo: 'intervalo',
      titulo: 'Base Comum'
    },
    { hora: 'L.P.', materia: 'Lingua Portuguesa', professor: 'Profª. Meire' },
    { hora: 'L.I.', materia: 'Lingua Inglesa', professor: 'Profª. Meire' },  
    { hora: 'L.P.', materia: 'Lingua Portuguesa', professor: 'Profª. Meire' },
    { hora: 'MAT.', materia: 'Matemática', professor: 'Profª. Meire' },
    { hora: 'BIO', materia: 'Biologia', professor: 'Profª. Meire' },
    { hora: 'FIS', materia: 'Física', professor: 'Profª. Meire' },
    { hora: 'QUI', materia: 'Química', professor: 'Profª. Meire' },
    { hora: 'HIS', materia: 'História', professor: 'Profª. Meire' },
    { hora: 'GEO', materia: 'Geografia', professor: 'Profª. Meire' },
    { hora: 'SOC', materia: 'Sociologia', professor: 'Profª. Meire' },
    {
      tipo: 'intervalo',
      titulo: 'Base Técnica'
    },
    { hora: 'P.W.3', materia: 'Programação Web III', professor: 'Profª. Meire' },
    { hora: 'A.P.S.', materia: 'Análise e Projeto de Sistemas', professor: 'Profª. Meire' },
    { hora: 'C.N.', materia: 'Computação na Nuvem', professor: 'Profª. Meire' },
    { hora: 'D.S.2', materia: 'Desenvolvimento de Sistemas II', professor: 'Profª. Meire' },
    { hora: 'P.A.M.2', materia: 'Programação de Aplicativos Mobile II', professor: 'Profª. Meire' },
    { hora: 'P.D.T.C.C.', materia: 'Planejamento e Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Desenvolvimento de Sistemas ', professor: 'Profª. Meire' }
  ];
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>ETEC Adolpho Berezin</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Desenvolvimento de Sistemas</Text>
          <Text style={styles.descricao}>
            Curso completo para desenvolvedores desktop, web e mobile
          </Text>
        </View>

        <Text style={styles.textoFundo}>Informações Gerais do Curso</Text>

        {/* --- TABELA FIXA: FICHA TÉCNICA --- */}
        <View style={styles.fichaTecnica}>
          <View style={styles.fichaLinha}>
            <Text style={styles.fichaLabel}>Carga Horária Total:</Text>
            <Text style={styles.fichaValor}>1.200h</Text>
          </View>
          <View style={styles.fichaLinha}>
            <Text style={styles.fichaLabel}>Parte Técnica:</Text>
            <Text style={styles.fichaValor}>800h</Text>
          </View>
          <View style={styles.fichaLinha}>
            <Text style={styles.fichaLabel}>Base Comum:</Text>
            <Text style={styles.fichaValor}>400h</Text>
          </View>
          <View style={styles.fichaLinha}>
            <Text style={styles.fichaLabel}>Período:</Text>
            <Text style={styles.fichaValor}>Vespertino</Text>
          </View>
          <View style={styles.fichaLinhaSemBorda}>
            <Text style={styles.fichaLabel}>Horário:</Text>
            <Text style={styles.fichaValor}>Seg a Sex das 13:30 às 18:50</Text>
          </View>
        </View>

        <Text style={styles.textoFundo}>
          Toque abaixo para ver o horário diário
        </Text>

        {/* --- ACORDEON: Primeiro Ano --- */}
        <View style={styles.tabelaContainer}>
          <Pressable
            style={[
              styles.linhaHeader,
              aberto === "primeiro" && styles.linhaHeaderAberta,
            ]}
            onPress={() => toggleDia("primeiro")}
          >
            <Text style={[styles.colunaHoraHeader, styles.textoHeader]}>
              Primeiro Ano - 1MDS
            </Text>
            <Text style={[styles.colunaMateriaHeader, styles.textoHeader]}>
              {aberto === "primeiro" ? "▲" : "▼"}
            </Text>
          </Pressable>

          {aberto === "primeiro" && (
            <View style={styles.corpoAcordeon}>
              {dadosGradeCurricularPrimeiro.map((item, index) => {
                if (item.tipo === 'intervalo') {
                  return (
                    <View key={index} style={styles.linhaIntervalo}>
                      <Text style={styles.textoIntervalo}>{item.titulo}</Text>
                    </View>
                  );
                }

                return (
                  <View key={index} style={styles.linhaTabela}>
                    <View style={styles.colunaHora}>
                      <Text style={styles.textoHora}>{item.hora}</Text>
                    </View>
                    <View style={styles.colunaMateria}>
                      <Text style={styles.textoMateria}>{item.materia}</Text>
                      <Text style={styles.textoProfessor}>{item.professor}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>

          {/* --- ACORDEON: Segundo Ano --- */}
        <View style={styles.tabelaContainer}>
          <Pressable
            style={[
              styles.linhaHeader,
              aberto === "segundo" && styles.linhaHeaderAberta,
            ]}
            onPress={() => toggleDia("segundo")}
          >
            <Text style={[styles.colunaHoraHeader, styles.textoHeader]}>
              Primeiro Ano - 1MDS
            </Text>
            <Text style={[styles.colunaMateriaHeader, styles.textoHeader]}>
              {aberto === "segundo" ? "▲" : "▼"}
            </Text>
          </Pressable>

          {aberto === "segundo" && (
            <View style={styles.corpoAcordeon}>
              {dadosGradeCurricularSegundo.map((item, index) => {
                if (item.tipo === 'intervalo') {
                  return (
                    <View key={index} style={styles.linhaIntervalo}>
                      <Text style={styles.textoIntervalo}>{item.titulo}</Text>
                    </View>
                  );
                }

                return (
                  <View key={index} style={styles.linhaTabela}>
                    <View style={styles.colunaHora}>
                      <Text style={styles.textoHora}>{item.hora}</Text>
                    </View>
                    <View style={styles.colunaMateria}>
                      <Text style={styles.textoMateria}>{item.materia}</Text>
                      <Text style={styles.textoProfessor}>{item.professor}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        {/* --- ACORDEON: Terceiro Ano --- */}
         <View style={styles.tabelaContainer}>
          <Pressable
            style={[
              styles.linhaHeader,
              aberto === "terceiro" && styles.linhaHeaderAberta,
            ]}
            onPress={() => toggleDia("terceiro")}
          >
            <Text style={[styles.colunaHoraHeader, styles.textoHeader]}>
              Primeiro Ano - 1MDS
            </Text>
            <Text style={[styles.colunaMateriaHeader, styles.textoHeader]}>
              {aberto === "terceiro" ? "▲" : "▼"}
            </Text>
          </Pressable>

          {aberto === "terceiro" && (
            <View style={styles.corpoAcordeon}>
              {dadosGradeCurricularTerceiro.map((item, index) => {
                if (item.tipo === 'intervalo') {
                  return (
                    <View key={index} style={styles.linhaIntervalo}>
                      <Text style={styles.textoIntervalo}>{item.titulo}</Text>
                    </View>
                  );
                }

                return (
                  <View key={index} style={styles.linhaTabela}>
                    <View style={styles.colunaHora}>
                      <Text style={styles.textoHora}>{item.hora}</Text>
                    </View>
                    <View style={styles.colunaMateria}>
                      <Text style={styles.textoMateria}>{item.materia}</Text>
                      <Text style={styles.textoProfessor}>{item.professor}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001a33",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    gap: 15,
  },
  titulo: {
    color: "#00d4ff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00d4ff",
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  descricao: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
  },
  textoFundo: {
    color: "#555",
    fontSize: 12,
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center",
  },
  fichaTecnica: {
    backgroundColor: "rgba(0, 212, 255, 0.05)",
    width: "100%",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 212, 255, 0.3)",
  },
  fichaLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  fichaLinhaSemBorda: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  fichaLabel: {
    color: "#00d4ff",
    fontWeight: "bold",
    fontSize: 14,
  },
  fichaValor: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "right",
    flex: 1,
    marginLeft: 10,
  },
  tabelaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  linhaHeader: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 212, 255, 0.15)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00d4ff",
    justifyContent: "space-between",
  },
  linhaHeaderAberta: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "rgba(0, 212, 255, 0.3)",
  },
  corpoAcordeon: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#00d4ff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  colunaHoraHeader: { fontWeight: "bold", color: "#00d4ff" },
  colunaMateriaHeader: { color: "#00d4ff", fontWeight: "bold" },
  textoHeader: {
    color: "#00d4ff",
    fontWeight: "bold",
    fontSize: 13,
  },
  linhaTabela: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
  },
  colunaHora: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  colunaMateria: {
    width: "75%",
    paddingLeft: 15,
  },
  textoHora: {
    color: "#00d4ff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoMateria: {
    color: "#FFF",
    fontSize: 15,
  },
  textoProfessor: {
    color: "#888",
    fontSize: 12,
  },
  linhaIntervalo: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 6,
    alignItems: "center",
  },
  textoIntervalo: {
    color: "#ffcc00",
    fontSize: 11,
    fontWeight: "bold",
  },
});