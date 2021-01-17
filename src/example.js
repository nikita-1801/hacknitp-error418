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
                <h1 className="heading"> <mark>Indya Azolla</mark></h1>
                <br/>
                <br/>
                <p className="desc">
                 <mark>One Stop Destination for all your sustainable needs. <br/>
                 Dive one step closer to achieving sustainability by reading success stories in our blog section.<br />
                 Buy Products at the ease of one click and Dispose them with a faciluty of pickup from your doorstep.< br/>
                 Stay updated and know whats tweeting around</mark>
</p>
                <Form  onSubmit={this.handleFormSubmit}>
                    <Form.Field >
                        <input className="search" placeholder="What are you searching for?" onChange={this.handleInputChange} />
                    </Form.Field>
                    <Button className="submit" type="submit">Submit</Button>
                </Form>
                <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                  
                  {results
                        ? results.map(companyRecord => (
                            <Card >
                                <Card.Content>
                                    <Card.Header>{companyRecord.product}</Card.Header>
                                    {companyRecord.subProducts.map((key, i) => (
                                     
                                        <div className="effects" key={i}>
                                           
                                            <Card.Description>{`${
                                                key.name
                                            }`}
                                             <br />
                                              <img src={key.img_src} alt className="image"/>
                                            </Card.Description>
                                            <Card.Description>{` ${
                                                key.fact
                                            }`}</Card.Description>
                                            <a href={key.link} className="link" target="_blank">  <Card.Description>{`Best link to buy: ${
                                                key.link
                                            } `}</Card.Description>  </a>
                                        </div>
                                    ))}
                                </Card.Content>
                            </Card>
                        ))
                        : []}
               
               
            </div>
            </div>
        );
    }
}

export default FormExampleForm;
//  