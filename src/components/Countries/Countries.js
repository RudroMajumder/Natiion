import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Countries = (props) => {
    const {name,flag,alpha2Code} = props.country;
    const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/alpha/"+alpha2Code}> <Button size="large" variant="contained" color="primary">
            Details
        </Button> </Link>
      </CardActions>
    </Card>
  );
}

export default Countries;