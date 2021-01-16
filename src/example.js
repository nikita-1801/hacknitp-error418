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
            <div >
            <div >
                <h1 className="heading"> Indya Azolla</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, s dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
                <Form  onSubmit={this.handleFormSubmit}>
                    <Form.Field >
                        <input className="search" placeholder="What are you searching for?" onChange={this.handleInputChange} />
                    </Form.Field>
                    <Button className="button" type="submit">Submit</Button>
                </Form>
    
                <Segment > 
                    <Header>Here's What we found</Header>
                    {results
                        ? results.map(companyRecord => (
                            <Card fluid >
                                <Card.Content>
                                    <Card.Header>{companyRecord.product}</Card.Header>
                                    {companyRecord.subProducts.map((key, i) => (
                                        <div className="effects" key={i}>
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
            </div>
        );
    }
}

export default FormExampleForm;
