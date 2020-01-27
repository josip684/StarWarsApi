import React, { Component } from 'react';

class Films extends Component {
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
        fetch('https://swapi.co/api/films')
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
                <h1 style={{ color: "white" }}>F I L M S</h1>
                <hr />
                <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        items.map(item => {
                        const { director, title, episode_id, opening_crawl, producer, release_date } = item;
                        return (
                            <div key={title}>
                                <h1 style={styles.item}>Title: {title}</h1>
                                <p style={styles.item}>Director: {director}</p>
                                <p style={styles.item}>Episode id: {episode_id}</p>

                                <p style={styles.item}>Opening crawl: {opening_crawl}</p>
                                <p style={styles.item}>Producer: {producer}</p>
                                <p style={styles.item}>Release date: {release_date}</p>

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
export default Films;