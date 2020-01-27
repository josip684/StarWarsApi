import React, { Component } from 'react';

class Planets extends Component {
    constructor(){
        super()
        this.state = {
            items: [],
            isLoading: true,
            error: null,
        }
    }
    
   componentDidMount(){
       this.fetchItems();
   }

    fetchItems = async () => {
        fetch('https://swapi.co/api/planets')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    items: data.results,
                    isLoading: false
                }))
                .catch(error => this.setState({ error, isLoading: false}));
    }

    render(){
        const { isLoading, items, error } = this.state;
        console.log(this.state.items)
        return (
            <div>
                <hr />
                <h1 style={{ color: "white" }}>P L A N E T S</h1>
                <hr />
                <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        items.map(item => {
                        const { climate, name, gravity, diameter, orbital_period, population, 
                            rotation_period, surface_water, terrain } = item;
                        return (
                            <div key={name}>
                                <h1 style={styles.item}>Name: {name}</h1>
                                <p style={styles.item}>Climate: {climate}</p>
                                <p style={styles.item}>Gravity: {gravity}</p>

                                <p style={styles.item}>Diameter: {diameter}</p>
                                <p style={styles.item}>Orbital period: {orbital_period}</p>
                                <p style={styles.item}>Population: {population}</p>

                                <p style={styles.item}>Rotation period: {rotation_period}</p>
                                <p style={styles.item}>Surface water: {surface_water}</p>
                                <p style={styles.item}>Terrain: {terrain}</p>
                                <hr />
                            </div>
                        );
                        })
                    ) : (
                            <h1 style={styles.title} >Loading ...</h1>
                        )	
                    }
			    </div>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "black",
    },
    item: {
        textAlign: "left",
        color: "white",
        padding: "10px"
    },
    ul: {
        listStyle: "none"
    },
    title: {
        color: "red",
        fontWeight: "bold",
        fontSize: 50
    }
}
export default Planets;