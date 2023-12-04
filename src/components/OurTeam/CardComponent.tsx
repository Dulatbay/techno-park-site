import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
    avatar: string;
    name: string;
    description: string;
    reviewText: string;
}

const CardComponent: React.FC<CardProps> = ({ avatar, name, description, reviewText }) => {
    return (
        <Card>
            <Card.Body>
                <Image src={avatar} roundedCircle style={{ width: '50px', height: '50px' }} />
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                <Card.Text>{reviewText}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
