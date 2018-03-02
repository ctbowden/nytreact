import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Results from "../../components/Results";

class Home extends Component {
    state = {
        // articles=[],
        title: null,
        url: null,
        date: null,
        topic: null,
        startYear: null,
        endYear: null,
        results: null
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSavedArticles()
        .then(res =>
        this.setState({ articles: res.data, title: "", url: "", date: ""})
        )
        .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API
            .searchArticles(this.state)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (

                            // <div>
                            //     <h1>Search</h1>
                            // </div>
                            <div>
                                <form>
                                    <h2>Topic:</h2>
                                    <Input
                                        value={this.state.topic}
                                        onChange={this.handleInputChange}
                                        name="topic"
                                        placeholder="Enter Your Topic"
                                        />
                                    <h2>Start Year</h2>
                                    <Input
                                        value={this.state.startYear}
                                        onChange={this.handleInputChange}
                                        name="year"
                                        placeholder="Start Year"
                                        />
                                    <h2>End Year</h2>
                                    <Input
                                        value={this.state.endYear}
                                        onChange={this.handleInputChange}
                                        name="year"
                                        placeholder="Start Year"
                                        />
                                    <FormBtn
                                        disabled={!(this.state.topic || this.state.startYear)}
                                        onClick={this.handleFormSubmit}
                                        >
                                        Submit
                                    </FormBtn>
                                </form>
                                {this.state.results ? <Results results={this.state.results} /> : null}
                            </div>
            // <Container fluid>
            //     <Row>
            //         <Jumbotron>
            //             <div>
            //                 <h1>Results</h1>
            //             </div>
            //             <div>

            //             </div>
            //         </Jumbotron>
            //     </Row>
            // </Container>

        );
    }
}

export default Home;