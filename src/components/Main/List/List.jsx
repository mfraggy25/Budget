import React, {useContext} from "react";
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const { deleteTransaction } = useContext(ExpenseTrackerContext);

    const transactions = [
        {id: 1, type: "Income", category: "Salary", amount: 50, date: "Thurs Dec 31"},
        {id: 1, type: "Expense", category: "Cell Phone", amount: 100, date: "Tues Dec 29"},
        {id: 1, type: "Income", category: "Business", amount: 40, date: "Wed Dec 23"}    
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List;