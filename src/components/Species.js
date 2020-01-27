import React, { Component } from 'react';

class Species extends Component {
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
        fetch('https://swapi.co/api/species')
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
                <h1 style={{ color: "white" }}>S P E C I E S</h1>
                <hr />
                <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        items.map(item => {
                        const { average_height, name, average_lifespan, classification, designation, eye_colors, 
                            hair_colors, skin_colors, language } = item;
                        return (
                            <div key={name}>
                                <h1 style={styles.item}>Name: {name}</h1>
                                <p style={styles.item}>Average height: {average_height}cm</p>
                                <p style={styles.item}>Average lifespan: {average_lifespan}years</p>

                                <p style={styles.item}>Classification: {classification}</p>
                                <p style={styles.item}>Designation: {designation}</p>
                                <p style={styles.item}>Eye colors: {eye_colors}</p>

                                <p style={styles.item}>Hair colors: {hair_colors}</p>
                                <p style={styles.item}>Skin colors: {skin_colors}</p>
                                <p style={styles.item}>Language: {language}</p>
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
export default Species;