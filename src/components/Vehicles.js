import React, { Component } from 'react';

class Vehicles extends Component {
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
        fetch('https://swapi.co/api/vehicles')
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
                <h1 style={{ color: "white" }}>V E H I C L E S</h1>
                <hr />
                <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        items.map(item => {
                            const { model, name, manufacturer, consumables, cost_in_credits, length, 
                                crew, passengers, max_atmosphering_speed } = item;
                        return (
                            <div key={model}>
                                <h1 style={styles.item}>Name: {name}</h1>
                                <p style={styles.item}>Model: {model}</p>
                                <p style={styles.item}>Manufacturer: {manufacturer}</p>

                                <p style={styles.item}>Consumables: {consumables}</p>
                                <p style={styles.item}>Cost in credits: {cost_in_credits}</p>
                                <p style={styles.item}>Length: {length}</p>

                                <p style={styles.item}>Crew: {crew}</p>
                                <p style={styles.item}>Passengers: {passengers}</p>
                                <p style={styles.item}>Max atmosphering speed: {max_atmosphering_speed}</p>

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
export default Vehicles;