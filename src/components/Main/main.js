import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import useStyles from './styles';
import useTransactions from '../../utils/useTransactions';

const Main = ({income, expense}) => {
    const styles = useStyles();
    const totalIncome = useTransactions(income);
    const totalExpense = useTransactions(expense);

    return (
        <Card className={styles.root}>
            <CardHeader title="Expense Tracker" align="center"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ${totalIncome.total - totalExpense.total}</Typography>
                <Typography variant="subtitle1" style={{lineHeight: '1.5rem', marginTop: '20px'}}>
                    Description: This app can help you tracking how you spend your money
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={styles.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
