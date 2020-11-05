// Own
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     dish: null
        // }
    }

    renderDish(dish) {
        return (
            <Card width="100%">
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish) {
        return (
            dish.map(comments => {
                if(comments != null) {
                    return (
                        <ul key={comments.id} className="list-unstyled">
                            <li>{comments.comment}</li>
                            <li>--{comments.author}, {comments.date}</li>
                        </ul>
                    );
                }

                else {
                    return (
                        <div></div>
                    );
                }
            })
        );
    }


    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
    
            );
        }
        else  {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;