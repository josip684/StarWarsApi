import React, { Component } from 'react';
class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemKeys: []
        }
    }

    componentDidMount() {
        this.fetchItems();
    }
    fetchItems = async () => {
        const data = await fetch(
            'https://swapi.co/api/species'
        );
        const items = await data.json();
        console.log(items.results);
        console.log(this.state.students)
        this.setState({
            items: items.results,
            itemKeys: Object.keys(items.results[0])
        })
    };

    renderTableData() {
        return this.state.items.map((item, index) => {
            const { name, classification, designation, average_height,
                skin_colors, hair_colors, eye_colors, average_lifespan,
                homeworld, language, people, films, created, edited, url } = item
            return (
                <tr style={styles.trItem} key={name}>
                    <td style={styles.tdItem}>{name}</td>
                    <td style={styles.tdItem}>{classification}</td>
                    <td style={styles.tdItem}>{designation}</td>
                    <td style={styles.tdItem}>{average_height}</td>
                    <td style={styles.tdItem}>{skin_colors}</td>
                    <td style={styles.tdItem}>{hair_colors}</td>
                    <td style={styles.tdItem}>{eye_colors}</td>
                    <td style={styles.tdItem}>{average_lifespan}</td>
                    <td style={styles.tdItem}>{homeworld}</td>
                    <td style={styles.tdItem}>{language}</td>
                    <td style={styles.tdItem}>{people}</td>
                    <td style={styles.tdItem}>{films}</td>
                    <td style={styles.tdItem}>{created}</td>
                    <td style={styles.tdItem}>{edited}</td>
                    <td style={styles.tdItem}>{url}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = this.state.itemKeys;
        return header.map((key, index) => {
            return <th style={styles.thItem} key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div style={{}}>
                <hr />
                <h1 style={{ color: "white" }}>S P E C I E S</h1>
                <hr />
                <table style={styles.species} id='species'>
                    <tbody>
                        <tr style={styles.trItem}>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
    species: {
        textAlign: "center",
        fontFamily: "Trebuchet MS, Arial, Helvetica, sans-serif",
        borderCollapse: "collapse",
        border: "3px solid #ddd",
        width: "100%",
    },
    tdItem: {
        color: "white",
        alignItems: "left",
        border: "1px solid #ddd",
        padding: "8px"
    },
    trItem: {
        color: "white",
        backgroundColor: "#686968",
        width: "100px"
    },
    thItem: {
        paddingTop: "12px",
        paddingBottom: "12px",
        textAlign: "center",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "1px solid #ddd",
        padding: "8px",
        width: "100px"
    }
}

export default Species;