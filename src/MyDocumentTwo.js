import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  titleLeft: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 5,
    fontSize: 11,
  },
  paragraph: {
    padding: 5,
    fontSize: 9,
  },
  mainPara: {
    padding: "5 , 35",
    fontSize: 10,
  },
});

export function MyDocumentTwo({ dte, br, empVal }) {
  console.log("dte", dte);
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View>
          <Text style={styles.titleLeft}> BROJ UGOVORA: </Text>
          <Text style={styles.paragraph}>
            {empVal.data.ime}
            HAHAHAHAHAHu Beogradu dana ugovorne strane i to: DATUM - {dte}
          </Text>
          <Text style={styles.mainPara}>
            BROJ UGOVORA - {br}
            1. ALPHA TEAM HRS d.o.o., ul. Vojvode Tankosića br. 19,
            Beograd-Vračar, koju kao ovlašćeno lice na osnovu odluke br. 425/20
            od 01.03.2020., zastupa zaposlena Nataša Milatović iz Beograda, BR.
            LICENCE: 152-02-88/2020-02 od 19.02.2020. godine (u daljem tekstu:
            POSLODAVAC)
          </Text>
        </View>
      </Page>
    </Document>
  );
}
