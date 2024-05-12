import { useState } from "react";

function MainPage(){
    const [waga, setWaga] = useState();
    const [wzrost, setWzrost] = useState();
    const [wynik, setWynik] = useState(null);
    const [pozycja, setPozycja] = useState(0);
    const [dane, setDane] = useState();

    const changeWaga = (event) => {
        setWaga(event.target.value);
    }

    const changeWzrost = (event) => {
        setWzrost(event.target.value);
    }

    function obliczBMI(){
        setWynik(waga / ((wzrost/100) * (wzrost/100)));

    }


    return (
        <div>
            <h1>Kalkulator BMI</h1>

            <div>
                <input type="number" placeholder="kg" value={waga} onChange={changeWaga}/>

                <input type="number" placeholder="cm" value={wzrost} onChange={changeWzrost} />

                <button onClick={() => obliczBMI()}>Oblicz</button>

                {wynik != null && <h1>{wynik.toFixed(2)}</h1>}

            </div>


        </div>
    );
}

export default MainPage;