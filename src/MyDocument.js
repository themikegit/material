import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import font from "./ass/Roboto-Regular.ttf";
import fontMedium from "./ass/Roboto-Medium.ttf";
import Alp from "./ass/alp.png";

Font.register({
  family: "Roboto",
  src: font,
  fontStyle: "normal",
});
Font.register({
  family: "Roboto",
  src: fontMedium,
  fontStyle: "medium",
});

// Create styles
const styles = StyleSheet.create({
  intro: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  page: {
    padding: 30,
    fontFamily: "Roboto",
    fontSize: 9,
    lineHeight: 1.3,
  },
  titleLeft: {
    display: "flex",
    justifyContent: "flex-start",
    fontStyle: "medium",
    padding: 5,
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 5,
  },
  paragraphIntro: {
    textAlign: "right",
    width: "100px",
    marginBottom: 10,
  },
  mainPara: {
    padding: "5 , 35",
    fontStyle: "medium",
    marginBottom: 10,
  },
  center: {
    textAlign: "center",
    fontStyle: "medium",
    marginBottom: 10,
  },
});

export function MyDocument({ dte, br, empVal }) {
  console.log(empVal);
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.intro}>
          <View style={{ width: "50%" }}>
            <Image style={{ width: "60px", marginBottom: "10px" }} src={Alp} />
            <Text style={styles.titleLeft}> BROJ UGOVORA: {br} </Text>
          </View>
          <View>
            <Text style={styles.paragraphIntro}>
              ALPHA TEAM HRS d.o.o. PIB 111508596 Vojvode Tankosića 19 11 118
              Beograd
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.paragraph}>
            Na osnovu člana 30, 31, 32, 33. i 37 Zakona o radu („Službeni
            glasnik RS“, broj 24/2005, 61/2005, 54/2009, 32/2013, 75/2014,
            13/2017-odluka US, 113/2017 I 95/2018) i člana 9 i 14 Zakona o
            agencijskom zapošljavanju („Službeni glasnik RS“, br. 86/2019), u
            Beogradu dana {dte} ugovorne strane i to:
          </Text>
          <Text style={styles.mainPara}>
            1. ALPHA TEAM HRS d.o.o., ul. Vojvode Tankosića br. 19,
            Beograd-Vračar, koju kao ovlašćeno lice na osnovu odluke br. 425/20
            od 01.03.2020., zastupa zaposlena Nataša Milatović iz Beograda, BR.
            LICENCE: 152-02-88/2020-02 od 19.02.2020. godine (u daljem tekstu:
            POSLODAVAC)
          </Text>
          <Text style={styles.mainPara}>
            2. {empVal.data.prezime} {empVal.data.ime}, iz GRAD,{" "}
            {empVal.data.adresaLK}, {empVal.data.jmbg}, stručna sprema-{" "}
            {empVal.data.stepenSS} – {empVal.data.zanimanje}r (u daljem tekstu:
            ZAPOSLENI),
          </Text>
          <Text style={styles.center}>UGOVOR O RADU</Text>
        </View>
        <View>
          <Text style={styles.titleLeft}> PREAMBULA</Text>

          <Text style={styles.paragraph}>
            Ugovorne strane konstatuju da odredbama ovog Ugovora saglasno
            uredjuju svoja medjusobna prava, obaveze i odgovornosti povodom
            zasnivanja radnog odnosa Zaposlenog kod Poslodavca i to na određeno
            vreme, a sve u skladu sa Zakonom o radu i Zakonom o agencijskom
            zapošljavanju. Zaposleni potpisom na ovom Ugovoru potvrđuje da ga je
            Poslodavac upoznao sa činjenicom da će obavljati posao za potrebe
            poslovnog korisnika Sitel SBA doo, (u daljem tekstu:
            POSLODAVAC-KORISNIK), a sve na osnovu Ugovora o ustupanju zaposlenih
            zaveden kod Poslodavca pod poslovnim brojem 1033/20 (kod
            Poslodavca-korisnika sa poslovnim brojem 18578/2020) od dana
            15.06.2020. kao i da je upoznat sa činjenicom da je kod
            Poslodavca-korisnika lice ovlašćeno za postupanje sa zaposlenim,
            Katarina Savić.
          </Text>
          <Text style={styles.titleLeft}> 1. ZASNIVANJE RADNOG ODNOSA</Text>
          <Text style={styles.center}>Član 1.</Text>
          <Text style={styles.paragraph}>
            Zaposleni zasniva radni odnos kod Poslodavca na određeno vreme,
            počev od 16.11.2020. godine do 31.01.2021. godine, sa početkom rada
            na dan 16.11.2020. godine, kada je i stupio na rad. Poslodavac je
            zasnovao radni odnos na određeno vreme sa Zaposlenim i to za potrebe
            rada na projektu kod Poslodavca -korisnika, čije je trajanje
            određeno do dana 31.01.2021. godine, kada Zaposlenom prestaje radni
            odnos. Probni rad za obavljanje poslova iz člana 2. ovog Ugovora
            traje 1 (jedan) mesec. Za vreme trajanja probnog rada Poslodavac i
            Zaposleni mogu da otkažu Ugovor o radu sa otkaznim rokom od 5 dana.
          </Text>
          <Text style={styles.titleLeft}>II. OPIS POSLOVA</Text>
          <Text style={styles.center}>Član 2.</Text>
          <Text style={styles.paragraph}>
            Zaposleni se zapošlјava na radnom mestu TELEFONISTA ZA ENGLESKI
            JEZIK. Opis posla: posredovanje u primanju dolaznih telefonskih
            poziva; posredovanje u uspostavljanju odlaznih telefonskih poziva;
            primanje i dostavljanje telefonskih i fax poruka; davanje osnovnih
            informacija građanima, kao i obavljanje drugih poslova po nalogu
            direktora. Zaposleni će po potrebi obavlјati i druge poslove po
            nalogu Poslodavca-korisnika. Poslodavac-korisnik ima pravo da
            proširi ili izmeni delokrug rada Zaposlenog, a u skladu sa
            obrazovanjem i iskustvom Zaposlenog, u kom slučaju će se promeniti i
            navedeni opis posla putem zaključenja Aneksa ovog Ugovora.
          </Text>
          <Text style={{ marginTop: "5px" }}>
            Obuka za poslove nevedene u stavu 1 ovog člana će trajati dve
            nedelje, za koje vreme će Zaposleni biti uredno prijavljen na
            obavezno socijalo osiguranje. Naknada za vreme obuke biće isplaćena
            u skladu sa ugovorenom zaradom u članu 6.2 ovog Ugovora. Ukoliko
            Zaposleni napusti obaveznu obuku Poslodavac-korisnik nije dužan da
            mu isplati naknadu za dane provedene na obuci koja je ugvorena u
            članu 6.2 ovog Ugovora, a u skladu sa ponudom za posao koju je
            Zaposleni prihvatio.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
