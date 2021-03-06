import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Search from './Search';

const styles = theme => ({
    nav: {
        background: "#2E3B55",
        boxShadow: "none",
        marginBottom: "15px",
    },
    container: {
        textAlign: "center"
    },
    nav_item: {
        listStyleType: "none",
        float: "left",
        margin: "10px",
    },
    nav_link: {
        textTransform: "uppercase",
        fontFamily: "sans-serif",
        textDecoration: "none",
        color: "white",
        "&:hover": {
            color: "grey"
        }
    },
    wrapperUL: {
        margin: "auto",
        display: "inline-block",
        padding: "0px"
    }
})

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        // Default categories can be provided in the format below, currently commented out. 
        this.state = {
            categories: [
                "sample",
                "categories",
                "here", 
                "database", 
                "no-work"
            ]
        }
    }

    componentDidMount() {
        // Engineer's Note: the call will return dummy categories only unless you run the node server in the /backend folder too
        axios.get("http://localhost:5000/category/getAllCategories")
            .then(response => {
                this.setState({
                    categories: response.data,
                })
            })
            .catch(error => {
                // console.log("Error! ", error)
            })
    }

    loadCategories = (categories, styles) => {
        return categories.map(category => {
            // Temporarily converting everything to lower case
            category = category.toLowerCase()
            return (<li className={styles.nav_item} key={category}>
                <Link className={styles.nav_link} to={`/category/${category}`}>{category}</Link>
            </li>)
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Search />
                <AppBar className={classes.nav} position='static'>
                    <div className={classes.container}>
                        <ul className={classes.wrapperUL}> {
                            this.state.categories ?
                                this.loadCategories(this.state.categories, classes) : null
                        } 
                        <li className={classes.nav_item} key={'team'}><Link className={classes.nav_link} to={`/team`}>Team</Link> </li>
                        </ul>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header)