import React, { useState, useEffect } from 'react';


function People() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://swapi.co/api/people'
        );
        const items = await data.json();
        console.log(items.results)
        setItems(items.results)

    };

    return (
        <div style={styles.container}>
            <hr />
            <h1 style={{ color: "white" }}>P E O P L E</h1>
            <hr />
            <ul>
                {
                    items.map((item, index) => (
                        <ul key={index} style={styles.ul}>
                            <li style={styles.title} key={item.name}><b>{item.name}</b></li>
                            <li style={styles.item} key={item.birth_year}>Birth year: {item.birth_year}</li>
                            <li style={styles.item} key={item.eye_color}>Eye color: {item.eye_color}</li>
                            <li style={styles.item} key={item.gender}>Gender: {item.gender}</li>
                            <li style={styles.item} key={item.hair_color}>Hair color: {item.hair_color}</li>
                            <li style={styles.item} key={item.mass}>Mass: {item.mass}</li>
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

export default People;