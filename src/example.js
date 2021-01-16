import React from "react";
import { Button, Form, Segment, Header, Card } from "semantic-ui-react";
import dummydata from "./data";
import "./App.css";
class FormExampleForm extends React.Component {
    state = {
        query: "",
        results: [],
        DummyData: dummydata
    };

    handleFormSubmit = () => {
        const { query, DummyData } = this.state;

        const data_filter = DummyData.filter(contact => {
            return contact.subProducts.some(foreignKey => {
                return foreignKey.name.toLowerCase().includes(query.toLowerCase());
            });
        });

        if (query.length < 1) return this.setState({ results: [], query: "" });
        this.setState({ results: data_filter });
    };

    handleInputChange = e => this.setState({ query: e.target.value });

    render() {
        const { results } = this.state;
        return (
            <div>
                <Form className="title" onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label >Enter The Product You want to look for!</label>
                        <input placeholder="ID" onChange={this.handleInputChange} />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>

                <Segment>
                    <Header>Results:</Header>
                    {results
                        ? results.map(companyRecord => (
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>{companyRecord.product}</Card.Header>
                                    {companyRecord.subProducts.map((key, i) => (
                                        <div key={i}>
                                            <hr />
                                            <Card.Description>{`Name: ${
                                                key.name
                                            }`}</Card.Description>
                                            <Card.Description>{`Fun Fact: ${
                                                key.fact
                                            }`}</Card.Description>
                                            <a href={key.link} >  <Card.Description>{`Best link to buy: ${
                                                key.link
                                            }`}</Card.Description>  </a>
                                        </div>
                                    ))}
                                </Card.Content>
                            </Card>
                        ))
                        : []}
                </Segment>
            </div>
        );
    }
}

export default FormExampleForm;
