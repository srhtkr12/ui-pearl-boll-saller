import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const ImageCard = ({ alt, image, id, key, path, height, width }) => {

    return (
        <Card>
            <CardMedia
                component="img"
                id={id}
                alt={alt}
                image={image}
                width={width}
                height={height}
            />
        </Card>
    );
}