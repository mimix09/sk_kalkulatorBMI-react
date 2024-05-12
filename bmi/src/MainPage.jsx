import { useState } from "react";
import "./styl.css";


function MainPage(){
    const [waga, setWaga] = useState();
    const [wzrost, setWzrost] = useState();
    const [data, setData] = useState();
    const [edit, setEdit] = useState(-1);

    const [listaBMI, setListaBMI] = useState([]);

    const changeWaga = (event) => {
        setWaga(event.target.value);
    }

    const changeWzrost = (event) => {
        setWzrost(event.target.value);
    }

    const changeData = (event) => {
        setData(event.target.value);
    }

    function obliczBMI(){
        const bmi = (waga / ((wzrost/100) * (wzrost/100))).toFixed(2);
        return bmi
    }

    function mainFunction(){
        if (edit === -1){
            const lista = {
                weight: waga,
                height: wzrost,
                bmi: obliczBMI(),
                date: data 
            }
            setListaBMI([...listaBMI, lista]);
        }else{
            const update = [...listaBMI];
            update[edit] = {
                weight: waga,
                height: wzrost,
                bmi: obliczBMI(),
                date: data 
            }
            setListaBMI(update);
            setEdit(-1);
        }

        setWaga('');
        setWzrost('');
    }

    const Edytowanie = (index) => {
        const item = listaBMI[index];
        setWaga(item.weight);
        setWzrost(item.height);
        setData(item.date);
        setEdit(index)
    }

    const Usuwanie = (index) => {
        const updateList = listaBMI.filter((item, i) => i !== index);
        setListaBMI(updateList);
    }


    return (
        <div>

            <div className="container">
                <div className="row py-5 my-4">
                    <h1 className="my-2">Kalkulator BMI</h1>
                    <div className="col-4"></div>
                    <div className="col-4 my-5">
                        <div>
                            <h4>Podaj swoją wagę w kg</h4>
                            <input type="number" placeholder="kg" value={waga} onChange={changeWaga} className="form-control"/>
                        </div>

                        <div>
                            <label>Podaj swój wzrost w cm</label>
                            <input type="number" placeholder="cm" value={wzrost} onChange={changeWzrost} className="form-control"/>
                        </div>

                        <div>
                            <label>Podaj date</label>
                            <input type="date" onChange={changeData} className="form-control"/>
                        </div>

                        <button className="btn btn-success my-2" onClick={() => mainFunction()}>{edit === -1 ? "Dodaj" : "Edytuj"}</button>
                    </div>

                    <div className="col-4"></div>
                </div>


                <div className="row">
                    <div className="col-4"></div>

                    <div className="col-4">
                    <div className="tlo py-3">
                    {listaBMI && listaBMI.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3>weight = {item.weight}</h3>
                                    <h3>heihgt = {item.height}</h3>
                                    <h3>bmi = {item.bmi}</h3>
                                    <h3>data = {item.date}</h3>

                                    <button className="btn btn-warning mx-2" onClick={() => Edytowanie(index)}>Edytuj</button>
                                    <button className="btn btn-danger mx-2" onClick={() => Usuwanie(index)}>Usun</button>
                                </div>
                            );
                    })}
                    </div>
                    </div>

                    <div className="col-4"></div>
                </div>

            </div>
        </div>
    );
}

export default MainPage;