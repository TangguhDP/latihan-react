import React, { Component } from 'react';

class FetchRandomUser extends Component {

    state = {
        loading: true,
        people: []
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=3";
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ loading: false, people: data.results });
    }

    dateTrim() {
        const arrayPlace = [];
        for (let index = 0; index < this.state.people.length; index++) {

            const dateRaw = this.state.people[index].dob.date;
            const locTrimDate = dateRaw.search("T");
            const dateBirth = dateRaw.slice(0, locTrimDate);
            arrayPlace.push(dateBirth);
        }
        return arrayPlace;
    }

    render() {
        const personData = this.state.people;
        if (this.state.loading) {
            return <div>Loading....</div>;
        }

        if (!personData) {
            return <div>There's no person</div>
        }
        const dateBirthData = this.dateTrim();
        return (
            <div className="container mt-4">
                <div className="row">
                    {personData.map((person, pos) => (
                        <div className="col" key={pos}>
                            <div className="card " style={{ width: "18rem" }}>
                                <img className="card-img-top img-responsive" src={person.picture.large} alt="Display" />
                                <div className="card-body">
                                    <h5>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h5>
                                    <p>{person.gender === "male" ? "🚹 " : "🚺 "} {person.gender}</p>
                                    <p>{`📧 ${person.email}`}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Date Birth : {dateBirthData[pos]}</li>
                                    <li className="list-group-item">City : {person.location.city}</li>
                                    <li className="list-group-item">Country : {person.location.country}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FetchRandomUser;