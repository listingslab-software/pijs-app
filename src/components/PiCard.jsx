import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    // Button,
    // CardActions,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import { Icon } from './';
import {
    Camera,
    Weather,
    WeatherHeadline,
} from './';

const useStyles = makeStyles(theme => ({
    screen: {
        minHeight: '100vh',
        display: 'flex',
    },
    card: {
        flexGrow: 1,
        boxShadow: 'none',
    },
    actionBtn: {
    }
}));


function PiCard() {
    // const store = getStore();
    const classes = useStyles();
    const { pi } = useSelector(state => state);
    const {
        error,
        timeout,
        lastConnectSuccess,
        location
    } = pi;

    let status =
    {
        icon: `connected`,
        color: `primary`,
        subheader: location,
    };
    if (Date.now() - lastConnectSuccess > timeout) {
        status = {
            icon: `disconnected`,
            color: `secondary`,
            subheader: `Connecting ...`,
        }
    }

    return (
        <React.Fragment>
            <div className={classes.screen}>
                <Card className={classes.card}>
                    <CardHeader
                        title={`PiJS.app`}
                        subheader={status.subheader}
                        avatar={
                            <IconButton className={classes.none}>
                                <Icon icon={`pi`} color={`primary`} />
                            </IconButton>}
                        action={
                            <IconButton className={classes.actionBtn}>
                                <Tooltip title={error}>
                                    <Icon icon={status.icon} color={status.color} />
                                </Tooltip>
                            </IconButton>}
                    />
                    <CardContent>
                        <WeatherHeadline />
                        <Camera />
                        <Weather />
                    </CardContent>
                    {status.icon === `connected` ? null : null}
                    {/* <CardActions>
                        <Button
                            variant={`contained`}
                            color={`secondary`}
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(`dicks.`)
                            }}>
                            Share
                        </Button>
                    </CardActions> */}
                </Card>
            </div>

        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(PiCard);
export default MemodFuncComponent;