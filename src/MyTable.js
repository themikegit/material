import React, { useState, useEffect } from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { MyDocument } from "./MyDocument";
import { MyDocumentTwo } from "./MyDocumentTwo";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import TextField from "@material-ui/core/TextField";
import Linear from "./Linear";

const columns = [
  { field: "ime", headerName: "Ime", width: 130 },
  { field: "prezime", headerName: "Prezime", width: 130 },
  {
    field: "jmbg",
    headerName: "JMBG",
    type: "number",
    width: 150,
  },
  { field: "adresaLK", headerName: "Adresa ", width: 130 },
];

export default function DataTable() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [allempl, setallempl] = useState("");
  const [selectedEmpl, setselectedEmpl] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [queryEmpl, setQueryEmpl] = useState({ term: "" });
  const [brUgovora, setbrUgovora] = useState();

  const handleDateChange = (date) => {
    const toStr = date.toLocaleDateString();
    setSelectedDate(toStr);
  };

  useEffect(() => {
    axios
      .get("https://app.alphateam.co.rs/wp-json/wp/v2/zaposleni/")
      .then((res) => {
        const mappedArr = res.data.map((em) => ({
          id: em.id,
          ime: em.acf.ime,
          prezime: em.acf.prezime,
          jmbg: em.acf.jmbg,
          datumPotpUg: em.acf.datum_potpisivanja_ugovora,
          datumPocetkaRada: em.acf.datum_pocetka_rada,
          istekUgovora: em.acf.istek_ugovora,
          probniRad: em.acf.probni_rad,
          adresaLK: em.acf.adresa_iz_licne_karte,
          adresaStan: em.acf.adresa_stanovanja,
          stepenSS: em.acf.stepen_strucne_spreme,
          zanimanje: em.acf.zanimanje,
        }));
        setallempl(mappedArr);
        setisLoading(false);
      })
      .catch((err) => console.log("error from axios fetch", err));
  }, []);
  if (!isLoading) {
    return (
      <div style={{ marginTop: "10px" }}>
        <TextField
          style={{ marginRight: "15px" }}
          onChange={(e) => setQueryEmpl({ term: e.target.value })}
          id="outlined-basic"
          label="Pretraga"
          variant="outlined"
          size="small"
          value={queryEmpl.term}
        />
        <TextField
          style={{ marginRight: "15px" }}
          onChange={(e) => setbrUgovora(e.target.value)}
          id="outlined-basic"
          label="Br.Ugovora"
          variant="outlined"
          size="small"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        {selectedEmpl && brUgovora ? (
          <>
            <PDFDownloadLink
              style={{
                margin: "5px",
                backgroundColor: "#FFCB3C",
                padding: "10px",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
              document={
                <MyDocument
                  dte={selectedDate}
                  br={brUgovora}
                  empVal={selectedEmpl}
                />
              }
              fileName={"name"}
            >
              {" "}
              linkn{" "}
            </PDFDownloadLink>
            <PDFDownloadLink
              style={{
                margin: "5px",
                backgroundColor: "#FFCB3C",
                padding: "10px",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
              document={
                <MyDocumentTwo
                  dte={selectedDate}
                  br={brUgovora}
                  empVal={selectedEmpl}
                />
              }
              fileName={"name"}
            >
              {" "}
              doucument hahah
            </PDFDownloadLink>
          </>
        ) : null}
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            onRowSelected={(param) => setselectedEmpl(param)}
            rows={allempl.filter((x) => x.ime.includes(queryEmpl.term))}
            columns={columns}
            pageSize={5}
          />
        </div>{" "}
      </div>
    );
  } else {
    return <Linear />;
  }
}
