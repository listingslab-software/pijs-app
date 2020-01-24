import React from 'react';
// import { getStore } from '../';
// import { Icon } from './';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    IconButton,
    Toolbar,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    cameraControls: {
        border: '1px solid purple',
    },
    iconPusher: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing()
    }
}));

function CameraControls() {
    // const store = getStore();
    const classes = useStyles();
    const { camera } = useSelector(state => state);
    const {
        // lastSuccessfulLoad,
        running,
    } = camera;
    // const { isMobile } = userEntity;

    if (!running) { return null }

    return (
        <div className={classes.cameraControls}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => { }}
                        color="inherit"
                    >
                        <Icon icon={`home`} color={`inherit`} />
                    </IconButton>

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => { }}
                        color="inherit"
                    >
                        <Icon icon={`privacy`} color={`inherit`} />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}

const MemodFuncComponent = React.memo(CameraControls);
export default MemodFuncComponent;

/*
<Button
                variant={`contained`}
                className={classes.zoomButton}
                size={`small`}
                color={`secondary`}
                onClick={() => { }}>
                <Icon icon={`reset`} color={`inherit`} />
                {!isMobile ? <span className={classes.iconPusher}>Reset</span> : null}
            </Button>

            <Button
                variant={`contained`}
                className={classes.zoomButton}
                size={`small`}
                color={`secondary`}
                onClick={() => { }}>
                <Icon icon={`zoomin`} color={`inherit`} />
                {!isMobile ? <span className={classes.iconPusher}>Zoom In</span> : null}
            </Button>

            <Button
                variant={`contained`}
                className={classes.zoomButton}
                size={`small`}
                color={`secondary`}
                onClick={() => { }}>
                <Icon icon={`zoomout`} color={`inherit`} />
                {!isMobile ? <span className={classes.iconPusher}>Zoom Out</span> : null}
            </Button>
*/