import React, { useState, useEffect } from 'react';

function Films() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://swapi.co/api/films'
        );
        const items = await data.json();
        console.log(items.results)
        setItems(items.results);
    };

    return (
        <div style={styles.container}>
            <hr />
            <h1 style={{ color: "white" }}>F I L M S</h1>
            <hr />
            <ul>
                {
                    items.map((item, index) => (
                        <ul key={index} style={styles.ul}>
                            <li style={styles.title} key={item.title}><b>{item.title}</b></li>
                            <li style={styles.item} key={item.director}>Director: {item.director}</li>
                            <li style={styles.item} key={item.producer}>Producer: {item.producer}</li>
                            <li style={styles.item} key={item.episode_id}>Episode: {item.episode_id}</li>
                            <li style={styles.item} key={item.release_date}>Release date: {item.release_date}</li>
                            <li style={styles.item} key={item.opening_crawl}>Opening crawl: {item.opening_crawl}</li>
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

export default Films;