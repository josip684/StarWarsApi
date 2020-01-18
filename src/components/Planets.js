import React, { useState, useEffect } from 'react';

function Planets() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://swapi.co/api/planets'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);

    };
    return (
        <div style={{ justifyItems: "left" }}>
            <hr />
            <h1 style={{ color: "white" }}>P L A N E T S</h1>
            <hr />
            <ul>
                {
                    items.map((item, index) => (
                        <ul key={index} style={styles.ul}>
                            <li style={styles.title} key={item.name}><b>{item.name}</b></li>
                            <li style={styles.item} key={item.diameter}>Diameter: {item.diameter}</li>
                            <li style={styles.item} key={item.rotation_period}>Rotation period: {item.rotation_period}</li>
                            <li style={styles.item} key={item.orbital_period}>Orbital period: {item.orbital_period}</li>
                            <li style={styles.item} key={item.gravity}>Gravity: {item.gravity}</li>
                            <li style={styles.item} key={item.climate}>Climate: {item.climate}</li>
                            <li style={styles.item} key={item.terrain}>Terrain: {item.terrain}</li>
                            <li style={styles.item} key={item.surface_water}>Surface water: {item.surface_water}</li>
                            <li style={styles.item} key={item.created}>Created: {item.created}</li>
                            <hr />
                        </ul>
                    ))
                }
            </ul>
        </div>
    )
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