import React, {useContext} from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide} from '@material-ui/core';
import { Delete, MoneyOff} from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../context/context';

const List = () => {
    const styles = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

    return (
        <MUIList className={styles.list} dense={false}>
            {
                transactions.map((transaction) => {
                    return <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={transaction.type === "Income" ? styles.avatarIncome : styles.avatarExpense}>
                                            <MoneyOff />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} : ${transaction.date}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" onClick={() => {}}>
                                            <Delete onClick={() => deleteTransaction(transaction.id)} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Slide>
                })
            }
        </MUIList>
    )
}

export default List;
