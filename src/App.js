import "./App.scss"
import Header from "./components/Header"
import Rubrick from "./components/Rubrik"
import { useState } from "react"

function App() {
  const [result, setResult] = useState(0)
  const [modele, setModele] = useState(0)
  const [option, setOption] = useState(0)
  const [modele1, setModele1] = useState(false)
  const [modele2, setModele2] = useState(false)
  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)

  return (
    <div className="App">
      <header>
        <Header title={"TESLA CONFIG"} />
      </header>

      <main>
        <div className="rubrik">
          <h2>Sélectionnez un modèle </h2>
          <div
            className={modele1 === true ? "modele1" : "rubrik-block"}
            onClick={() => {
              setModele1(true)
              setModele2(false)
              setModele(90700)
              setResult(90700)
              if (option2 === true) {
                setOption2(true)
                setResult(90700 + option)
              }
            }}
          >
            <Rubrick libelle={"modèle autonomie : 90 700 €"} />
          </div>

          <div
            className={modele2 === true ? "modele2" : "rubrik-block"}
            onClick={() => {
              setModele2(true)
              setModele1(false)
              setModele(106700)
              setResult(106700)
              if (option2 === true) {
                setOption2(true)
                setResult(106700 + option)
              }
            }}
          >
            <Rubrick libelle={"modèle performance : 106 700 €"} />
          </div>
        </div>

        <div className="rubrik">
          <h2>Sélectionnez une option </h2>
          <div
            className={option1 === true ? "option1" : "rubrik-block"}
            onClick={() => {
              setOption1(true)
              setOption2(false)
              setOption(0)
              if (modele === 90700) {
                setResult(90700)
              } else if (modele === 106700) {
                setResult(106700)
              }
            }}
          >
            <Rubrick libelle={"option blanc multicouches : 0 €"} />
          </div>

          <div
            className={option2 === true ? "option2" : "rubrik-block"}
            onClick={() => {
              setOption1(false)
              setOption2(true)
              setOption(1000)
              if (modele === 90700) {
                setResult(91700)
              } else if (modele === 106700) {
                setResult(107700)
              }
            }}
          >
            <Rubrick libelle={"option noire : 1 000 €"} />
          </div>
        </div>

        <div className="result">
          <div className="result-display">
            <span>{result.toLocaleString()} € </span>
          </div>
          <div className="result-buy">
            <span
              onClick={() => {
                alert("Thanks for clicking !")
              }}
            >
              {" "}
              BUY{" "}
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
