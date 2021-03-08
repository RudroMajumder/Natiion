import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const CountryDetails = () => {
    const classes = useStyles();
    const {alpha2Code} = useParams();
    const [countryDetails,setCountryDetails] = useState({});
     
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
        .then( res => res.json())
        .then( data => setCountryDetails(data))
    },[]);

    const {name,population,area,region,flag,languages} = countryDetails;
    // console.log(languages[0].name)
    const styles = {
        margin: '20px auto',
        textAlign:'center'
    }

    return (
        <Card className={classes.root} style={styles}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name: {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Popultation: {population}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Area: {area}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Region: {region}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Language: {languages && languages[0].name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/"> <Button size="large" variant="contained" color="primary">
            Go Back
        </Button> </Link>
      </CardActions>
    </Card>
    );
};

export default CountryDetails;