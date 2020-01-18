import React, { useState, useEffect } from 'react';

function Ships() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://swapi.co/api/starships'
        );
        const items = await data.json();
        console.log(items.results)
        setItems(items.results)
    };

    return (
        <div>
            <hr />
            <h1 style={{ color: "white" }}>S H I P S</h1>
            <hr />
            <ul>
                {
                    items.map((item, index) => (
                        <ul key={index} style={styles.ul}>
                            <li style={styles.title} key={item.name}><b>{item.name}</b></li>
                            <li style={styles.item} key={item.model}>Model: {item.model}</li>
                            <li style={styles.item} key={item.starship_class}>Starship class: {item.starship_class}</li>
                            <li style={styles.item} key={item.manufacturer}>Manufacturer: {item.manufacturer}</li>
                            <li style={styles.item} key={item.cost_in_credits}>Cost in credits: {item.cost_in_credits}</li>
                            <li style={styles.item} key={item.length}>Length: {item.length}m</li>
                            <li style={styles.item} key={item.crew}>Crew: {item.crew}</li>
                            <li style={styles.item} key={item.passengers}>Passengers: {item.passengers}</li>
                            <li style={styles.item} key={item.max_atmosphering_speed}>Max atmosphering speed: {item.max_atmosphering_speed}</li>
                            <li style={styles.item} key={item.hyperdrive_rating}>Hiperdrive rating: {item.hyperdrive_rating}</li>
                            <li style={styles.item} key={item.MGLT}>MGLT: {item.MGLT}</li>
                            <li style={styles.item} key={item.cargo_capacity}>Cargo capacity: {item.cargo_capacity}</li>
                            <li style={styles.item} key={item.created}>Created: {item.created}</li>

                            <hr />
                        </ul>
                    ))
                }
            </ul>
        </div>
    );
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
export default Ships;