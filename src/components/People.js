import React, { Component } from 'react';

class People extends Component {
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
        fetch('https://swapi.co/api/people')
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
                <h1 style={{ color: "white" }}>P E O P L E</h1>
                <hr />
                <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        items.map(item => {
                        const { birth_year, name, eye_color, gender, hair_color, height, 
                            mass, skin_color } = item;
                        return (
                            <div key={name}>
                                <h1 style={styles.item}>Name: {name}</h1>
                                <p style={styles.item}>Model: {birth_year}</p>
                                <p style={styles.item}>Eye color: {eye_color}</p>

                                <p style={styles.item}>Gender: {gender}</p>
                                <p style={styles.item}>Hair color: {hair_color}</p>
                                <p style={styles.item}>Height: {height}cm</p>

                                <p style={styles.item}>Mass: {mass}kg</p>
                                <p style={styles.item}>Skin color: {skin_color}</p>
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
export default People;