import CountryData from "../api/countryData.json"

export const About = () => {
    return <>
        <section className="section-bout container">
            <h2 className="container-title">
                Here are the Interesting Facts
                <br />
                We're proud of
            </h2>

            <div className="gradient-cards">
                {CountryData.map((currData) => {
                    const { id, countryName, capital, population, interestingFacts } = currData

                    return (
                        <>
                            <div className="card" key={id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{countryName}</p>
                                    <p>
                                        <span className="card-description">Capital: </span>{capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population: </span>{population}
                                    </p>
                                    <p>
                                        <span className="card-description">Interesting Fact: </span> {interestingFacts}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </div>
        </section>
    </>
}