import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    IconButton,
    Tooltip,
    Dialog,
    Card,
    CardContent,
    // Button,
    // CardActions,
    CardHeader,
    Typography,
} from '@material-ui/core/';
import {
    Icon
} from './';

const useStyles = makeStyles(theme => ({
    userEntity: {
        // border: '1px solid gold',
    },
    actions: {
        border: '1px solid gold',
        textAlign: 'right',
    },
    minWidth: {
        width: 330,
    }
}));

function UserEntity() {
    const store = getStore();
    const classes = useStyles();
    const { firebase, system } = useSelector(state => state);
    const { entity } = firebase;
    const { location } = entity;
    
    const { userEntityOpen } = system;

    if (location === null) return null;

    return (
        <React.Fragment>
            <React.Fragment>
                <Dialog
                    fullScreen={false}
                    open={userEntityOpen}
                    onClose={() => {
                        store.dispatch({
                            type: `SYSTEM/TOGGLE/USERENTITY`,
                            open: false,
                        });
                    }}>
                    <Card>
                        <CardHeader
                            title={`UserEntity`}
                            avatar={<Avatar
                                alt={`country flag`}
                                src={location.countryFlag || ''}
                            />}
                            subheader={`${location.countryName} ${entity.location.city} ${entity.location.district}`}
                            action={<Tooltip title={`Close`}>
                                <IconButton
                                    onClick={() => {
                                        store.dispatch({
                                            type: `SYSTEM/TOGGLE/USERENTITY`,
                                            open: false,
                                        });
                                    }}
                                    color={`inherit`}>
                                    <Icon icon={`close`} color={`inherit`} />
                                </IconButton>
                            </Tooltip>}
                        />
                        <CardContent>
                            <div className={classes.minWidth}>
                                <Typography>

                                </Typography>
                            </div>
                        </CardContent>
                        {/* <CardActions className={classes.actions}>
                            <Button
                                variant={`outlined`}
                                color={`secondary`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: `SYSTEM/TOGGLE/USERENTITY`,
                                        open: false
                                    });
                                }}
                            >Close</Button>
                        </CardActions> */}
                    </Card>
                </Dialog>
            </React.Fragment>

            <div className={classes.userEntity}>
                <Tooltip title={`User Entity`}>
                    <IconButton
                        className={classes.homeBtn}
                        onClick={() => {
                            store.dispatch({
                                type: `SYSTEM/TOGGLE/USERENTITY`,
                                open: true,
                            });
                        }}
                        color={`inherit`}>
                        <Icon icon={`userentity`} color={`secondary`} />
                    </IconButton>
                </Tooltip>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;
